import { FaqList } from "@/components/FaqItem";

export default function Faq() {
  return (
    <main className="w-full h-full max-w-[800px] mx-auto my-0 text-white px-2 2xl:px-4 py-5">
      <h2 className="text-center text-2xl font-medium">
        FAQ Perguntas Frequentes
      </h2>
      <ul className="flex flex-col gap-8 mt-10">
        <FaqList
          title="Qual o prazo de entrega?"
          text="R: Nosso prazo padrão de entrega totalmente grátis é de 7 a 21 dias
        úteis. Lembrando que finais de semana e feriados não são contados como
        dias úteis!"
        />
        <FaqList
          title="Só vou receber meu produto somente após 21 dias úteis?"
          text="R: Este é o prazo padrão de entrega, mas normalmente nossos clientes recebem seus pedidos com 14 a 15 dias corridos! 
          Algumas regiões do Brasil chegam a receber pedidos em 10 a 12 dias corridos."
        />
        <FaqList
          title="Como sei que vou receber o produto?"
          text="R: O objetivo da Pombal Store é que nossos clientes fiquem totalmente satisfeitos. Nós garantimos a entrega do seu produto e satisfação, 
          e você pode acompanhar toda a entrega através do rastreamento no nosso site."
        />
        <FaqList
          title="Eu consigo acompanhar meu produto?"
          text="R: Simm! Você pode acompanhar todo o progresso da entrega pelo nosso site através do código de rastreio que enviaremos 
          pelo e-mail assim que seu pacote for despachado."
        />
        <FaqList
          title="Eu tenho garantia comprando com vocês?"
          text="R: Claro que simm! Na Pombal Store você tem 7 dias de garantia de satisfação para qualquer produto da loja, 
          além da garantia para defeitos de fábrica."
        />
        <FaqList
          title="O produto está em trânsito mas não chegou, porquê?"
          text="R: Em trânsito significa que seu produto saiu dos nossos fornecedores e está sendo enviado para você. 
          Fique tranquilo(a)! Você poderá ver todas as atualizações através do nosso site."
        />
        <FaqList
          title="Fiz pedidos de produtos diferentes e chegou apenas um deles, isso é normal?"
          text="R: Sim, isso é completamente normal. Alguns de nossos produtos são enviados de fornecedores diferentes, então pode acontecer de você 
          receber um produto e o outro produto você receberá em seguida. Mas fique tranquilo(a)! Todos os pedidos chegarão até você."
        />
        <FaqList
          title="É possível que um pedido atrase a entrega?"
          text="Como trabalhamos com uma logistica de entregas em parceria com os Correios existem algumas variáveis que são incontroláveis, como, 
            problemas em estradas e(ou) rotas de entrega, surtos de vírus e, em situações incontroláveis podem haver alguns atrasos."
        />
        <li>
          <span className="text-gray-50">Atenciosamente,</span>
          <h2 className="text-gray-50 font-medium uppercase mt-1">
            Equipe Pombal Store.
          </h2>
        </li>
      </ul>
    </main>
  );
}
