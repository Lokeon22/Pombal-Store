import { FaqList } from "@/components/FaqItem";
import { PombalStore } from "@/components/PombalMessage";

export default function Trocas() {
  return (
    <main className="w-full h-full max-w-[800px] mx-auto my-0 text-white px-2 2xl:px-4 py-5 animate-modifyScale">
      <h2 className="text-center text-2xl font-medium">Trocas e Devoluções</h2>
      <ul className="flex flex-col gap-8 mt-10">
        <FaqList
          title="Trocas e Devoluções"
          text="Nós da Pombal Store somos comprometidos com a satisfação dos nossos clientes, oferecendo produtos de qualidade e 
            buscando sempre parcerias com os melhores fornecedores. Buscamos sempre o melhor para nossos clientes, desenvolvemos uma 
            Política de Trocas e Devoluções baseada no Código de Defesa do Consumidor, descrita abaixo."
        />
        <FaqList
          title="Condições Gerais"
          text="Para solicitação de troca ou devolução do produto, o cliente deverá entrar em contato conosco através do nosso
         e-mail: suporte@pombalstore.com"
        />
        <FaqList
          title="Motivos e prazos para trocas ou devoluções"
          text=" Desistência/ Arrependimento: o prazo é de até 7 (sete) dias a partir do 
        recebimento do produto (conforme Art. 49 do Código de Defesa do Consumidor) para fazer a solicitação. Para presente caso, o produto só será
         trocado ou devolvido o produto se o mesmo estiver dentro das condições."
        />
        <FaqList
          title="Formulário de Desistência"
          text="O formulário será analisado em até 5 (cinco) dias úteis. Após a revisão do formulário será
        gerada uma etiqueta para que o cliente envie o produto para nós. O prazo de validade da etiqueta é de 6 dias (corridos). Então caso o cliente
        não envie dentro do prazo a solicitação de troca ou devolução será cancelada."
        />
        <FaqList
          title="Defeito técnico ou de fabricação"
          text="O prazo é de 7 (sete) dias a partir do recebimento do produto 
        (conforme Art. 18 e Art. 26 do Código de Defesa do Consumidor) para fazer a solicitação pelo e-mail."
        />
        <FaqList
          title="Caso de Troca"
          text="Todos os casos de troca ou reembolso devem ser tratados apenas através do e-mail: suporte@pombalstore.com. O
        e-mail deve conter os detalhes de todo o problema com fotos nítidas e vídeos."
        />
        <FaqList
          title="Formas de restituição"
          text="Cupom de troca: Você poderá optar por um cupom de troca, que permite o uso do valor reembolsado
        para efetuar novas compras no site da Pombal Store ou estorno para compras no cartão. Caso tenha qualquer dúvida sobre os procedimentos de trocas
        ou devoluções, por favor, entre em contato conosco através do e-mail: suporte@pombalstore.com utilizando o título do e-mail a expressão TROCA OU DEVOLUÇÃO."
        />
        <PombalStore />
      </ul>
    </main>
  );
}
