import Image from "next/image";

import { Card } from "@/components/Card";
import { Carousel } from "@/components/Carousel";

import pombal_black from "../assets/pombalstore_blackfriday.png";
import duvidas from "../assets/duvidas.png";
import witchercollection from "../assets/colecaoespecial.png";

import { BsChatLeftDots, BsCreditCard, BsInstagram } from "react-icons/bs";

import { ProductsProps } from "@/types/Products";
import { MiniCard } from "@/components/MiniCard";
import { CategoryContainer } from "@/components/CategoryContainer";
import Link from "next/link";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/allproducts`,
    {
      next: { revalidate: 60 * 60 * 24 },
    }
  );
  const products: ProductsProps[] = await res.json();

  return { products };
}

export default async function Home() {
  const { products } = await getProducts();

  return (
    <main className="w-full h-full max-w-[1300px] mx-auto my-0 animate-changeOpDire">
      <Image
        width={1500}
        height={500}
        src={pombal_black}
        className="rounded-none 2xl:rounded-xl my-0 2xl:my-4"
        alt="pombal_store"
        priority={true}
      />

      <CategoryContainer
        text="Explore sua Elegância"
        url={"/collections/Colares"}
      />

      <Carousel>
        {products
          .filter((pro) => pro.category === "Colares")
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </Carousel>

      <section className="max-w-[1200px] mx-auto my-0 px-2 md:px-0 py-4 lg:py-5 grid grid-cols-1 md:grid-cols-3 lg:gap-2 bg-gradient-blue rounded-lg mt-10 mb-10">
        <div className="ml-2 md:ml-6 col-span-1 text-white">
          <h2 className="mt-0 md:mt-4 mb-4 text-lg md:text-2xl">
            O melhor para sua Casa
          </h2>
          <p className="text-sm lg:text-base">
            Veja mais produtos relacionados clicando no botão abaixo
          </p>
          <button
            type="button"
            className="mb-10 md:mb-0 mt-8 text-sm md:text-base font-semibold bg-white text-center px-4 w-52 h-12 text-black rounded-full hover:brightness-75 hover:duration-300"
          >
            <Link href={`/collections/Casa`}>Ver mais produtos</Link>
          </button>
        </div>
        <div className="col-span-2 [&>*:nth-child(1)]:text-white">
          <Carousel>
            {products
              .filter((pro) => pro.category === "Casa")
              .map((product) => (
                <Card key={product.id} product={product} />
              ))}
          </Carousel>
        </div>
      </section>

      <CategoryContainer text="Bolsas Feminina" url={"/collections/Feminino"} />

      <Carousel>
        {products
          .filter((pro) => pro.category === "Feminino")
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </Carousel>

      <Image
        width={1280}
        height={300}
        src={witchercollection}
        className="rounded-none 2xl:rounded-xl my-5"
        alt="pombal_witcher_collection"
        priority={true}
      />

      <Carousel>
        {products
          .filter((pro) => pro.category === "Witcher")
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </Carousel>

      <Link className="w-max" href={"/informacoes/faq"}>
        <Image
          width={1200}
          height={200}
          src={duvidas}
          className="rounded-none 2xl:rounded-xl my-0 2xl:my-4 mt-5 mx-auto"
          alt="pombal_duvidas_frequentes"
          priority={true}
        />
      </Link>

      <CategoryContainer
        text="Brinquedos e Hobbies"
        url={"/collections/Brinquedos"}
      />

      <Carousel>
        {products
          .filter((pro) => pro.category === "Brinquedos")
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </Carousel>

      <section className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 sm:gap-2 lg:gap-10 px-4">
        <MiniCard
          icon={
            <BsChatLeftDots className="w-8 h-8 sm:w-10 sm:h-10 md:w-6 md:h-6  mt-2" />
          }
          title="Ficou alguma dúvida?"
          text="De Segunda a Sábado das 09:00 ás 18:00"
          social="WhatsApp"
          color="whatsapp"
          url="https://github.com/Lokeon22"
        />

        <MiniCard
          icon={
            <BsInstagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-6 md:h-6 mt-2" />
          }
          title="Siga nosso perfil no instagram"
          text="Fique por dentro das nossas novidades e promoções"
          social="@pombalstore"
          color="pombalstore"
          url="https://github.com/Lokeon22"
        />

        <MiniCard
          icon={
            <BsCreditCard className="w-14 h-14 sm:w-20 sm:h-20 md:w-12 md:h-12 lg:w-14 lg:h-14 mt-2" />
          }
          title="Escolha como pagar"
          text="Com o Mercado Pago, você paga com cartão, boleto ou PIX. Você
              também poder parcelar em até 12x"
        />
      </section>
    </main>
  );
}
