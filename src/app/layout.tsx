import "./globals.css";
import Provider from "./util/Provider";
import Navbar from "./components/Navbar";
import React from "react";
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
        <Navbar />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
