<script context="module">
  // This function would normally fetch the proposal data from PocketBase
  // We'll use a dummy proposal for now
  export async function load({ page, fetch }) {
    const { id } = page.params;

    // Fetch the proposal from PocketBase here

    const proposal = {
      id: id, 
      title: 'Proposal ' + id, 
      client: 'Client ' + id, 
      status: 'Pending', 
      content: 'This is the proposal content.'
    };

    return { props: { proposal } };
  }
</script>

<script>
  export let proposal;

  function editProposal(id) {
    // Navigate to the proposal edit page
  }

  function updateStatus(newStatus) {
    // Update the proposal's status
    proposal.status = newStatus;
  }
</script>

<div>
  <h1>{proposal.title}</h1>
  <p>Client: {proposal.client}</p>
  <p>Status: {proposal.status}</p>
  <div>{proposal.content}</div>

  <div class="flex mt-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            on:click={() => editProposal(proposal.id)}>Edit Proposal</button>

    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
            on:click={() => updateStatus('Approved')}>Approve</button>

    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            on:click={() => updateStatus('Rejected')}>Reject</button>
  </div>
</div>
