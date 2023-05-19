import "./globals.css";
import { Roboto } from "next/font/google";

import { AuthProvider } from "@/context/auth";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Pombal Store",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-roboto bg-gray-100 text-black dark:bg-black dark:text-white duration-300`}
      >
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
