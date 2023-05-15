"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbPhoneCall, TbMail } from "react-icons/tb";

import { ButtonIconsContainer } from "../ButtonIconsContainer";
import { LiLink } from "./Links";

export function Menu() {
  const [menu, setMenu] = useState(false);

  function handleModal() {
    setMenu(!menu);
  }

  return (
    <>
      {menu ? (
        <>
          <AiOutlineClose
            onClick={handleModal}
            className="block xl:hidden min-w-[1.3rem] sm:min-w-[1.8rem] lg:min-w-[1.5rem] h-10"
          />
          <nav className="absolute block xl:hidden w-full top-24 left-0 right-0 bottom-0 animate-modifyScale">
            <div className="relative flex flex-col gap-4 py-5 px-5 text-black bg-white">
              <ul className="flex flex-col gap-4 font-medium">
                <LiLink text="Início" category="" setMenu={setMenu} home />
                <LiLink
                  text="Acessórios Feminino"
                  category="Feminino"
                  setMenu={setMenu}
                />
                <LiLink
                  text="Casa & Cozinha"
                  category="Casa"
                  setMenu={setMenu}
                />
                <LiLink
                  text="Colares e Pingentes"
                  category="Colares"
                  setMenu={setMenu}
                />
                <LiLink
                  text="Brinquedos"
                  category="Brinquedos"
                  setMenu={setMenu}
                />
                <LiLink text="Quadros" category="Quadros" setMenu={setMenu} />
              </ul>
              <section className="flex flex-col gap-3 border-t-2 text-sm">
                <h2 className="mt-4 uppercase font-semibold">
                  Precisa de ajuda?
                </h2>
                <ButtonIconsContainer
                  icon={<TbPhoneCall className="w-5 h-5" />}
                  text="(32) 9 97777-1234"
                  elementType="p"
                />
                <ButtonIconsContainer
                  icon={<TbMail className="w-5 h-5" />}
                  text="pombalstore@contato.com"
                  elementType="p"
                />
              </section>
            </div>
          </nav>
        </>
      ) : (
        <AiOutlineMenu
          onClick={handleModal}
          className="min-w-[1.3rem] sm:min-w-[1.8rem] lg:min-w-[1.5rem] h-10 block xl:hidden"
        />
      )}
    </>
  );
}
