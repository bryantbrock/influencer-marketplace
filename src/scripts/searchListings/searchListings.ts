import { recurseKeysToCamel } from '../../utils';
import { FBMarketplaceListingEdge } from '../../domain';
import { headers } from '../config';
import { edgeToListing } from '../utils';

export const searchListings = async (term: string) => {
  return await fetch('https://www.facebook.com/api/graphql/', {
    headers,
    body: `av=100009446198128&__user=100009446198128&__a=1&__dyn=7AzHK4HwkEng5K8G6EjBWo2nDwAxu13wIwh8KbgS3q2ibwyzE2qwJyEiwsobo6u3y4o11U1lVEtwMw65xO321Rwwwg8a8465o-cwfG12wOKdwGxu782ly87e2l2Utwwwi831wiEjwPyoowYwlE-UqwsUkxe2GewGwkUtxGm2SUbElxm3y3aexfxmu3W2i4U72m7-8wywfCm2Sq2-azo2NwwwOg2cwMwhF8-4UdU&__csr=gvT5n5l4YqOYLcD6P8AlR4Wtt9hXWnEI_N28kKlqZF4iJqvRFqCvhXZlO2Qiye9QaVuChpdKCngkBQq8Hm9Gt2ECWjyajUKrVV8OUBlURaGWz98WVZBAHzEWumu59Qle9xjQXyAu7ry62d1vxCUOA3BGp7z8jwhEsybUjxinwywDK78W4pqz8hCxedAylx2Keg98XxK7GwRU5q787m4oC64Uqxe6U-dwMAx25UG3m0wo4W6qwwCwMwEwwxa9z9oeU461DyEiAwXCwPwdm1PwMxG7E0Pa0qe0tueU2kS02PEg1lo084401ZBw1lHxO2nyAq1ww0KOw0gfo0Cy0raS08mz80hKxN02081AQ0fAw3sQC0Jo0CC0G8&__req=2d&__hs=19143.HYP%3Acomet_pkg.2.1.0.2.&dpr=2&__ccg=EXCELLENT&__rev=1005602102&__s=oqyrc4%3Ane0epp%3Allxsb5&__hsi=7103724438821547805-0&__comet_req=1&fb_dtsg=AQEzifSA0yklQ_8%3A28%3A1650246753&jazoest=22049&lsd=CyGJShbgftkRdFWJ5ScquT&__spin_r=1005602102&__spin_b=trunk&__spin_t=1653964733&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentContainerQuery&variables=%7B%22buyLocation%22%3A%7B%22latitude%22%3A33.13653%2C%22longitude%22%3A-86.60334%7D%2C%22contextual_data%22%3Anull%2C%22count%22%3A24%2C%22cursor%22%3Anull%2C%22flashSaleEventID%22%3A%22%22%2C%22hasFlashSaleEventID%22%3Afalse%2C%22marketplaceSearchMetadataCardEnabled%22%3Afalse%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22${term}%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A33.13653%2C%22filter_location_longitude%22%3A-86.60334%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A45%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22savedSearchID%22%3Anull%2C%22savedSearchQuery%22%3A%22${term}%22%2C%22scale%22%3A2%2C%22shouldIncludePopularSearches%22%3Afalse%2C%22topicPageParams%22%3A%7B%22location_id%22%3A%22108638549165359%22%2C%22url%22%3Anull%7D%2C%22vehicleParams%22%3A%22%22%7D&server_timestamps=true&doc_id=5120680201346946`,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((res) =>
      (
        recurseKeysToCamel(res) as {
          data: { marketplaceSearch: { feedUnits: { edges: FBMarketplaceListingEdge[] } } };
        }
      ).data.marketplaceSearch.feedUnits.edges.map(edgeToListing)
    );
};
