import ProductsView from "@/components/ProductsView";
import BlackFridaySaleBanner from "@/components/sale-banners/BlackFridaySaleBanner";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

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
