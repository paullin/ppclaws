<script lang="ts">
  import { onMount } from 'svelte';

  export let title: string = "帮助我们改进";
  export let description: string = "告诉我们您对 OpenClaw 的使用体验，以便我们为您提供更好的内容。";
  export let buttonText: string = "参与问卷";
  export let tagText: string = "Research";

  let showModal = false;
  let currentStep = 1;
  const totalSteps = 4;
  let isSuccess = false;

  let formData = {
    familiarity: '',
    role: '',
    content_needs: [] as string[],
    suggestions: ''
  };

  function openModal() {
    showModal = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    showModal = false;
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      isSuccess = false;
      currentStep = 1;
      formData = {
        familiarity: '',
        role: '',
        content_needs: [],
        suggestions: ''
      };
    }, 300);
  }

  function nextStep() {
    if (currentStep < totalSteps) currentStep++;
  }

  function prevStep() {
    if (currentStep > 1) currentStep--;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    isSuccess = true;
    
    // Load confetti if not already loaded
    if (typeof window !== 'undefined' && !(window as any).confetti) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
      script.onload = fireConfetti;
      document.head.appendChild(script);
    } else {
      fireConfetti();
    }
  }

  function fireConfetti() {
    const confetti = (window as any).confetti;
    if (typeof confetti === 'function') {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }
  }

  $: isStepValid = () => {
    if (currentStep === 1) return formData.familiarity !== '';
    if (currentStep === 2) return formData.role !== '';
    return true; // Step 3 and 4 are optional
  };
</script>

<section id="survey" class="w-full">
  <div class="relative w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-astro-border bg-white dark:bg-[#1e2330] shadow-sm flex flex-col md:flex-row group">
    <!-- Left Abstract CSS Pattern -->
    <div class="w-full md:w-5/12 lg:w-1/2 aspect-4/3 md:aspect-auto relative overflow-hidden bg-primary/5 dark:bg-[#151923] flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-astro-border group">
      <!-- Ambient glows -->
      <div class="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-[64px] mix-blend-multiply dark:mix-blend-screen transition-transform duration-1000 group-hover:scale-150"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[64px] mix-blend-multiply dark:mix-blend-screen transition-transform duration-1000 delay-100 group-hover:scale-150"></div>
      
      <!-- CSS Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 24px 24px;"></div>
      
      <!-- Central Icon Graphic -->
      <div class="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-astro-card rounded-3xl shadow-xl border border-gray-100 dark:border-astro-border flex items-center justify-center transform -rotate-6 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-2xl">
        <svg class="w-16 h-16 md:w-20 md:h-20 text-primary opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        
        <!-- Floating decorative elements -->
        <div class="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 text-white rounded-xl shadow-lg flex items-center justify-center transform rotate-12 animate-pulse">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <div class="absolute -bottom-5 -left-5 w-12 h-12 bg-white dark:bg-astro-card border border-gray-100 dark:border-astro-border rounded-full shadow-lg flex items-center justify-center transform -rotate-12 transition-transform duration-500 group-hover:-translate-y-2">
          <span class="text-xl">✨</span>
        </div>
      </div>
      
      <!-- Subtle gradient overlay -->
      <div class="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/5 dark:to-black/20 pointer-events-none"></div>
    </div>
    <!-- Right Content -->
    <div class="w-full md:w-7/12 lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
      <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 pointer-events-none"></div>
      <span class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full w-max mb-5 uppercase tracking-wider">{tagText}</span>
      <h2 class="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">{title}</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg max-w-lg">{description}</p>
      <button on:click={openModal} class="px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 w-max group/btn">
        {buttonText} <svg class="w-5 h-5 transition-transform group-hover/btn:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </button>
    </div>
  </div>
</section>

<!-- Survey Modal -->
{#if showModal}
<div class="fixed inset-0 z-50 flex items-center justify-center">
  <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" on:click={closeModal}></div>
  
  <div class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1e2330] rounded-2xl shadow-2xl m-4 border border-gray-200 dark:border-astro-border flex flex-col">
    
    <!-- Modal Header & Progress Bar -->
    <div class="sticky top-0 z-10 bg-white/95 dark:bg-[#1e2330]/95 backdrop-blur-md border-b border-gray-100 dark:border-astro-border">
      <div class="flex items-center justify-between px-6 sm:px-8 py-5">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">User Research Survey</h3>
        <button on:click={closeModal} class="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <!-- Progress Bar -->
      {#if !isSuccess}
      <div class="w-full h-1.5 bg-gray-100 dark:bg-gray-800">
        <div class="h-full bg-primary transition-all duration-500 ease-out" style="width: {(currentStep / totalSteps) * 100}%"></div>
      </div>
      {/if}
    </div>

    <!-- Modal Body -->
    <div class="p-6 sm:p-8">
      {#if !isSuccess}
      <form on:submit={handleSubmit}>
        
        <!-- Step 1 -->
        <div class="survey-step" class:hidden={currentStep !== 1}>
          <div class="mb-6">
            <span class="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">Step 1 of 4</span>
            <label class="block font-bold text-gray-900 dark:text-white text-xl sm:text-2xl leading-tight">How familiar are you with OpenClaw? <span class="text-red-500">*</span></label>
          </div>
          <div class="space-y-3">
            <label class="flex items-center gap-4 p-4 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.familiarity === 'heard' ? 'border-primary bg-primary/5' : ''}">
              <input type="radio" bind:group={formData.familiarity} value="heard" class="w-5 h-5 text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600">
              <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Just heard of it, haven't used it yet</span>
            </label>
            <label class="flex items-center gap-4 p-4 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.familiarity === 'basic' ? 'border-primary bg-primary/5' : ''}">
              <input type="radio" bind:group={formData.familiarity} value="basic" class="w-5 h-5 text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600">
              <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Used basic features (e.g., standard Skills)</span>
            </label>
            <label class="flex items-center gap-4 p-4 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.familiarity === 'advanced' ? 'border-primary bg-primary/5' : ''}">
              <input type="radio" bind:group={formData.familiarity} value="advanced" class="w-5 h-5 text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600">
              <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Experienced user / Have built custom Skills</span>
            </label>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="survey-step" class:hidden={currentStep !== 2}>
          <div class="mb-6">
            <span class="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">Step 2 of 4</span>
            <label class="block font-bold text-gray-900 dark:text-white text-xl sm:text-2xl leading-tight">What is your primary role? <span class="text-red-500">*</span></label>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="flex items-center justify-center text-center p-5 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.role === 'pm' ? 'border-primary bg-primary/5 dark:bg-primary/10' : ''}">
              <input type="radio" bind:group={formData.role} value="pm" class="sr-only">
              <span class="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Product Manager</span>
            </label>
            <label class="flex items-center justify-center text-center p-5 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.role === 'designer' ? 'border-primary bg-primary/5 dark:bg-primary/10' : ''}">
              <input type="radio" bind:group={formData.role} value="designer" class="sr-only">
              <span class="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Designer</span>
            </label>
            <label class="flex items-center justify-center text-center p-5 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.role === 'developer' ? 'border-primary bg-primary/5 dark:bg-primary/10' : ''}">
              <input type="radio" bind:group={formData.role} value="developer" class="sr-only">
              <span class="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Developer</span>
            </label>
            <label class="flex items-center justify-center text-center p-5 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.role === 'marketing' ? 'border-primary bg-primary/5 dark:bg-primary/10' : ''}">
              <input type="radio" bind:group={formData.role} value="marketing" class="sr-only">
              <span class="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Marketing</span>
            </label>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="survey-step" class:hidden={currentStep !== 3}>
          <div class="mb-6">
            <span class="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">Step 3 of 4</span>
            <label class="block font-bold text-gray-900 dark:text-white text-xl sm:text-2xl leading-tight">What kind of content are you most looking forward to?</label>
          </div>
          <div class="grid grid-cols-1 gap-3 sm:gap-4">
            <label class="flex items-center gap-4 p-4 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.content_needs.includes('setup') ? 'border-primary bg-primary/5' : ''}">
              <input type="checkbox" bind:group={formData.content_needs} value="setup" class="w-5 h-5 rounded text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600">
              <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Basic Setup Tutorials</span>
            </label>
            <label class="flex items-center gap-4 p-4 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.content_needs.includes('agent') ? 'border-primary bg-primary/5' : ''}">
              <input type="checkbox" bind:group={formData.content_needs} value="agent" class="w-5 h-5 rounded text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600">
              <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Advanced Agent Configuration</span>
            </label>
            <label class="flex items-center gap-4 p-4 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.content_needs.includes('industry') ? 'border-primary bg-primary/5' : ''}">
              <input type="checkbox" bind:group={formData.content_needs} value="industry" class="w-5 h-5 rounded text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600">
              <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Industry-specific Skills</span>
            </label>
            <label class="flex items-center gap-4 p-4 border border-gray-200 dark:border-astro-border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all hover:border-primary/50 group {formData.content_needs.includes('dev') ? 'border-primary bg-primary/5' : ''}">
              <input type="checkbox" bind:group={formData.content_needs} value="dev" class="w-5 h-5 rounded text-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600">
              <span class="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Custom Development Guide</span>
            </label>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="survey-step" class:hidden={currentStep !== 4}>
          <div class="mb-6">
            <span class="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">Step 4 of 4</span>
            <label class="block font-bold text-gray-900 dark:text-white text-xl sm:text-2xl leading-tight">Any other suggestions?</label>
          </div>
          <textarea bind:value={formData.suggestions} rows="6" placeholder="Tell us what you think..." class="w-full p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none text-lg text-gray-900 dark:text-white"></textarea>
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-10 flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-800">
          <button type="button" on:click={prevStep} class="px-6 py-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium transition-colors flex items-center gap-2 {currentStep === 1 ? 'invisible' : ''}">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Back
          </button>
          
          {#if currentStep < totalSteps}
          <button type="button" on:click={nextStep} disabled={!isStepValid()} class="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            Next <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          {:else}
          <button type="submit" class="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
            Submit <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
          {/if}
        </div>
      </form>
      {:else}
      <!-- Success State -->
      <div class="text-center py-12 sm:py-20 animate-fade-in">
        <div class="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 transform scale-100">
          <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">Thank you for your feedback!</h3>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">Your input is invaluable to us.</p>
        <button on:click={closeModal} class="px-8 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl transition-colors font-medium">
          Close
        </button>
      </div>
      {/if}
    </div>
  </div>
</div>
{/if}

<style>
  .animate-fade-in {
    animation: fadeInUp 0.3s ease-out forwards;
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>