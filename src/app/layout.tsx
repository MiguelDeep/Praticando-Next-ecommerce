import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import  clsx from 'clsx'
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Ecommerce",
  description: "Create Next App Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
    <html lang="en">
        <body className={clsx(inter.className, "bg-slate-700 h-screen")}>
          <NavBar />
          <main className="p-16">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
