import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./globals.css";
import { getWeather } from "@/utils/weather";
import type { weather } from "@/types/weather";
import { getCategories } from "@/utils/sanity";
import { navbar } from "@/contents/navbar";
import { header } from "@/contents/header";
import type { categories } from "@/types/categories";

export const metadata = {
  title: "CapitalCompass",
  description: "Right Location For Financial News",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories: categories = await getCategories();
  const weather: weather = await getWeather();

  return (
    <html lang="en">
      <body className="h-auto w-full bg-layout">
        <Header logo={header.logo} />
        <Navbar categories={categories} weather={weather} navDefault={navbar} />
        {children}
      </body>
    </html>
  );
}
