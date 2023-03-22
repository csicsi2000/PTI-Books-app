<script lang="ts">
	import { onMount } from 'svelte';

	interface Book {
		age_group: string;
		amazon_product_url: string;
		article_chapter_link: string;
		author: string;
		book_image: string;
		book_image_width: number;
		book_image_height: number;
		book_review_link: string;
		book_uri: string;
		contributor: string;
		contributor_note: string;
		created_date: string;
		description: string;
		first_chapter_link: string;
		price: string;
		primary_isbn10: string;
		primary_isbn13: string;
		publisher: string;
		rank: number;
		rank_last_week: number;
		sunday_review_link: string;
		title: string;
		updated_date: string;
		weeks_on_list: number;
		buy_links: {
			name: string;
			url: string;
		}[];
	}

	async function fetchData() {
		try {
			const response = await fetch(
				'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=Yd0pdCNxZTMna4eN9NbvAjHg6tlhoDZd'
			);
			if (!response.ok) {
				throw new Error('Server is offline');
			}

			const data = await response.json();
            //	console.log(data.results.lists[0].books[0]);
			return data.results.lists[0].books;
		} catch (error: any) {
			let errorMessage = error.message;
			console.error(errorMessage);
		}
	}

	let books: Book[] = [];

	onMount(async () => {
		try {
			books = await fetchData();
            console.log(books)
		} catch (error) {
			console.error(error);
			throw error;
		}
	});
</script>


    
        {#each books as book}
        <div class="col m-2">
            <div class="card book" style="width: 18rem;">
                <img class="card-img-top" src={book.book_image} alt={book.title} />
                <div class="card-body">
                    <h5 class="card-title">{book.title}</h5>
                    <p class="card-text">{book.description}</p>
                </div>
            </div>
        </div>
        {/each}
    

