<script lang="ts">
    import type { PageData } from './$types';
    // import of Nav_bar
    import Nav from '../nav.svelte';

    export let data :PageData;

    $:{
        console.log(data);
    }

</script>
<Nav />
<pre>{JSON.stringify( data,null, 2)}</pre>