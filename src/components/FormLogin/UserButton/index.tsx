"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/auth";
import { destroyCookie } from "nookies";
import { BiUser } from "react-icons/bi";

export function UserButton() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  function handleLogout() {
    destroyCookie(undefined, "pombal.token");
    destroyCookie(undefined, "pombal.user");
    setUser(undefined);
    router.push("/");
  }

  return (
    <>
      {user ? (
        <div className="w-max flex gap-2 items-start">
          <h2 className="text-xs sm:text-sm after:content-['|'] after:pl-2">
            Olá, {user.name}
          </h2>
          <button
            onClick={handleLogout}
            type="button"
            className="text-xs sm:text-sm hover:text-blue-400 hover:duration-300"
          >
            Sair
          </button>
        </div>
      ) : (
        <Link href={"/login"}>
          <div className="w-max flex items-center gap-2 hover:brightness-90 hover:duration-300">
            <BiUser className="w-6 h-6 xl:w-5 xl:h-5" />
            <button type="button" className="hidden sm:block text-sm">
              Entre ou cadastre-se
            </button>
          </div>
        </Link>
      )}
    </>
  );
}
