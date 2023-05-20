<script>
  import { onMount } from 'svelte';
  import Editor from '@tinymce/tinymce-svelte';
  

  export let content = '';

  onMount(() => {
    if (typeof window !== 'undefined') {
      require('@tinymce/tinymce-react');
    }
  });
</script>

<div>
<Editor
    apiKey="your-tiny-cloud-api-key"
  />
</div>
