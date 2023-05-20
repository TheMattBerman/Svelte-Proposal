<script>
  import { onMount } from 'svelte';
  import Editor from '@tinymce/tinymce-svelte';
  import.meta.env.VITE_tiny_api
  

  export let content = '';

  onMount(() => {
    if (typeof window !== 'undefined') {
      require('@tinymce/tinymce-react');
    }
  });
</script>

<div>
<Editor
    apiKey="VITE_tiny_api"
  />
</div>
