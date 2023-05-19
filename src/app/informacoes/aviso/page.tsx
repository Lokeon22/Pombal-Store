import { FaqList } from "@/components/FaqItem";
import { PombalStore } from "@/components/PombalMessage";

export default function Faq() {
  return (
    <main className="w-full h-full max-w-[800px] mx-auto my-0 text-black dark:text-white px-2 2xl:px-4 py-5 animate-modifyScale">
      <h2 className="text-center text-2xl font-medium">Aviso Legal</h2>
      <ul className="flex flex-col gap-8 mt-10">
        <FaqList
          title="Aviso e Privacidade"
          text="Este é um aviso legal e de privacidade geral referente ao site da Pombal Store. Neste site, a 
        Pombal Store intermedia a compra e vendade produtos físicos de forma online. Ao acessar e usar este site, você concorda em estar
        sob obrigação legal e cumprir com os seguintes termos e condições deste Aviso Legal e de Privacidade."
        />
        <FaqList
          title="Direitos Pombal Corp®"
          text="Reservamos o direito de alterar ou descontinuar, a qualquer tempo, qualquer
        aspecto ou função deste site, inclusive o aviso legal e de privacidade, sendo que tais modificações entrarão em vigor imediatamente
        após a postagem do aspecto ou função modificada deste site ou do aviso legal e de privacidade modificado."
        />
        <PombalStore />
      </ul>
    </main>
  );
}
