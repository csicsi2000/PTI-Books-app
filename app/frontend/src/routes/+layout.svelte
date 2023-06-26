<script lang="ts">
	import { setSession, isLoggedIn } from '$lib/api/backend/authApi';
	import NavBar from '$lib/components/nav.svelte';
	import { onMount } from 'svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';

	onMount(async () => {
		setSession();
	});
</script>

<div class="layout">
	<NavBar />
	<slot />
</div>
