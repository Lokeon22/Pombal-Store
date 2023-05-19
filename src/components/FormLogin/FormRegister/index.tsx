"use client";
import { useState } from "react";

export function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POMBAL_STORE_API}/users/create`,
      {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      return alert("Email já existe");
    }

    if (res.ok) {
      alert("Conta criada");
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <h2 className="my-8 text-xl">Quero criar uma conta</h2>
      <form
        className="w-full max-w-[300px] flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <div className="flex items-center gap-3.5">
          <label htmlFor="name">Nome</label>
          <input
            className="w-full px-2 py-1 text-black h-8 outline-none rounded dark:border-0 border border-blue-300"
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor="email_register">Email</label>
          <input
            className="w-full px-2 py-1 text-black h-8 outline-none rounded dark:border-0 border border-blue-300"
            type="text"
            id="email_register"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-3.5">
          <label htmlFor="password_register">Senha</label>
          <input
            className="w-full px-2 py-1 text-black h-8 outline-none rounded dark:border-0 border border-blue-300"
            type="password"
            id="password_register"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>
        <button
          className="px-2 py-1 h-8 rounded bg-blue-700 hover:brightness-90 hover:duration-300 text-white font-medium"
          type="submit"
        >
          Criar conta
        </button>
      </form>
    </div>
  );
}
