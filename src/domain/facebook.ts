export type FBMarketplaceListingEdge = {
  node: {
    listing: {
      id: string;
      location: { reverseGeocode: { city: string; state: string } };
      listingPrice: { formattedAmount: string };
      customSubTitlesWithRenderingFlags: { subtitle: string }[];
      marketplaceListingTitle: string;
      isPending: boolean;
      isSold: boolean;
      deliveryTypes: 'IN_PERSON'[];
    };
  };
};

export type FBMarketplaceListing = {
  id: string;
  location: string;
  price: string;
  title: string;
  isSold: boolean;
  isPending: boolean;
  isLocal: boolean;
  miles?: string;
};
