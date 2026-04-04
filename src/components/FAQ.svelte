<script lang="ts">
  type FAQItem = {
    question: string;
    answer: string;
  };

  interface Props {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
    multiple?: boolean;
    moreText?: string;
    moreLink?: string;
  }

  let { 
    title = "", 
    subtitle = "", 
    items = [], 
    multiple = false,
    moreText = "",
    moreLink = ""
  }: Props = $props();

  let openIndexes = $state<number[]>([]);

  function toggle(index: number) {
    if (multiple) {
      if (openIndexes.includes(index)) {
        openIndexes = openIndexes.filter(i => i !== index);
      } else {
        openIndexes = [...openIndexes, index];
      }
    } else {
      if (openIndexes.includes(index)) {
        openIndexes = [];
      } else {
        openIndexes = [index];
      }
    }
  }
</script>

<section class="max-w-3xl mx-auto w-full">
  {#if title || subtitle}
    <div class="text-center mb-10">
      {#if title}
        <h2 class="text-3xl font-bold tracking-tight mb-3 text-gray-900 dark:text-white">{title}</h2>
      {/if}
      {#if subtitle}
        <p class="text-gray-500 dark:text-gray-400">{subtitle}</p>
      {/if}
    </div>
  {/if}

  <div class="space-y-4" id="faq-container">
    {#each items as item, index}
      <div class="border border-gray-200 dark:border-astro-border rounded-xl bg-white dark:bg-astro-card overflow-hidden">
        <button
          class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
          onclick={() => toggle(index)}
          aria-expanded={openIndexes.includes(index)}
        >
          <span class="font-medium text-lg text-gray-900 dark:text-white">
            {item.question}
          </span>
          <svg
            class="w-5 h-5 text-gray-400 transition-transform duration-300 {openIndexes.includes(index) ? 'rotate-180' : ''}"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {#if openIndexes.includes(index)}
          <div 
            class="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300"
          >
            {item.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  {#if moreText && moreLink}
    <div class="mt-6 text-center">
      <a 
        href={moreLink} 
        class="text-sm font-medium text-[#8b5cf6] hover:underline inline-flex items-center gap-1"
      >
        {moreText}
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7M3 12h18" />
        </svg>
      </a>
    </div>
  {/if}
</section>

<style>
  /* Optional: Custom animation if Tailwind's animate-in isn't enough */
  .animate-in {
    animation-fill-mode: forwards;
  }
</style>
