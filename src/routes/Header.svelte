<script>
	import { page } from '$app/stores';
 // import { page as $page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';

    let isDropdownOpen = false // default state (dropdown close)

  const handleDropdownClick = () => {
    isDropdownOpen = !isDropdownOpen // togle state on click
  }

  let isDropdown2Open = false // default state (dropdown close)

  const handleDropdown2Click = () => {
    isDropdown2Open = !isDropdown2Open // togle state on click
  }

  const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
    // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
    isDropdownOpen = false
  }

    const handleDropdown2FocusLoss = ({ relatedTarget, currentTarget }) => {
    // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
    isDropdown2Open = false
  }
</script>

<header>
<nav>
<div class="navbar bg-base-100 bg-primary text-white">
  <div class="navbar-start">
    <div class="dropdown" on:focusout={handleDropdownFocusLoss}>
      <button class="btn btn-ghost btn-circle " on:click={handleDropdownClick}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </button>
        {#if isDropdownOpen}
    <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-base-200 text-white" style="display:{isDropdownOpen ? 'block' : 'none'}; opacity:{isDropdownOpen ? '1' : '0'}; visibility:{isDropdownOpen ? 'visible' : 'hidden'}; ">
      	<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
      <li aria-current={$page.url.pathname === '/auth' ? 'page' : undefined}>
				<a href="/auth">Login</a>
			</li>
      <li aria-current={$page.url.pathname === '/proposals' ? 'page' : undefined}>
				<a href="/proposals">Proposals</a>
			</li>
      <li aria-current={$page.url.pathname === '/template' ? 'page' : undefined}>
				<a href="/template">Template</a>
			</li>
      <li aria-current={$page.url.pathname === '/createProposal' ? 'page' : undefined}>
				<a href="/createProposal">Create</a>
			</li>
         <li aria-current={$page.url.pathname === '/createClient' ? 'page' : undefined}>
				<a href="/createClient">Create Client</a>
			</li>
    </ul>
  {/if}
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl">ProposalAI</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="dropdown dropdown-end" on:focusout={handleDropdown2FocusLoss}>
      <button class="btn btn-ghost btn-circle avatar" on:click={handleDropdown2Click}>
        <div class="w-10 rounded-full">
          <img src="https://dummyimage.com/100x100/000/fff" />
        </div>
      </button>
        {#if isDropdown2Open}
      <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" style="display:{isDropdown2Open ? 'block' : 'none'}; opacity:{isDropdown2Open ? '1' : '0'}; visibility:{isDropdown2Open ? 'visible' : 'hidden'};">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
        {/if}   
    </div>
    </button>
  </div>
</div>
  </nav>
</header>

<style>
	/* header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>
