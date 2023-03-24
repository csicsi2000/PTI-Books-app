<script lang="ts">
	// Import the onMount function from the Svelte framework
	import { onMount } from 'svelte';

	// Define the interface for a Book object
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

	// Define an asynchronous function to fetch data from an external API
	async function fetchData() {
		try {
			// Make an HTTP request to the external API and wait for the response
			const response = await fetch(
				'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=Yd0pdCNxZTMna4eN9NbvAjHg6tlhoDZd'
			);

			// If the response status is not between 200 and 299, throw an error
			if (!response.ok) {
				throw new Error('Server is offline');
			}

			// Convert the response to a JSON object and return the "lists" property of the "results" object
			const data = await response.json();
			return data.results.lists;
		} catch (error: any) {
			// Log any errors to the console and return undefined
			let errorMessage = error.message;
			console.error(errorMessage);
		}
	}

	// Initialize an empty array of Book objects
	let books: Book[] = [];

	// Call the fetchData function when the component is mounted to the DOM
	onMount(async () => {
		try {
			// Retrieve the list of books from the API and push them into the "books" array
			const booklist = await fetchData();
			booklist.forEach((element: any) => {
				element.books.forEach((book: any) => {
					books.push(book);
				});
			});

			// re-assign the "books" variable to trigger a re-render
			books = books;
		} catch (error) {
			// Log any errors to the console and re-throw the error to prevent further execution
			console.error(error);
			throw error;
		}
	});
</script>

{#each books as book}
	<!-- Render each book as a card using Bootstrap -->
	<div class="col mt-3 mb-3 d-flex justify-content-center">
		<div class="card book" style="width: 16rem;">
			<img
				class="card-img-top"
				style="width: 16rem; height: 362px"
				src={book.book_image}
				alt={book.title}
			/>
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{book.title}</h5>
				<p class="card-text">{book.description}</p>
				<small class="d-flex align-items-center justify-content-between mt-auto">
					<span class="lm-auto"><b>{book.author}</b> </span>
					<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 576 512"
						style="width: 20px; height: 20px;"
						><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
						/>
					</svg>
				</div>
				</small>
			</div>
		</div>
	</div>
{/each}
