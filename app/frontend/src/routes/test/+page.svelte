<script lang="ts">
    import type { PageData } from './$types';
    import { authResp, booklist_name } from '$lib/utils/stores';	
	import { createBookList } from '$lib/api/backend/booklistApi';
	import { get } from 'svelte/store';

    export let data :PageData;

    function createList(){
        let res = get(authResp);
        createBookList(res.user.id, booklist_name);
    };
</script>
    <button on:click={createList}>test create list</button>
<pre>{JSON.stringify( data,null, 2)}</pre>