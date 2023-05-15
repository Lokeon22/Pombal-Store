"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductsProps } from "@/types/Products";

interface PriceFilterProps {
  params: {
    name: string;
  };
  products: ProductsProps[];
  user_search?: boolean;
}

export function PriceFilter({
  params,
  products,
  user_search,
}: PriceFilterProps) {
  const [selectValue, setSelectValue] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  const baseURL = "http://localhost:8080";

  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-0 items-center justify-between mb-5 border-b-4 pb-0.5 ">
        {user_search ? (
          <h2 className="text-2xl font-medium">
            Produtos com "{params.name.replaceAll("%20", " ")}"
          </h2>
        ) : (
          <h2 className="text-2xl font-medium">{params.name}</h2>
        )}
        <div className="flex items-center gap-1">
          <h2 className="max-[341px]:hidden">Ordenar por:</h2>
          <select name="prices_filter" id="price_filter" onChange={onChange}>
            <option value={"menor"}>Menor Preço</option>
            <option value={"maior"}>Maior Preço</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {products
          .sort((a, b) =>
            selectValue === "maior" ? b.price - a.price : a.price - b.price
          )
          .map((product) => (
            <div
              key={product.id}
              className="w-full bg-white text-black p-3 sm:p-4 rounded-xl cursor-pointer shadow-slate-500 shadow-lg hover:brightness-95 hover:duration-300"
            >
              <Link href={`/product/details/${product.id}`}>
                <Image
                  width={300}
                  height={300}
                  style={{ borderRadius: "12px" }}
                  src={`${baseURL}/files/${product.image}`}
                  alt="carrinho"
                  priority
                />
                <p className="my-1 text-base sm:text-lg font-semibold truncate">
                  {product.name}
                </p>
                <p className="truncate text-sm sm:text-base">
                  {product.description}
                </p>
                <p className="text-xl sm:text-2xl text-green-400 font-medium">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </p>
                <p className="text-xs sm:text-sm my-1">
                  no PIX{" "}
                  <span className="text-green-500">(5% de desconto)</span>
                </p>
                <span className="text-xs sm:text-sm font-bold">
                  ou 12x de{" "}
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price / 12 + product.price / 60)}
                </span>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
