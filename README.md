# Pombal Store

Aplicação de um e-commerce com criação de usuários e sistema de pagamento.

✔️ Acesse o site clicando [aqui](https://pombal-store.vercel.app)

```bash
💡 Obs: Devido a aplicação estar hospedada em um serviço gratuito, após 15 minutos de inatividade o servidor "hiberna". Ao tentar acessar a aplicação, favor aguardar aproximadamente 1 minuto pois ele irá iniciar o servidor novamente.
```

## 💻 Sobre

Nesse projeto foi utilizada a nova versão do Next 13, toda a parte de consumir a API está sendo feita do lado do servidor utilizando a Fetch Api do Next com revalidate & cache.

No back-end, temos um user_admin responsável por adicionar, atualizar e remover os produtos da loja. Acesse o repositório da API clicando [aqui](https://github.com/Lokeon22/Pombal-Store-API.TS).

```bash
Testando o user_admin na API

# Clone o repositório
 $ git clone https://github.com/Lokeon22/Pombal-Store-API.TS.git

email: admin@admin.com | password: 123
```

### Principais Funcionalidades

- Sistema de pagamento com Stripe.
- Armazenamento de conteúdo via Cookies.
- Filtro por buscas e recomendações de produtos.

```bash
# Para testar o pagamento, utilize o seguinte cartão:

    Número: 4242 4242 4242 4242
    CVC: Quaisquer 3 dígitos
    DATA: Qualquer data fatura

  Para mais testes: https://stripe.com/docs/testing?testing-method=card-numbers

```

![pagamento_pombal](https://github.com/Lokeon22/LK-Money/assets/54092771/2a722222-9e0b-44a7-ae19-f99b10004b24)

Ao concluir a compra com sucesso, o usuário é armazenado no dashboard do Stripe, recuperando suas informações dentro do site na pagina de perfil do usuário.

![stripe_dashboard](https://github.com/Lokeon22/Poke/assets/54092771/264c620e-a9eb-4532-b705-5246a71bafc8)

## 🧾 Stack utilizada

- [Next](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com)
- [Stripe](https://stripe.com/br)

## 📀 Stack API

- [Node](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org)
- [Knex](https://knexjs.org)
- [Express](https://expressjs.com/pt-br)

## ⚙️ Preview

![pombal_store_capa](https://github.com/Lokeon22/LK-Money/assets/54092771/65746ee2-264c-44af-832a-a0cf0536633c)

### Acesse o repositório da API clicando [aqui](https://github.com/Lokeon22/Pombal-Store-API.TS)

Com 💛 por Gabriel
