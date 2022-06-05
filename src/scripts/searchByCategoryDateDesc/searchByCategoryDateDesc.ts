import { FBMarketplaceListingEdge } from '../../domain';
import { recurseKeysToCamel } from '../../utils';
import { headers } from '../config';
import { edgeToListing } from '../utils';

type Categories = 'vehicles';

export const searchByCategoryDateDesc = async (category: Categories) => {
  return await fetch('https://www.facebook.com/api/graphql/', {
    headers,
    body: `av=100009446198128&__user=100009446198128&__a=1&__dyn=7AzHK4HwkEng5K8G6EjBWo2nDwAxu13wIwh8KbgS3q2ibwyzE2qwJyEiwsobo6u3y4o11U1lVEtwMw65xO321Rwwwg8a8465o-cwfG12wOKdwGxu782ly87e2l2Utwwwi831wiEjwZxy3O1mzXxG1Pxi4UaEW2G1jxS6FobrwKxm5oe8cEW4-5pUfEbUy1MBx_y88E3VBwJCwLyES0Io88cA0z8c84qifxe3u&__csr=ga4dhcIh4OhWq8ygRd4hisKSxdntkyd9LXt-myOfkhTvtVu9i-KKHGLGheQtlhACBXgDAQbJ6AgTiBVpQhmFqD-i9VTzoB4AKuJozyaGtLACiADy4eG8CFxqO7GQHGEC8KHhVQp7mmEvxPgCdF4z8gg-8ohDhuu-dxm4lAwyCBCxi36m5onDBG11Q32qip3rGt1ut28C78gBBxeayodu2K2uUK8xqm3O2ifzUuwVyEW0wE9UgwgrwJwVwHws8bUjwFxXxW9wFxqi3648kxq3Hwko8U2Lw9Kdw3jo5202ga3Tw1-ha7k23g054Ocw0hTU0l4wLzCm8xl00CJw0itE0g_xO2O05rm0oG4EO0axg4u04Ko0Fe2ip90kU-0Yo0yu16w&__req=2r&__hs=19144.HYP%3Acomet_pkg.2.1.0.2.&dpr=1&__ccg=EXCELLENT&__rev=1005611367&__s=hid6ht%3A06q7l4%3Adsa03g&__hsi=7104273291317343664-0&__comet_req=1&fb_dtsg=AQHBv5eutsm7p9k%3A28%3A1650246753&jazoest=22085&lsd=7OSOgviqqzgzWjzevOTBOm&__spin_r=1005611367&__spin_b=trunk&__spin_t=1654092523&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceCategoryContentContainerQuery&variables=%7B%22buyLocation%22%3A%7B%22latitude%22%3A33.5164%2C%22longitude%22%3A-86.8135%7D%2C%22categoryIDArray%22%3A%5B807311116002614%5D%2C%22contextual_data%22%3A%5B%5D%2C%22count%22%3A24%2C%22cursor%22%3Anull%2C%22filterSortingParams%22%3A%7B%22sort_by_filter%22%3A%22CREATION_TIME%22%2C%22sort_order%22%3A%22DESCEND%22%7D%2C%22marketplaceBrowseContext%22%3A%22CATEGORY_FEED%22%2C%22numericVerticalFields%22%3A%5B%5D%2C%22numericVerticalFieldsBetween%22%3A%5B%5D%2C%22priceRange%22%3A%5B0%2C214748364700%5D%2C%22radius%22%3A45000%2C%22scale%22%3A1%2C%22stringVerticalFields%22%3A%5B%5D%2C%22topicPageParams%22%3A%7B%22location_id%22%3A%22category%22%2C%22url%22%3A%22${category}%22%7D%7D&server_timestamps=true&doc_id=5060898887330877`,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
  // .then((res) =>
  //   (
  //     recurseKeysToCamel(res) as {
  //       data: { viewer: { marketplaceFeedStories: { edges: FBMarketplaceListingEdge[] } } };
  //     }
  //   ).data.viewer.marketplaceFeedStories.edges.map(edgeToListing)
  // );
};
