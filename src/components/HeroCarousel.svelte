<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  type HeroItem = {
    image: any;
    title: string;
    description?: string;
    badge?: string;
    link: string;
  };
  
  let { items = [] }: { items: HeroItem[] } = $props();
  
  let currentIndex = $state(0);
  let isDragging = $state(false);
  let startX = $state(0);
  let currentTranslate = $state(0);
  let prevTranslate = $state(0);
  
  let carouselRef: HTMLElement;
  let autoplayTimer: ReturnType<typeof setInterval>;
  let isHovered = $state(false);
  
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isHovered && !isDragging) {
        next();
      }
    }, 5000);
  };
  
  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
    }
  };
  
  const next = () => {
    currentIndex = (currentIndex + 1) % items.length;
    resetTranslate();
  };
  
  const prev = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    resetTranslate();
  };
  
  const goTo = (index: number) => {
    currentIndex = index;
    resetTranslate();
    startAutoplay(); // Reset timer on manual action
  };
  
  const resetTranslate = () => {
    currentTranslate = 0;
    prevTranslate = 0;
  };
  
  // Touch handlers
  const touchStart = (event: TouchEvent | MouseEvent) => {
    isDragging = true;
    startX = getPositionX(event);
    stopAutoplay();
  };
  
  const touchMove = (event: TouchEvent | MouseEvent) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    currentTranslate = currentPosition - startX;
  };
  
  const touchEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    const movedBy = currentTranslate;
    
    // threshold for swipe
    if (movedBy < -50) {
      next();
    } else if (movedBy > 50) {
      prev();
    } else {
      resetTranslate();
    }
    startAutoplay();
  };
  
  const getPositionX = (event: TouchEvent | MouseEvent) => {
    return event.type.includes('mouse') 
      ? (event as MouseEvent).pageX 
      : (event as TouchEvent).touches[0].clientX;
  };
  
  onMount(() => {
    startAutoplay();
  });
  
  onDestroy(() => {
    stopAutoplay();
  });
</script>

<div 
  class="relative w-full overflow-hidden group aspect-[16/9] md:aspect-[21/9] bg-neutral-900 rounded-2xl shadow-lg"
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
  bind:this={carouselRef}
  role="region"
  aria-roledescription="carousel"
  aria-label="Hero Carousel"
>
  <div 
    class="flex h-full transition-transform duration-500 ease-out"
    style="transform: translateX(calc(-{currentIndex * 100}% + {currentTranslate}px)); {isDragging ? 'transition: none;' : ''}"
    onmousedown={touchStart}
    ontouchstart={touchStart}
    onmousemove={touchMove}
    ontouchmove={touchMove}
    onmouseup={touchEnd}
    ontouchend={touchEnd}
    onmouseleave={touchEnd}
    role="presentation"
  >
    {#each items as item, index}
      <a 
        href={item.link}
        class="w-full h-full flex-shrink-0 relative select-none block no-underline"
        draggable="false"
      >
        <img 
          src={typeof item.image === 'string' ? item.image : item.image?.src} 
          alt={item.title} 
          class="w-full h-full object-cover pointer-events-none"
          draggable="false"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end">
          <div class="w-full p-6 md:p-12 text-left">
            {#if item.badge}
              <span class="inline-block bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded mb-3 tracking-wider uppercase">
                {item.badge}
              </span>
            {/if}
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight max-w-2xl drop-shadow-sm">
              {item.title}
            </h2>
            {#if item.description}
              <p class="text-sm md:text-base text-gray-200 max-w-xl line-clamp-2 md:line-clamp-none opacity-90">
                {item.description}
              </p>
            {/if}
          </div>
        </div>
      </a>
    {/each}
  </div>

  <!-- Indicators -->
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
    {#each items as _, index}
      <button 
        type="button"
        class="w-2 h-2 rounded-full transition-all duration-300 {currentIndex === index ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'}"
        onclick={(e) => { e.preventDefault(); goTo(index); }}
        aria-label="Go to slide {index + 1}"
      ></button>
    {/each}
  </div>

  <!-- Navigation Arrows -->
  <button 
    class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/30 backdrop-blur-sm z-10"
    onclick={(e) => { e.preventDefault(); prev(); }}
    aria-label="Previous slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </button>
  <button 
    class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/30 backdrop-blur-sm z-10"
    onclick={(e) => { e.preventDefault(); next(); }}
    aria-label="Next slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </button>
</div>
