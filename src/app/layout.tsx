import "@/styles/fonts/basier/stylesheet.css";
import "@/styles/fonts/material-icons/stylesheet.css";
import "@/styles/fonts/novela/stylesheet.css";
import "@/styles/globals.css";

import React from "react";
import StyledJsxRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
