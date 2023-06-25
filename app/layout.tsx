// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Types
import type { weather } from "@/types/weather";
import type { categories } from "@/types/categories";

// Contents
import { navbar } from "@/contents/navbar";
import { header } from "@/contents/header";
import { footer } from "@/contents/footer";

// Utilities
import { getCategories } from "@/utils/categories";
import { getWeather } from "@/utils/weather";

// GLobal CSS
import "./globals.css";

// MetaData
export const metadata = {
  title: "CapitalCompass",
  description: "Right Location For Financial News",
};

// RootLayout
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetched Data
  const categories: categories = await getCategories();
  const weather: weather = await getWeather();

  return (
    <html lang="en">
      <body className="h-auto w-full bg-white">
        <Header logo={header.logo} />
        <Navbar categories={categories} weather={weather} navDefault={navbar} />
        {children}
        <Footer
          Logo={footer.Logo}
          cta={footer.cta}
          Socials={footer.Socials}
          legals={footer.legals}
          About={footer.About}
          categories={categories}
        />
      </body>
    </html>
  );
}
