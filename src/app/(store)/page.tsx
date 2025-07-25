import ProductsView from "@/components/ProductsView";
import BlackFridaySaleBanner from "@/components/sale-banners/BlackFridaySaleBanner";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 6),
    ">>> Re-rendered the home page cache with",
    products.length,
    "products and",
    categories.length,
    "categories",
  );

  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <BlackFridaySaleBanner />
      {/* render all the products */}
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
