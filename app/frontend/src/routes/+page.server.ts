import type { PageServerLoad } from './$types';
import { NewYorkTimesBook } from '$lib/api/newYorkTimesBook';
import type { FullOverview } from '$lib/types/new-york-times-book/fullOverview';

export const load = (async () => {
    console.log("Call api");
    let bookapi = new NewYorkTimesBook();
    let content = await bookapi.getOverview();
    console.log(content);
    return content;
}) satisfies PageServerLoad;