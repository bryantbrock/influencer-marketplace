import { FBMarketplaceListingEdge, FBMarketplaceListing } from '../../domain';

export const edgeToListing = (edge: FBMarketplaceListingEdge): FBMarketplaceListing => {
  const { city, state } = edge.node.listing?.location?.reverseGeocode || {};
  const { formattedAmount } = edge.node.listing?.listingPrice || {};
  const miles = edge.node.listing.customSubTitlesWithRenderingFlags[0].subtitle;

  return {
    location: `${city}, ${state}`,
    price: formattedAmount,
    id: edge.node.listing.id,
    title: edge.node.listing.marketplaceListingTitle,
    isSold: edge.node.listing.isSold,
    isLocal: edge.node.listing.deliveryTypes.includes('IN_PERSON'),
    isPending: edge.node.listing.isPending,
    ...(miles && miles.includes('miles') && { miles }),
  };
};
