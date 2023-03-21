import type { FullOverview } from "../../types/new-york-times-book/fullOverview";
import { CacheApi } from "../server/cacheApi";

export class NewYorkTimesBook{
    async getOverview(): Promise<FullOverview> {
        const apiCall = new CacheApi();
        const response = await apiCall.getData("https://api.nytimes.com/svc/books/v3/lists/overview.json");
        return response as FullOverview;
    }
}