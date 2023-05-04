"use client";
import { ReactNode } from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";
import { useAppSelector } from "@/app/hooks";

export type Theme = {
  textColor: string,
  backgroundColor: string
}

export default function Layout({ children }: {
  children: ReactNode,
}) {
  const theme = useAppSelector((state) => state.layout)

  return (
    <>
      <Navigation textColor={theme.textColor} backgroundColor={theme.backgroundColor} />
      <main className={`min-h-screen`}>
        {children}
        <Footer />
      </main>
    </>
  );
}