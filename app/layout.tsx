import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./globals.css";
import { header } from "@/contents/header";

export const metadata = {
  title: "CapitalCompass",
  description: "Right Location For Financial News",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-auto w-full bg-layout">
        <Header logo={header.logo} />
        {children}
      </body>
    </html>
  );
}
