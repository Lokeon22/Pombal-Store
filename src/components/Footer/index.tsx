"use client";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";

export function Footer() {
  const atendimento = useRef<HTMLDivElement>(null);
  const informacao = useRef<HTMLUListElement>(null);

  const handleAtendClient = (
    content: React.RefObject<HTMLDivElement | HTMLUListElement>
  ) => {
    if (content.current) {
      content.current.classList.toggle("hidden");
      content.current.classList.toggle("flex");
    }
  };

  return (
    <footer className="w-full h-full border-t-4 border-blue-400 mt-5 sm:mt-10">
      <section className="max-w-[1300px] grid grid-cols-1 md:grid-cols-4 mx-auto my-0 py-3 lg:py-10 px-2 lg:px-4">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-semibold uppercase text-sm mb-3 py-4 md:py-0 border-b-2 md:border-b-0">
            Atendimento ao cliente
            <AiOutlineRight
              className="ml-5 w-4 h-4 inline-block md:hidden rotate-90"
              onClick={() => handleAtendClient(atendimento)}
            />
          </h3>
          <div
            className="hidden md:flex flex-col gap-3 mb-3 animate-changeOpacity"
            ref={atendimento}
          >
            <span>
              <strong>E-mail:</strong> suporte@pombalstore.com
            </span>
            <Link
              className="text-green-500 border-b-2 border-green-500 w-max hover:brightness-75 hover:duration-300"
              href={"https://github.com/Lokeon22"}
              target="_blank"
            >
              <span className="font-medium">WhatsApp:</span> +55 (32) 97777-1234
            </Link>
            <p className="w-full md:max-w-[300px] lg:max-w-none">
              <strong>Atendimento:</strong> Equipe de suporte para te atender de
              Segunda a Sábado <br />
              das 09:00 às 18:00
            </p>
          </div>
        </div>
        <nav className="col-span-1">
          <h3 className="font-semibold uppercase text-sm mb-3 py-4 md:py-0 border-b-2 md:border-b-0">
            Informações
            <AiOutlineRight
              className="ml-5 w-4 h-4 inline-block md:hidden rotate-90"
              onClick={() => handleAtendClient(informacao)}
            />
          </h3>

          <ul
            className="hidden md:flex flex-col gap-3 mb-4 md:mb-0 cursor-pointer animate-changeOpacity"
            ref={informacao}
          >
            <li className="hover:text-blue-400 hover:duration-300">
              <Link href={"/informacoes/faq"}>FAQ Perguntas Frequentes</Link>
            </li>
            <li className="hover:text-blue-400 hover:duration-300">
              <Link href={"/informacoes/politicaprivacidade"}>
                Política de Privacidade
              </Link>
            </li>
            <li className="hover:text-blue-400 hover:duration-300">
              <Link href={"/informacoes/reembolso"}>Política de Reembolso</Link>
            </li>
            <li className="hover:text-blue-400 hover:duration-300">
              <Link href={"/informacoes/trocas"}>Trocas e Devoluções</Link>
            </li>
            <li className="hover:text-blue-400 hover:duration-300">
              <Link href={"/informacoes/aviso"}>Aviso Legal</Link>
            </li>
          </ul>
        </nav>
        <div className="col-span-1">
          <h3 className="font-semibold uppercase text-sm mb-2">
            Entre para o nosso clube
          </h3>
          <p className="mb-3">
            Inscreva-se para receber descontos{" "}
            <br className="hidden md:block" /> exclusivos direto no seu e-mail
          </p>
          <div className="flex flex-col gap-3">
            <input
              className="h-10 px-2 text-black rounded outline-none border border-blue-200 dark:border-none"
              type="text"
              placeholder="Seu e-mail"
            />
            <button
              className="px-2 py-2 bg-green-600 rounded hover:brightness-90 dark:hover:brightness-75 hover:duration-300 text-white"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </section>
      <label className="flex flex-col gap-2 items-center justify-center border-t-2 border-blue-400 border-opacity-70 py-8 text-sm sm:text-base">
        <p>© POMBAL STORE | Todos os direitos reservados</p>
        <span>Copyright 2023© - Pombal Corp®</span>
      </label>
    </footer>
  );
}
