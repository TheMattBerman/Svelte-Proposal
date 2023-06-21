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
    apiKey="563ng2fby6ysq4mg4oe41lb1dc7io4ay9ntsgj2ffib086oh"
  />
</div>
