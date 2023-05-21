<script lang="ts">
	import { isLoggedIn } from '$lib/api/backend/authApi';
    // import the Bootstrap style files
    // import 'bootstrap/dist/css/bootstrap.min.css';
	// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
	import NavBar from '$lib/components/nav.svelte';
</script>

<div class="layout">
	
	<NavBar />	
	<slot />
</div>