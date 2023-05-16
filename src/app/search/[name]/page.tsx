import { ProductsProps } from "@/types/Products";
import { NavigationCategory } from "@/components/NavigationCategory";
import { PriceFilter } from "@/components/PriceFilter";

const baseURL = "http://localhost:8080";

async function generateStaticSearch({
  params: { name },
}: {
  params: { name: string };
}) {
  const products: ProductsProps[] = await fetch(`${baseURL}/allproducts`, {
    next: { revalidate: 60 * 60 * 24 },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));

  const productsFiltered = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(name.replaceAll("%20", " ").toLowerCase())
  );

  return { productsFiltered };
}

export default async function Search({ params }: { params: { name: string } }) {
  const { productsFiltered } = await generateStaticSearch({ params });

  return (
    <main className="w-full h-full max-w-[1300px] mx-auto my-0 text-white px-2 sm:px-4 py-5 animate-changeOpacity">
      <NavigationCategory params={params} />
      <section className="w-full h-full bg-gray-50 text-black rounded-2xl py-4 px-2.5 sm:px-5">
        {productsFiltered.length > 0 ? (
          <PriceFilter
            params={params}
            products={productsFiltered}
            user_search
          />
        ) : (
          <h2 className="text-2xl font-medium h-[25vh]">
            Nenhum resultado com "{params.name.replaceAll("%20", " ")}"
            encontrado
          </h2>
        )}
      </section>
    </main>
  );
}
