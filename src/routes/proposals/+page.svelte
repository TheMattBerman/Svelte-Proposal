<script>  

  import { onMount } from 'svelte';
  import { db } from '../firebase';
  let proposals = [];


  onMount(async () => {
    const snapshot = await db.collection('proposals').get();
    proposals = snapshot.docs.map(doc => doc.data());
  });
  
  import { goto } from '$app/navigation';
  
// let proposals = [
//   {id: 1, title: 'Proposal 1', client: 'Client 1', status: 'Pending'},
//   {id: 2, title: 'Proposal 2', client: 'Client 2', status: 'Approved'},
//   {id: 3, title: 'Proposal 3', client: 'Client 1', status: 'Pending'},
//   {id: 4, title: 'Proposal 4', client: 'Client 2', status: 'Approved'},
//   // Add more dummy proposals as needed
// ];


  let filterKey = '';
  let filteredProposals = [...proposals]; // Initialize filteredProposals to be the same as proposals

  //function to handle proposalDetails
 function viewProposal(id) {
    goto(`/proposals/${id}`);
  }

  function filterProposals() {
    filteredProposals = proposals.filter((proposal) =>
      proposal.title.toLowerCase().includes(filterKey.toLowerCase())
    );
    if (filterKey === '') {
      filteredProposals = proposals;
    }
  }

  // Run the filter function initially
  filterProposals();
</script>

<h1>Proposals</h1>

<div class="flex items-center my-4">
  <label for="search" class="sr-only">Search</label>
  <input
    type="text"
    id="search"
    placeholder="Search proposals"
    class="rounded-l-md py-2 px-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
    on:input={() => {
      filterKey = event.target.value;
      filterProposals();
    }}
  />
  <button
    class="py-2 px-4 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
    on:click={() => {
      filterKey = '';
      filterProposals();
    }}
  >
    Clear
  </button>
</div>

<ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each filteredProposals as proposal (proposal.id)}
    <li class="rounded bg-white shadow-lg p-6">
      <h2 class="font-bold text-lg mb-2">{proposal.title}</h2>
      <p class="text-gray-700 text-base mb-2">Client: {proposal.client}</p>
      <p class="text-gray-700 text-base mb-4">Status: {proposal.status}</p>
      <button class="bg-secondary hover:bg-secondary-700 text-white font-bold py-2 px-4 rounded"
              on:click={() => viewProposal(proposal.id)}>View Proposal</button>
    </li>
  {/each}
</ul>
