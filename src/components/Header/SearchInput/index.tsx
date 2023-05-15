"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineSearch } from "react-icons/ai";

export function SearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const input = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-3xl flex items-center px-2 h-10 bg-white text-black rounded mx-auto my-0">
      <AiOutlineSearch className="w-5 h-5 cursor-pointer" />
      <input
        onKeyDown={(e) => {
          if (search == "") {
            return;
          } else if (e.key === "Enter" && input.current) {
            router.push(`search/${search}`);
            input.current.value = "";
          }
        }}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        ref={input}
        className="w-full px-2 py-1 outline-none border-none"
        type="text"
        placeholder="O que está buscando?"
      />
    </div>
  );
}
