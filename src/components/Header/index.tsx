import Link from "next/link";

import { SearchInput } from "./SearchInput";

import { Menu } from "../Menu";
import { UserButton } from "../FormLogin/UserButton";
import { HandleTheme } from "./HandleTheme";

export default function Header() {
  return (
    <header className="w-full h-auto xl:h-40 border-b-4 border-blue-400">
      <div className="w-full xl:items-stretch max-w-[1300px] mx-auto my-0 py-3 lg:py-10 px-2 lg:px-4 flex-wrap">
        <Link href={"/"}>
          <h2 className="block lg:hidden text-xl text-center mb-2">
            Pombal <strong className="text-blue-400">Store</strong>
          </h2>
        </Link>
        <div className="flex items-center gap-2 lg:gap-3 xl:gap-5">
          <Menu />
          <Link className="w-max" href={"/"}>
            <h2 className="w-max hidden lg:block text-xl xl:text-3xl">
              Pombal <strong className="text-blue-400">Store</strong>
            </h2>
          </Link>

          <SearchInput />

          <nav className="w-max flex items-center gap-1 sm:gap-2">
            <HandleTheme />
            <UserButton />
          </nav>
        </div>

        <ul className="hidden xl:flex items-center justify-center gap-10 mt-7">
          <li className="hover:text-blue-300 hover:duration-300">
            <Link href={"/collections/Feminino"}>Acessórios Feminino</Link>
          </li>
          <li className="hover:text-blue-300 hover:duration-300">
            <Link href={"/collections/Casa"}>Casa & Cozinha</Link>
          </li>
          <li className="hover:text-blue-300 hover:duration-300">
            <Link href={"/collections/Colares"}>Colares e Pingentes</Link>
          </li>
          <li className="hover:text-blue-300 hover:duration-300">
            <Link href={"/collections/Brinquedos"}>Brinquedos</Link>
          </li>
          <li className="hover:text-blue-300 hover:duration-300">
            <Link href={"/collections/Quadros"}>Quadros</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
