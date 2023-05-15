import Link from "next/link";
import { ProductsProps } from "@/types/Products";

interface NavigationCategorProps {
  params: {
    name: string;
  };
  details?: boolean;
  productDetail?: ProductsProps;
}

export function NavigationCategory({
  params,
  details,
  productDetail,
}: NavigationCategorProps) {
  return (
    <nav className="mb-0 sm:mb-5">
      <ul className="hidden sm:flex items-center gap-1 text-sm text-gray-300">
        <li className="hover:text-blue-400 hover:duration-300">
          <Link href={"/"}>Página inicial</Link>
        </li>
        {details && productDetail && (
          <li>
            {"> "}
            <Link
              className="hover:text-blue-400 hover:duration-300"
              href={`/collections/${productDetail.category}`}
            >
              {productDetail.category}
            </Link>
          </li>
        )}
        <li className="capitalize">
          {"> "}
          {params.name.replaceAll("%20", " ")}
        </li>
      </ul>
    </nav>
  );
}
