<script lang="ts">
	import { getBook } from '$lib/api/backend/bookApi';
	import { authResp, bookFromDatabase, favoriteBooks, selectedBook } from '$lib/utils/stores';
	import type { Book } from 'shared-component/dist/entity/Book';
	import StarSvg from '$lib/img/star.svg';
	import StarSvgFull from '$lib/img/starFull.svg';
	import { deleteBookFromList, insertBookIntoList } from '$lib/api/backend/booklistApi';
	import type { AuthResponse } from '$lib/api/backend/authApi';
	import { updateFavoriteBooks } from '$lib/utils/functions';
	import autoAnimate from '@formkit/auto-animate';

	export let book: Book;

	let respData: AuthResponse;

	authResp.subscribe((data) => {
		respData = data as AuthResponse;
	});

	let favoriteList: Book[];
	favoriteBooks.subscribe((data) => {
		favoriteList = data?.books ?? [];
	});

	function TriggerFavorite() {
		try {
			if (isfavorite) {
				deleteBookFromList(respData.user.id, bookInFavorite.id);
			} else {
				insertBookIntoList(respData.user.id, book);
			}
			IsFavorite(book);
		} catch {}
		updateFavoriteBooks();
	}

	let isfavorite: Boolean;
	let bookInFavorite: Book;

	IsFavorite(book);
	function IsFavorite(book: Book) {
		bookInFavorite = favoriteList.find((x) => x.title == book.title) as Book;
		if (bookInFavorite == undefined || bookInFavorite == null) {
			isfavorite = false;
			return;
		}
		isfavorite = true;
	}
</script>

<div class="col mt-3 mb-3 d-flex justify-content-center">
	<div class="card book" style="width: 16rem;">
			<a href="/book/{book.primary_isbn13}" class="text-reset text-decoration-none">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				class="card-img-top"
				style="width: 16rem; height: 362px"
				src={book.book_image}
				alt={book.title}
			/>
			</a>
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{book.title}</h5>
				{#if book.description.length > 80}
					<p class="card-text">{book.description.slice(0, 80)}...</p>
				{:else}
					<p class="card-text">{book.description}</p>
				{/if}
				<small class="d-flex align-items-center justify-content-between mt-auto">
					<span class="lm-auto"><b>{book.author}</b> </span>
					{#if respData}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div on:click={TriggerFavorite} use:autoAnimate>
							<!-- svelte-ignore missing-declaration -->
							{#if isfavorite}
								<img src={StarSvgFull} width="20px" alt="star" />
							{:else}
								<img src={StarSvg} width="20px" alt="star" />
							{/if}
						</div>
					{/if}
				</small>
			</div>
		</div>
</div>
