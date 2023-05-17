import { ProductsProps } from "@/types/Products";
import { PriceFilter } from "@/components/PriceFilter";
import { NavigationCategory } from "@/components/NavigationCategory";

async function generateStaticParams({
  params: { name },
}: {
  params: { name: string };
}) {
  const products: ProductsProps[] = await fetch(
    `${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/allproducts?category=${name}`,
    {
      next: { revalidate: 60 * 60 * 24 },
    }
  ).then((res) => res.json());

  return { products };
}

export default async function Collections({
  params,
}: {
  params: { name: string };
}) {
  const { products } = await generateStaticParams({ params });

  return (
    <main className="w-full h-full max-w-[1300px] mx-auto my-0 text-white px-2 sm:px-4 py-5 animate-changeOpDire">
      <NavigationCategory params={params} />
      <section className="w-full h-full bg-gray-50 text-black rounded-2xl py-4 px-2.5 sm:px-5">
        <PriceFilter products={products} params={params} />
      </section>
    </main>
  );
}
