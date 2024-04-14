import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@joao_mjf - Desenvolvendo aplicações para o seu negócio",
  description: "Construindo aplicações para destacar seu negócio e sua marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main className="select-none text-zinc-950">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
