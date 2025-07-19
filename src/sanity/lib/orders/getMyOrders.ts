import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { order } from "@/sanity/schemaTypes/order";

export async function getMyOrders(userId: string) {
  if (!userId) {
    throw new Error("User ID is required");
  }

  // Define the query to get orders based on user ID, sorted by orderDate descending
  const MY_ORDERS_QUERY = defineQuery(`
    *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {
        ...,
        products[]{
            ...,
            product->
        }
    }
    `);

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    return orders.data || null;
  } catch (err) {
    console.error("Error fetching orders:", err);
    throw new Error("Error fetching orders");
    return null;
  }
}
