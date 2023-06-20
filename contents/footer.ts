import type { footerContent } from "@/types/footer.d.ts";

const commonSize: number = 30;

const setSize = (number: number) => {
  return {
    height: number,
    width: number,
  };
};

const footer: footerContent = {
  Logo: "CapitalCompass",
  cta: "Follow Us",
  Socials: [
    {
      name: "Twitter",
      src: "https://img.icons8.com/?size=512&id=13963&format=png",
      size: setSize(commonSize),
      address: "/",
    },
    {
      name: "Instagram",
      src: "https://img.icons8.com/?size=512&id=nj0Uj45LGUYh&format=png",
      size: setSize(commonSize),
      address: "/",
    },
    {
      name: "Youtube",
      src: "https://img.icons8.com/?size=512&id=19318&format=png",
      size: setSize(commonSize),
      address: "/",
    },
  ],
  About: {
    name: "About Us",
    description:
      "Hindustan Times is an Indian English-language daily newspaper based in Delhi. It is the flagship publication of HT Media, an entity controlled by the Birla family, and is owned by Shobhana Bhartia.  It was founded by Sunder Singh Lyallpuri, founder-father of the Akali movement and the Shiromani Akali Dal, in Delhi and played integral roles in the Indian independence movement as a nationalist daily.",
  },
  legals: [
    {
      name: "Contact Us",
      route: "/contact",
    },
    {
      name: "Privacy Policy",
      route: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      route: "/terms-conditions",
    },
  ],
};

export { footer };
