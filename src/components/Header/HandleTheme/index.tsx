"use client";
import { useState, useEffect } from "react";
import { CiDark, CiBrightnessDown } from "react-icons/ci";

export function HandleTheme() {
  const [theme, setTheme] = useState<string | null>("light");

  useEffect(() => {
    const getItem = localStorage.getItem("pombal.theme");
    getItem === null && localStorage.setItem("pombal.theme", theme as string);
    getItem === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setTheme(getItem);
  }, [theme]);

  function handleThemeSwitch() {
    const verify = theme === "dark" ? "light" : "dark"; //remove delay
    setTheme(verify);
    localStorage.setItem("pombal.theme", verify);
  }

  return (
    <button
      className="hover:text-blue-500 hover:duration-300"
      onClick={handleThemeSwitch}
    >
      {theme === "light" ? (
        <CiDark className="min-w-[22px] min-h-[22px]" />
      ) : (
        <CiBrightnessDown className="min-w-[22px] min-h-[22px]" />
      )}
    </button>
  );
}
