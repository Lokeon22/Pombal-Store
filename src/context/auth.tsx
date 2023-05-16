"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";
import { User, UserProps } from "@/types/User";

interface AuthContextProps {
  isAuthenticated: boolean;
  handleLogin: ({ email, password }: LoginProps) => void;
  user?: UserProps;
  setUser: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
}

export const AuthContext = createContext({} as AuthContextProps);

interface authProviderProps {
  children: React.ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: authProviderProps) => {
  const [user, setUser] = useState<UserProps>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "pombal.token": token, "pombal.user": user } = parseCookies();

    if (token) {
      const userConvert: User = JSON.parse(user);
      setUser(userConvert.user);
    }
  }, []);

  async function handleLogin({ email, password }: LoginProps) {
    const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { user, token } = await res.json();

    if (!res.ok) {
      return alert("Email e/ou senha incorretos");
    }

    if (res.ok) {
      setCookie({ res }, "pombal.token", token, {
        maxAge: 60 * 60 * 6, // 6 hours
        path: "/",
      });

      setCookie({ res }, "pombal.user", JSON.stringify({ user }), {
        maxAge: 60 * 60 * 6,
        path: "/",
      });

      setUser(user.user);

      const win: Window = window;
      win.location = "/";
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogin, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
