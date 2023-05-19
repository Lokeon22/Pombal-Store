"use client";
import { useAuth } from "../../context/auth";
import { CustomerProps } from "@/types/Customers";

interface VerifyCustomerProps {
  data: CustomerProps[];
}

export function UserDetails({ data }: VerifyCustomerProps) {
  const { user } = useAuth();

  const customerFiltered = data.filter((dt) => dt.email === user?.email);

  return (
    <>
      <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-100 font-semibold">
        <h2 className="text-2xl text-blue-400 dark:text-blue-300 font-normal">
          Meus dados
        </h2>
        {!user && <h2>Carregando dados...</h2>}
        {user && (
          <>
            <h2>
              Nome:{" "}
              <span className="font-normal text-gray-500 dark:text-gray-200">
                {user.name}
              </span>{" "}
            </h2>
            <h2>
              Email:{" "}
              <span className="font-normal text-gray-500 dark:text-gray-200">
                {user.email}
              </span>
            </h2>
            <h2>
              Entrou em:{" "}
              <span className="font-normal text-gray-500 dark:text-gray-200">
                {Intl.DateTimeFormat("pt-BR").format(new Date(user.created_at))}
              </span>
            </h2>
          </>
        )}
      </div>
      <div className="flex flex-col gap-3 text-gray-600 dark:text-white">
        <h2 className="text-2xl text-blue-400 dark:text-blue-300">Compras</h2>
        {customerFiltered.length <= 0 ? (
          <>
            <p>
              Você ainda não fez nenhuma compra, escolha um dos nossos produtos.
            </p>
            <p>
              Ao realizar uma compra, os detalhes da entrega ficarão disponíveis
              aqui.
            </p>
          </>
        ) : (
          <>
            <p>
              Seu pagamento foi{" "}
              <span className="uppercase text-green-500">aprovado</span>. Após
              alguns minutos você irá receber um email contendo todos os
              detalhes e o produto será enviado em até 3 dias. Obrigado pela
              preferência.
            </p>
            <p>
              Atenciosamente,{" "}
              <span className="uppercase font-medium">Equipe Pombal Store</span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
