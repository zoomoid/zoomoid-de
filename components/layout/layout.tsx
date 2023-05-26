import { ReactNode } from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";

export type Theme = {
  textColor: string,
  backgroundColor: string
}

export default function Layout({ children }: {
  children: ReactNode,
}) {

  return (
    <>
      <Navigation />
      <main className={`min-h-screen`}>
        {children}
        <Footer />
      </main>
    </>
  );
}