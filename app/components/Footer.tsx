import { category } from "@/types/categories";
import type { Footer, legal, social } from "@/types/footer";
import Image from "next/image";
import Link from "next/link";

export default function Footer(props: Footer) {
  return (
    <footer className="w-full h-footer bg-footer flex flex-col items-center justify-center">
      <section className="w-full h-[90%] flex flex-row py-20 px-10">
        <div className="w-1/4 h-full flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-center">
            <h3 className="font-unbounded font-black text-xl">{props.Logo}</h3>
            <Image
              src={
                "https://img.icons8.com/?size=512&id=2sZ0sdlG9kWP&format=png"
              }
              height={20}
              width={20}
              alt="verified"
            />
          </div>
          <p className="text-xs text-gray-600 font-sans pt-10">{props.cta}</p>
          <div className="w-28 h-8 flex flex-row items-center justify-between">
            {props.Socials.map((social: social) => {
              return (
                <a href={social.address}>
                  <Image
                    src={social.src}
                    height={social.size.height}
                    width={social.size.width}
                    alt={social.name}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-2/4 h-full flex flex-col items-center justify-start gap-3 p-10">
          <h4 className="font-bebasneue text-xl uppercase">
            {props.About.name}
          </h4>
          <p className="font-chilanka text-xs text-center w-description">
            {props.About.description}
          </p>
        </div>
        <div className="w-1/4 h-full flex flex-col items-end justify-center">
          <div className="flex flex-col items-center justify-evenly gap-3">
            <Link href={`/`}>
              <p className="font-bebasneue text-black text-2xl uppercase">
                Home
              </p>
            </Link>
            {props.categories.map((category: category) => {
              return (
                <Link href={`/${category.title}`}>
                  <p className="font-bebasneue text-black text-2xl uppercase">
                    {category.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full h-[10%] bg-footerBottom text-white font-anekkannada flex flex-row items-center justify-center gap-3 text-[14px]">
        <Link href={props.legals[0].route}>
          <p>{props.legals[0].name}</p>
        </Link>
        {props.legals
          .filter((item, index) => index > 0)
          .map((legal: legal) => {
            return (
              <>
                <p>|</p>
                <Link href={legal.route}>
                  <p>{legal.name}</p>
                </Link>
              </>
            );
          })}
      </section>
    </footer>
  );
}
