<script>
  import { goto } from '$app/navigation';

  // This is dummy data. Replace it with real data from your PocketBase database
  let templates = [
    { id: 1, title: 'Digital Marketing Proposal', description: 'A proposal template for digital marketing projects.' },
    { id: 2, title: 'Branding Proposal', description: 'A proposal template for branding projects.' },
    // Add more templates as needed
  ];

  function useTemplate(id) {
    // This should navigate to the proposal creation page and prefill the form with the selected template
    // Replace '/createProposal' with the actual route to your proposal creation page
    goto(`/createProposal?templateId=${id}`);
  }
</script>

<div>
  <h1>Templates</h1>

  <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each templates as template (template.id)}
      <li class="rounded bg-white shadow-lg p-6">
        <h2 class="font-bold text-lg mb-2">{template.title}</h2>
        <p class="text-gray-700 text-base mb-4">{template.description}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                on:click={() => useTemplate(template.id)}>Use Template</button>
      </li>
    {/each}
  </ul>
</div>
