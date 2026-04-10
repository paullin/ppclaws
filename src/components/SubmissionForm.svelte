<script lang="ts">
  interface FormProps {
    title: string;
    description: string;
    labels: {
      name: string;
      type: string;
      url: string;
      description: string;
      contact: string;
      submit: string;
    };
    placeholders: {
      name: string;
      type: string;
      url: string;
      description: string;
      contact: string;
    };
    types: Array<{ value: string; label: string }>;
  }

  let { 
    title = "", 
    description = "", 
    labels, 
    placeholders, 
    types = [] 
  }: FormProps = $props();

  let formData = $state({
    name: '',
    type: '',
    url: '',
    description: '',
    contact: ''
  });

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    // Logic for Iteration 11
    alert('Submission successful!');
  }
</script>

<section id="submit" class="w-full relative overflow-hidden rounded-3xl border border-gray-200 dark:border-astro-border bg-white dark:bg-astro-card shadow-sm">
  <!-- Decorative Background Elements -->
  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-white dark:from-astro-card dark:to-[#0d0f14] -z-10"></div>
  <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute -bottom-32 -left-32 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

  <div class="w-full p-8 sm:p-12 lg:p-16">
    <div class="text-center mb-12">
      <div class="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-5 text-primary">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </div>
      <h2 class="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">{title}</h2>
      <p class="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
    </div>
    
    <form onsubmit={handleSubmit} class="space-y-6 max-w-3xl mx-auto bg-white/50 dark:bg-gray-900/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2.5 group">
          <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {labels.name} <span class="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            bind:value={formData.name} 
            required 
            placeholder={placeholders.name} 
            class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
          >
        </div>
        
        <div class="space-y-2.5 group">
          <label for="type" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            {labels.type} <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select 
              id="type" 
              bind:value={formData.type} 
              required 
              class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer shadow-sm"
            >
              <option value="" disabled selected hidden>{placeholders.type}</option>
              {#each types as type}
                <option value={type.value}>{type.label}</option>
              {/each}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div class="space-y-2.5 group">
        <label for="url" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {labels.url} <span class="text-red-500">*</span>
        </label>
        <input 
          type="url" 
          id="url" 
          bind:value={formData.url} 
          required 
          placeholder={placeholders.url} 
          class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
        >
      </div>
      
      <div class="space-y-2.5 group">
        <label for="description" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {labels.description} <span class="text-red-500">*</span>
        </label>
        <textarea 
          id="description" 
          bind:value={formData.description} 
          rows="4" 
          required 
          placeholder={placeholders.description} 
          class="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none shadow-sm"
        ></textarea>
      </div>
      
      <div class="space-y-2.5 group">
        <label for="contact" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {labels.contact}
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <input 
            type="text" 
            id="contact" 
            bind:value={formData.contact} 
            placeholder={placeholders.contact} 
            class="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
          >
        </div>
      </div>

      <div class="pt-4">
        <button 
          type="submit" 
          class="w-full py-4 px-6 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2 group/btn"
        >
          {labels.submit}
          <svg class="w-5 h-5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</section>
