import "./globals.css";

import { AuthProvider } from "@/context/auth";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Pombal Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
