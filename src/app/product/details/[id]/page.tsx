import Image from "next/image";

import { TbTruckDelivery, TbArrowBack } from "react-icons/tb";
import { HiOutlineShieldCheck, HiOutlineHeart } from "react-icons/hi";

import { ProductsProps } from "../../../../types/Products";
import { CategoryContainer } from "@/components/CategoryContainer";
import { Carousel } from "@/components/Carousel";
import { Card } from "@/components/Card";
import { NavigationCategory } from "@/components/NavigationCategory";
import { BuyButton } from "@/components/BuyButton";

import { StripeProduct } from "../../../../types/Products";

const baseURL = process.env.NEXT_PUBLIC_POMBAL_STORE_API;

async function generateStaticParams({
  params: { id },
}: {
  params: { id: string };
}) {
  const product: ProductsProps = await fetch(
    `${baseURL}/product/details/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  ).then((res) => res.json());

  return { product };
}

async function getPrice() {
  const res = await fetch("http://localhost:3000/api/getproducts", {
    next: { revalidate: 60 * 60 * 24 },
  });

  const price: StripeProduct[] = await res.json();

  return { price };
}

async function getRecommendation(category: string) {
  const res = await fetch(`${baseURL}/allproducts?category=${category}`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const recommendation: ProductsProps[] = await res.json();

  return { recommendation };
}

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { product } = await generateStaticParams({ params });

  const { recommendation } = await getRecommendation(product.category);

  const { price } = await getPrice();

  return (
    <main className="w-full h-full max-w-[1300px] mx-auto my-0 text-black dark:text-white px-2 2xl:px-4 py-5 animate-changeOpDire">
      <NavigationCategory
        params={product}
        details={true}
        productDetail={product}
      />
      <section className="w-full h-full flex flex-col lg:flex-row gap-0 sm:gap-6 px-0 sm:px-5 md:px-10 lg:px-0">
        <div className="flex justify-center bg-white shadow-md p-5 sm:p-10 rounded-none sm:rounded-xl">
          <Image
            width={550}
            height={550}
            style={{ borderRadius: "12px" }}
            className="justify-self-center"
            src={`${baseURL}/files/${product.image}`}
            alt={product.name}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvmhRPQAGTwJs6OQmwAAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="flex flex-col gap-2 text-black shadow-md bg-white p-5 sm:p-10 rounded-none sm:rounded-xl">
          <span className="text-xs text-gray-600">
            Novo | {product.stock_amount * 10} Vendidos
          </span>
          <h2 className="text-2xl font-medium border-b-2 pb-1">
            {product.name}
          </h2>
          <p className="max-w-[60ch] text-gray-600">{product.description}</p>
          <div className="flex gap-3 mt-4">
            <h3 className="mt-1">Preço:</h3>
            <div>
              <p className="text-3xl text-green-400 font-medium">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </p>
              <span className="text-base font-bold">
                Em até 12x de{" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price / 12 + product.price / 60)}
              </span>
            </div>
          </div>

          <ul className="flex gap-3 sm:gap-2.5 flex-col p-4 sm:p-5 bg-gray-100 rounded-2xl my-5">
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <TbTruckDelivery className="min-w-max min-h-max w-5 h-5 text-green-500" />
              <p className="text-green-500 font-medium">
                Frete Grátis.{" "}
                <span className="text-gray-600 text-sm">Disponível</span>
              </p>
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <TbArrowBack className="min-w-max min-h-max w-5 h-5" />
              <p className="font-medium">
                Devolução gratis.{" "}
                <span className="font-normal text-sm">
                  Até 7 dias a partir do recebimento
                </span>
              </p>
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <HiOutlineShieldCheck className="min-w-max min-h-max w-5 h-5" />
              <p className="font-medium">
                Compra Garantida.{" "}
                <span className="font-normal text-sm">
                  Saia satisfeito ou devolvemos seu dinheiro
                </span>
              </p>
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <HiOutlineHeart className="min-w-max min-h-max w-5 h-5" />
              <p className="font-medium">
                Mais vendido{" "}
                <span className="font-normal text-sm">
                  entre os produtos da coleção
                </span>
              </p>
            </li>
          </ul>

          <BuyButton product={price} id={product.id} />
        </div>
      </section>

      <CategoryContainer
        text="Você também pode gostar"
        url={`/collections/${product.category}`}
      />
      <Carousel>
        {recommendation
          .filter((pro) => pro.id !== product.id)
          .map((rec) => (
            <Card key={rec.id} product={rec} />
          ))}
      </Carousel>
    </main>
  );
}
