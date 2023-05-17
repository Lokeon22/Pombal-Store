import { PombalStore } from "@/components/PombalMessage";

export default function Reembolso() {
  return (
    <main className="w-full h-full max-w-[800px] mx-auto my-0 text-white px-2 2xl:px-4 py-5 animate-modifyScale">
      <h2 className="text-center text-2xl font-medium">
        Política de Reembolso
      </h2>
      <ul className="flex flex-col gap-4 mt-10 text-gray-300">
        <li>
          <span>
            Nossa política de trocas dos produtos visa proporcionar ao cliente
            total segurança em relação aos produtos adquiridos em nossa loja.
          </span>
        </li>
        <li>
          <span>
            Todos os nossos produtos possuem garantia contra defeitos de
            fabricação.
          </span>
        </li>
        <li>
          <span>
            Também realizamos trocas de produtos que vieram diferente daquele
            encomendado pelo cliente.
          </span>
        </li>
        <li>
          <span>
            Caso você receba um produto nosso com algum defeito de fabricação ou
            diferente do que você encomendou siga os seguintes passos para
            realizar a troca:
          </span>
        </li>
        <li>
          <span>
            Caso tenha ultrapassado os 7 dias úteis e o produto apresente algum
            vício ou defeito, entre em contato conosco, informando CPF, número
            do pedido, o produto a ser devolvido e o defeito.
          </span>
        </li>
        <li>
          <span>
            Assim que recebermos o e-mail enviamos sua solicitação ao nosso
            setor de qualidade para que seja verificado. Será necessária a
            autorização desse setor para que uma possível troca seja feita.
            Análise realizada, retornaremos o contato com o parecer e se será
            necessária a troca.
          </span>
        </li>
        <li>
          <span>
            O prazo para a troca ser solicitada por este motivo é de até 30 dias
            após o recebimento do produto.
          </span>
        </li>
        <li>
          <span>
            De acordo com o CDC (Código de Defesa do Consumidor), a solicitação
            de cancelamento de compras virtuais deve ser feita em até 7 dias
            úteis/corridos após a data de recebimento.
          </span>
        </li>
        <li>
          <span>
            Para estorno no cartão de crédito o nosso departamento financeiro
            tem o prazo máximo de 7 dias úteis para processar junto a operadora
            do cartão de crédito e o prazo limite para o saldo retornar ao seu
            cartão de crédito é de até 120 dias de acordo com as operadoras de
            cartão e depende do fechamento da sua fatura.
          </span>
        </li>
        <li>
          <span>
            Caso seja necessário realizar o reembolso ele será feito em conta
            corrente no prazo máximo de 10 dias úteis após a análise de
            qualidade e somente poderá ser realizado em uma conta com o mesmo
            CPF que foi utilizado no nosso site.
          </span>
        </li>
        <li>
          <span>
            No caso de produtos devolvidos sem prévia comunicação, fora do
            prazo, com ausência ou divergência dos itens, sem a etiqueta ou nota
            fiscal, eles serão reenviados aos clientes.
          </span>
        </li>
        <li>
          <span>
            O mesmo vale para trocas reprovadas após a análise dos produtos pelo
            nosso departamento de qualidade. Eles serão reenviados aos clientes
            pela modalidade Sedex a cobrar e o frete deste reenvio deverá ser
            pago pelo cliente.
          </span>
        </li>
        <PombalStore />
      </ul>
    </main>
  );
}
