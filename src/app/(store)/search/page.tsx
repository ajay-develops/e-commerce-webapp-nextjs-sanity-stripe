import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";
import { redirect, RedirectType } from "next/navigation";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const { query } = await searchParams;

  // Check if query exists and has length
  if (!query || !query.length) {
    redirect("/", RedirectType.push);
  }

  const matchedProducts = await searchProductsByName(query);

  if (!Boolean(matchedProducts?.length)) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            No Products found for: {query}
          </h1>
          <p className="text-gray-600 text-center">
            Try searching with different keywords
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search results for "{query}"
        </h1>
        {matchedProducts ? (
          <ProductGrid products={matchedProducts} />
        ) : (
          <div>No Products Matched</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
