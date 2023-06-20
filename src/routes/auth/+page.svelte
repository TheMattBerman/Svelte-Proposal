<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login app" />
</svelte:head>

<section>
  <h1>Login Here</h1>
  <div class="w-3/4 mx-auto">
  <form on:submit|preventDefault={handleSubmit} class="form-center form-control">
    <br />
  <label class="input-group w-full">
    <span class="text-white w-1/3">Email</span>
    <input type="text" placeholder="info@site.com" class="input input-bordered w-2/3" bind:value={email}/>
  </label>
    <br />
<label class="input-group w-full">
    <span class="text-white w-1/3">Password</span>
    <input type="text" placeholder="Password" class="input input-bordered w-2/3" bind:value={password}/>
  </label>
    
    <br />
    <button class="btn btn-secondary w-1/3" type="submit">Submit</button>
  </form>
  </div>
  <div class="text-center">
  </div>
    
</section>


<script>
  let email = '';
  let password = '';
  function handleSubmit() {
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Login successful!');
  }
</script>

<!-- <script lang="ts">
  import { currentUser, pb } from './pocketbase';

  let username: string;
  let password: string;

  async function login() {
    await pb.collection('users').authWithPassword(username, password);
  }

  async function signUp() {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
        name: 'hi mom!',
      };
      const createdUser = await pb.collection('users').create(data);
      await login();
    } catch (err) {
      console.error(err)
    }
  }

  function signOut() {
    pb.authStore.clear();
  }

</script>

{#if $currentUser}
  <p>
    Signed in as {$currentUser.username} 
    <button on:click={signOut}>Sign Out</button>
  </p>
{:else}
  <form on:submit|preventDefault>
    <input
      placeholder="Username"
      type="text"
      bind:value={username}
    />

    <input 
      placeholder="Password" 
      type="password" 
      bind:value={password} 
    />
    <button on:click={signUp}>Sign Up</button>
    <button on:click={login}>Login</button>
  </form>
{/if} -->