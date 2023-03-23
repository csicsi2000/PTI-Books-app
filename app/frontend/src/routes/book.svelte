<script lang="ts">
	import { onMount} from 'svelte';

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
        	return data.results.lists;
			//return data.results.lists[0].books;
		} catch (error: any) {
			let errorMessage = error.message;
			console.error(errorMessage);
		}
	}

	let books: Book[] = [];
/*
	onMount(async () => {
		try {
			books= await fetchData();
			
            console.log(books);
		} catch (error) {
			console.error(error);
			throw error;
		}
	});

*/
	
	onMount(async () => {
		try {
			let booklist = await fetchData();
			booklist.forEach((element:any) => {
				//console.log(element);	
				
				element.books.forEach((book:any)=>{
					books.push(book)
				})
			});
            console.log(books);
			books = books;	
		} catch (error) {
			console.error(error);
			throw error;
		}
	});

</script>


    
        {#each books as book}
        <div class="col m-2 d-flex justify-content-center">
            <div class="card book" style="width: 15rem;">
                <img class="card-img-top" style="width: 238px; height: 362px" src={book.book_image} alt={book.title} />
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{book.title}</h5>
                    <p class="card-text">{book.description}</p>
					<small class="mt-auto"><b>{book.author}</b></small>
                </div>
            </div>
        </div>
        {/each}
    

