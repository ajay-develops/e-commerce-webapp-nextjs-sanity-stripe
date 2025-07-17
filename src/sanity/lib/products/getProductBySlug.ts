import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_ID_QUERY = defineQuery(`
        *[
            _type == "product"
            && slug.current match $slug
        ] | order(name asc)[0]
        `);

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: {
        slug,
      },
    });

    return product ? product.data : null;
  } catch (err) {
    console.log("Error fetching products by id (slug)", err);
    return null;
  }
};
