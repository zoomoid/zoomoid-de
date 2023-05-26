import "./globals.css"

import React from "react";
import Layout from "@/components/layout/layout";
import Provider from "./provider";

export const metadata = {
  title: "zoomoid.de",
  other: {
    description: "",
    viewport: "with=device-width,initial-scale=1"
  }
}

type RootLayoutProps = React.PropsWithChildren<{}>

export default function RootLayout({ children }: RootLayoutProps) {
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
