<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login app" />
</svelte:head>

<section>
  <h1>Login Here</h1>
  <form on:submit|preventDefault={handleSubmit} class="form-center form-control">
    <label>
      Email: <input placeholder="awesome@becool.com" class="input input-bordered input-primary w-full max-w-xs" type="email" bind:value={email} />
    </label>
    <br />
    <label>
      Password: <input placeholder="password" class="input input-bordered input-primary w-full max-w-xs" type="password" bind:value={password} />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
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