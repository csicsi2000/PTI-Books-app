<script lang="ts">
    // import the Bootstrap style files
    import 'bootstrap/dist/css/bootstrap.min.css';
	import NavBar from '$lib/components/nav.svelte';
</script>

<div class="layout">
	<NavBar/>

	<slot />
</div>