import "../styles/fonts/basier/stylesheet.css";
import "../styles/fonts/material-icons/stylesheet.css";
import "../styles/fonts/novela/stylesheet.css";
import "../styles/globals.css";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
