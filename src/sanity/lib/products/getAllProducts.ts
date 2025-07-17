import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProducts = async () => {
  const All_PRODUCTS_QUERY = defineQuery(`
    *[
        _type == "product"
    ] | order(name asc)
    `);

  try {
    // Use sanityFetch to send the query
    const products = await sanityFetch({
      query: All_PRODUCTS_QUERY,
    });
    // return the list of products, or an empty array if none are found
    return products.data || [];
  } catch (err) {
    console.error("Error fetching all products", err);
    return [];
  }
};
