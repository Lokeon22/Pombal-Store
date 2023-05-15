"use client";
import { useState } from "react";
import { useAuth } from "@/context/auth";

export function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useAuth();

  return (
    <div>
      <h2 className="mb-8 text-xl">Já sou cliente</h2>
      <form
        className="w-full max-w-[300px] flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin({ email, password });
        }}
      >
        <div className="flex items-center gap-5">
          <label htmlFor="email">Email</label>
          <input
            className="w-full px-2 py-1 text-black h-8 outline-none rounded"
            type="text"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="password">Senha</label>
          <input
            className="w-full px-2 py-1 text-black h-8 outline-none rounded"
            type="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>
        <button
          className="px-2 py-1 h-8 rounded bg-green-600 text-white font-medium hover:brightness-90 hover:duration-300"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
