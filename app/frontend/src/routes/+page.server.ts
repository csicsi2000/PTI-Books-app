import type { PageServerLoad } from './$types';
import { NewYorkTimesBook } from '$lib/api/newYorkTimesBook';

export const load = (async () => {
    console.log("Call api");
    let bookapi = new NewYorkTimesBook();
    let content = await bookapi.getOverview();
    return content;
}) satisfies PageServerLoad;