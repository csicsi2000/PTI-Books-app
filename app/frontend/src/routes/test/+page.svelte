<script lang="ts">
	import { NewYorkTimesBook } from '../../lib/api/newYorkTimesBook';
    // import of Nav_bar
    import Nav from '../nav.svelte';
	import type { FullOverview } from '../../types/new-york-times-book/fullOverview';
    import { browser } from '$app/environment';
	import { onMount } from 'svelte';

    let contentOverview :FullOverview;


    onMount(() => {
        if(browser){
            console.log("This code only runs on the client");
            setData();
        }
    })

    async function setData() {
        console.log("Call api");
        let bookapi = new NewYorkTimesBook();

        contentOverview = await bookapi.getOverview();
        console.log(contentOverview);
    }
</script>
<Nav />
<p>{contentOverview}</p>