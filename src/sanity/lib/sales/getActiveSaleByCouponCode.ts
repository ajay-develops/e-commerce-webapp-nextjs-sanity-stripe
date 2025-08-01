import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCodes";
import { sanityFetch } from "../live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_CODE_QUERY = defineQuery(`
        *[
            _type == "sale"
            && isActive == true
            && couponCode == $couponCode
        ] | order(validFrom desc)[0]
        `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_CODE_QUERY,
      params: {
        couponCode,
      },
    });

    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error("Error fetching active sale by coupon code:", error);
    return null;
  }
};
