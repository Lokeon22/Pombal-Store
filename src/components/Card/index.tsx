import Link from "next/link";
import Image from "next/image";

import { ProductsProps } from "@/types/Products";

interface CardProps {
  product: ProductsProps;
}

export function Card({ product }: CardProps) {
  return (
    <div className="min-w-[200px] sm:min-w-[250px] bg-white text-black p-4 rounded-xl cursor-pointer hover:brightness-95 hover:duration-300">
      <Link href={`/product/details/${product.id}`}>
        <Image
          width={225}
          height={225}
          style={{ borderRadius: "12px" }}
          src={`${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/files/${product.image}`}
          alt="carrinho"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvmhRPQAGTwJs6OQmwAAAAABJRU5ErkJggg=="
        />
        <p className="my-1 text-base sm:text-lg font-semibold truncate">
          {product.name}
        </p>
        <p className="truncate text-sm sm:text-base">{product.description}</p>
        <p className="text-xl sm:text-2xl text-green-400 font-medium">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
        <p className="text-xs sm:text-sm my-1">
          no PIX <span className="text-green-500">(5% de desconto)</span>
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
  );
}
