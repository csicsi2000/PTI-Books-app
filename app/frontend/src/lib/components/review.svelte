<script lang="ts">
	import Rating from './rating.svelte';
	import { getBook } from '$lib/api/backend/bookApi';
	import type { Review } from 'shared-component/dist/entity/Review';
	import { bookFromDatabase } from '$lib/utils/stores';
	import autoAnimate from '@formkit/auto-animate';

	export let bookReviews: Review[] = [];
</script>

<ul use:autoAnimate class="list-unstyled">
	{#each bookReviews as breview (breview)}
		<li>
			<div class="card mt-4">
				<div class="card-body">
					{@html breview.comment}
					<h6 class="card-subtitle mb-2 text-muted">
						{breview.user.email}<span class="ms-4">{breview.date}</span>
					</h6>
					<Rating rating={breview.rating} />
				</div>
			</div>
		</li>
	{/each}
</ul>
