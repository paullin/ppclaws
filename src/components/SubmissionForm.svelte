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

<section id="submit" class="max-w-3xl mx-auto border border-gray-200 dark:border-astro-border bg-white dark:bg-astro-card rounded-2xl p-6 sm:p-10 shadow-sm">
  <div class="text-center mb-8">
    <h2 class="text-2xl font-bold tracking-tight mb-2 text-gray-900 dark:text-white">{title}</h2>
    <p class="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
  </div>
  
  <form onsubmit={handleSubmit} class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-2">
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {labels.name} <span class="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          id="name" 
          bind:value={formData.name} 
          required 
          placeholder={placeholders.name} 
          class="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
        >
      </div>
      
      <div class="space-y-2">
        <label for="type" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {labels.type} <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select 
            id="type" 
            bind:value={formData.type} 
            required 
            class="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled selected hidden>{placeholders.type}</option>
            {#each types as type}
              <option value={type.value}>{type.label}</option>
            {/each}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <div class="space-y-2">
      <label for="url" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {labels.url} <span class="text-red-500">*</span>
      </label>
      <input 
        type="url" 
        id="url" 
        bind:value={formData.url} 
        required 
        placeholder={placeholders.url} 
        class="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
      >
    </div>
    
    <div class="space-y-2">
      <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {labels.description} <span class="text-red-500">*</span>
      </label>
      <textarea 
        id="description" 
        bind:value={formData.description} 
        rows="4" 
        required 
        placeholder={placeholders.description} 
        class="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
      ></textarea>
    </div>
    
    <div class="space-y-2">
      <label for="contact" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {labels.contact}
      </label>
      <input 
        type="text" 
        id="contact" 
        bind:value={formData.contact} 
        placeholder={placeholders.contact} 
        class="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
      >
    </div>

    <button 
      type="submit" 
      class="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors flex justify-center items-center gap-2 shadow-sm"
    >
      {labels.submit}
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    </button>
  </form>
</section>
