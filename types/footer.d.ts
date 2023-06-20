import type { categories } from "./categories";

type size = {
  height: number;
  width: number;
};

type social = {
  name: string;
  src: string;
  size: size;
  address: string;
};

type legal = {
  name: string;
  route: string;
};

type footerContent = {
  Logo: string;
  cta: string;
  Socials: social[];
  About: {
    name: string;
    description: string;
  };
  legals: legal[];
};

type Footer = footerContent & {
  categories: categories;
};

export { footerContent, social, size, Footer, legal };
