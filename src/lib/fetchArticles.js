import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const WixClient = createClient({ 
  modules: { items },
  auth: OAuthStrategy({
     clientId: '7bb0c85b-959e-40e2-b478-481d4b39d711'
    }),
});

export default async function fetchArticles({
    count = null,
    featured = false,
    tagged = false 
} = {}) {
    let query = WixClient.items.queryDataItems({
        dataCollectionId: "Articles",
    });

    if (count !== null) {
        query = query.limit(count);
    }
    if (featured) {
        query = query.eq('featured', true);
    }
    if (tagged) {
        query = query.eq('tagged', true);
    }
     
    const articles = await query.find();
    return articles.items;
}

