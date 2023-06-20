import type { categories, weather } from "./categories";

type navDefault = {
  defaultHome: {
    route: string;
    name: string;
  };
  menuName: string;
};

type Navbar = {
  categories: categories;
  weather: weather;
  navDefault: navDefault;
};

export { navDefault, Navbar };
