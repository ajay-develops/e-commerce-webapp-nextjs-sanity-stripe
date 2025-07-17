import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[
            _type == "product"
            && name match $searchParam
        ] | order(name asc)
        `);

  try {
    const matchedProducts = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam,
      },
    });

    return matchedProducts ? matchedProducts.data : null;
  } catch (err) {
    console.log("Error fetching products by name", err);
    return null;
  }
};
