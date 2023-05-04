import "./globals.css"

import React from "react";
import Layout from "@/components/layout/layout";
import { store } from "./store";
import Provider from "./provider";

export const metadata = {
  title: "zoomoid.de",
  other: {
    description: "",
    viewport: "with=device-width,initial-scale=1"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Layout>
            {children}
          </Layout>
        </Provider>
      </body>
    </html>
  )
} 
