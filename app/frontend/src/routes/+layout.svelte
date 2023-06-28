<script lang="ts">
	import { setSession, isLoggedIn } from '$lib/api/backend/authApi';
	import NavBar from '$lib/components/nav.svelte';
	import { onMount } from 'svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { browser } from '$app/environment';

	onMount(async () => {
		if (browser) {
			setSession();
		}
	});
</script>

<div class="layout">
	<NavBar />
	<div  class=" min-vh-100">
	<slot />
</div>
	<div class="container">
		<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
		  <p class="col-md-4 mb-0 text-body-secondary">© AFP 2 beadandó</p>
	  
		  <a href="https://getbootstrap.com/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
			<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
		  </a>
		</footer>
	  </div>
</div>

