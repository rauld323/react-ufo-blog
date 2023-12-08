import React from "react";
import "./globals.css";
import Provider from "./utils/Provider";
import Navbar from "./components/Navbar";

import StyledComponentsRegistry from "./lib/registry";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UFO Blog App",
  description: "next 14 practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <Provider>{children}</Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
