<!-- src/routes/createProposal.svelte -->
<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import RichTextEditor from '/src/components/RichTextEditor.svelte';

  let templateId;
  let title = '';
  let content = '';

  onMount(() => {
    // In a real app, we would fetch the template data using the templateId and prefill the title and content
  });

  function createProposal() {
    // In a real app, we would save the proposal to the database
    goto('/proposals');
  }
</script>

<div>
  <h1>Create Proposal</h1>

  <div class="mb-4">
    <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
    <input id="title" name="title" type="text" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" bind:value={title}>
  </div>

  <div class="mb-4">
    <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
    <div class="mt-1">
      <RichTextEditor bind:content={content} />
    </div>
  </div>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={createProposal}>Create Proposal</button>
</div>
