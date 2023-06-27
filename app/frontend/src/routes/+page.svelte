<script lang="ts">
	// import the Bootstrap style files
	import 'bootstrap/dist/css/bootstrap.min.css';
  	import '@fortawesome/fontawesome-free/css/all.css';
	import autoAnimate from '@formkit/auto-animate';
	// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
	//import booklist component
	import Booklist from '$lib/components/booklist.svelte';
	import Motto from '$lib/components/imagewithmotto.svelte';

	import type { PageData } from './$types';
	import type { Book } from 'shared-component/dist/entity/Book';
	import { allBooks } from '$lib/utils/stores';
	
	
	export let data: PageData;

	function flatenPageData(data: PageData): Book[] {
		try {
			/* 
            Use the 'flatMap' function to create a single array of all the books 
            in all the lists
            */
			const books = data.results.lists.flatMap((list: { books: any; }) => list.books) as Book[];
            console.log((books[0] as Book).book_image);
			return books;

		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	let fullBookList = flatenPageData(data);
    allBooks.set(fullBookList);

</script>

<!-- main container-->
<Motto />
<div class="container mt-3 bg-light">
	<div class="row" use:autoAnimate>
		<Booklist />
	</div>
</div>
