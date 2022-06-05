import { recurseKeysToCamel } from '../../utils';

export const getListing = async (fbId: string) => {
  return await fetch('https://www.facebook.com/api/graphql/', {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/x-www-form-urlencoded',
      'sec-ch-prefers-color-scheme': 'dark',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'viewport-width': '731',
      'x-fb-friendly-name': 'MarketplacePDPContainerQuery',
      'x-fb-lsd': 'XmNfdgpDCI8RB84nqIGURN',
      cookie:
        'sb=BflZYkTma1lWBSsMThSMJh_y; datr=CPlZYoCv3cEbfsUTDNLQ7LO3; c_user=100009446198128; dpr=2; wd=1512x865; xs=28%3AdVt9B4ddsgMt4g%3A2%3A1650246753%3A-1%3A2178%3A%3AAcXXyZZ0M8ZEqyW4DnRQJErUhtSNZEeufCgfxNcwOdY; fr=09q1yzH71K32NLEPs.AWV8u6V0Wl0jk7Wr_1n1xAjLWu4.BilYym.Aw.AAA.0.0.Biln0p.AWX3uJwVdl8; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1654029617009%2C%22v%22%3A1%7D',
      Referer: 'https://www.facebook.com/marketplace/?ref=app_tab',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: `av=100009446198128&__user=100009446198128&__a=1&__dyn=7AzHK4HwkEng5K8G6EjBWo2nDwAxu13wsongS3q2ibwyzE2qwJyEiwsobo6u3y4o0B-q7oc81xoswMwto88422y11xmfz83WwgEcHzoaEnxO0Boy1PwBgK7o884y0Mo4G4UfoowYwlE-UqwsUkxe2GewGwkUtxGm2SUbElxm3y3aexfxmu3W2i4U72m7-8wywfCm2Sq2-azo2NwwwOg2cwMwhF8-4UdU&__csr=g84IZhtmIh2y_dTftEYIAJLljqTitttl9lsIDOivjFR8Hi8hrFqWTqyuqAy4AyuuGF2CrcmAGAV8FarJ15aJG8ABAyaGLChpUx4m8zVEB2Km8BLAZ6yFpWCBXxaaDhqgJpFoSmEmGrDhK5pU_zEO7k32udFaWAACxJ16u2S11DKfBg8rCy8aC443uaxuqq8zHUoyEWFojK64cAU98c8gwGyocEN0sFoS12xO13wEwrk4oC4o888ES48563-3um2mGxO1OwGximubxG0wE5C2K0yokwKwIwNw2BU0gaBU0dTFm5sM2Dw4Gw1aF00vr80lqUswyGcVpE0c2U042-04bS0VE1e-04rEsg1_U1B40f9w3wEOS0J80B65U2Ew&__req=1f&__hs=19143.HYP%3Acomet_pkg.2.1.0.2.&dpr=2&__ccg=EXCELLENT&__rev=1005604334&__s=yua60g%3A5fv6av%3Af1yxn2&__hsi=7104003077387943074-0&__comet_req=1&fb_dtsg=AQGZQG2qeHRL5hQ%3A28%3A1650246753&jazoest=21932&lsd=XmNfdgpDCI8RB84nqIGURN&__spin_r=1005604334&__spin_b=trunk&__spin_t=1654029609&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=MarketplacePDPContainerQuery&variables=%7B%22UFI2CommentsProvider_commentsKey%22%3A%22MarketplacePDP%22%2C%22canViewCustomizedProfile%22%3Atrue%2C%22disableDoublePDPFieldFetchFix%22%3Afalse%2C%22feedbackSource%22%3A56%2C%22feedLocation%22%3A%22MARKETPLACE_MEGAMALL%22%2C%22location_latitude%22%3A33.5164%2C%22location_longitude%22%3A-86.8135%2C%22location_radius%22%3A45%2C%22location_vanity_page_id%22%3A%22109434842408576%22%2C%22pdpContext_isHoisted%22%3Afalse%2C%22pdpContext_trackingData%22%3A%22%7B%5C%22qid%5C%22%3A%5C%22-6239786825915981797%5C%22%2C%5C%22mf_story_key%5C%22%3A%5C%22438736449187187285%5C%22%2C%5C%22commerce_rank_obj%5C%22%3A%5C%22%7B%5C%5C%5C%22target_id%5C%5C%5C%22%3A438736449187187285%2C%5C%5C%5C%22target_type%5C%5C%5C%22%3A6%2C%5C%5C%5C%22primary_position%5C%5C%5C%22%3A0%2C%5C%5C%5C%22ranking_signature%5C%5C%5C%22%3A1433232931727343616%2C%5C%5C%5C%22commerce_channel%5C%5C%5C%22%3A501%2C%5C%5C%5C%22value%5C%5C%5C%22%3A0%2C%5C%5C%5C%22upsell_type%5C%5C%5C%22%3A21%2C%5C%5C%5C%22candidate_retrieval_source_map%5C%5C%5C%22%3Anull%2C%5C%5C%5C%22grouping_info%5C%5C%5C%22%3Anull%7D%5C%22%2C%5C%22ftmd_400706%5C%22%3A%5C%22111112l%5C%22%7D%22%2C%22referralCode%22%3A%22marketplace_top_picks%22%2C%22relay_flight_marketplace_enabled%22%3Afalse%2C%22scale%22%3A2%2C%22targetId%22%3A%22${fbId}%22%2C%22useDefaultActor%22%3Afalse%2C%22__relay_internal__pv__GKMarketplacePdpUfiPerfH12022relayprovider%22%3Afalse%7D&server_timestamps=true&doc_id=4925404600901509`,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((res) => recurseKeysToCamel(res));
};
