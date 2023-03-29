<script lang="ts">
	// import the Bootstrap style files
	import 'bootstrap/dist/css/bootstrap.min.css';
	//import booklist component
	import Booklist from '$lib/components/booklist.svelte';
	import type { Book, List } from '$lib/types/new-york-times-book/fullOverview';

	import type { PageData } from './$types';
	export let data: PageData;

	function flatenPageData(data: PageData): Book[] {
		try {
			/* 
            Use the 'flatMap' function to create a single array of all the books 
            in all the lists
            */
			const books = data.results.lists.flatMap((list) => list.books) as Book[];
            console.log((books[0] as Book).book_image);
			return books;

		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	let fullBookList = flatenPageData(data);
    

</script>

<!-- main container-->
<div class="container mt-3 bg-light">
	<div class="row">
		<Booklist books={fullBookList} />
	</div>
</div>
