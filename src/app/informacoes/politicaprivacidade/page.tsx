import { FaqList } from "@/components/FaqItem";
import { PombalStore } from "@/components/PombalMessage";

export default function PoliticaPrivacidade() {
  return (
    <main className="w-full h-full max-w-[800px] mx-auto my-0 text-white px-2 2xl:px-4 py-5 animate-modifyScale">
      <h2 className="text-center text-2xl font-medium">
        Políticas de Privacidade
      </h2>
      <ul className="flex flex-col gap-8 mt-10">
        <FaqList
          title="Certificado de segurança SSL"
          text="Na Pombal Store todas as páginas estão em ambiente seguro, como pode verificar o 'cadeado verde' na URL. 
          Todos os dados são criptografados, garantindo segurança total às transações."
        />
        <FaqList
          title="Compartilhamento de Informações"
          text="A Pombal Store não irá vender, alugar ou transferir para terceiros 
        seus dados. Entretanto, essas informações podem ser agrupadas e utilizadas, internamente, como estatísticas genéricas, visando obter 
        um melhor entendimento do perfil dos usuários para aperfeiçoamento dos produtos e serviços oferecidos no site."
        />
        <FaqList
          title="Histórico de Produtos Visualizados"
          text="Na Pombal Store, o uso do histórico (cookies) é feito apenas para reconhecer 
        um visitante constante e melhorar a experiência de compra. Os cookies são pequenos arquivos de dados transferidos de um site da web para o 
        disco do seu computador e não armazenam dados pessoais."
        />
        <FaqList
          title="Envio de E-mails"
          text="A Pombal Store nunca envia e-mails solicitando confirmação cadastro ou com anexos executáveis 
        (extensão exe, com, scr, bat) e links para download. Os links de nossos e-mails levam diretamente para o site da Pombal Store."
        />
        <PombalStore />
      </ul>
    </main>
  );
}
