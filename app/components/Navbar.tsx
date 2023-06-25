"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { category } from "@/types/categories";
import type { Navbar } from "@/types/navbar";

export default function Navbar(props: Navbar) {
  const categoryLength: number = props.categories.length;
  let moreThanThree = false;
  if (categoryLength > 3) {
    moreThanThree = true;
  }
  const [moreClicked, setMoreClicked] = useState(false);
  const handleMore = () => {
    setMoreClicked((previous) => !previous);
  };
  const moreEnter = () => {
    setMoreClicked(true);
  };
  const moreLeave = () => {
    setMoreClicked(false);
  };

  const [searchClicked, setSearchClicked] = useState(false);
  const handleSearch = () => {
    setSearchClicked((previous) => !previous);
  };
  const searchEnter = () => {
    setSearchClicked(true);
  };
  const searchLeave = () => {
    setSearchClicked(false);
  };

  return (
    <nav
      className="h-navbar w-full border-y border-dimBlack flex flex-row items-center justify-between px-10"
      onMouseLeave={() => {
        searchLeave();
        moreLeave();
      }}
    >
      <div className="flex flex-row justify-center items-center gap-3 h-8 w-menu font-montserrat text-menu text-menuBlack">
        <Link href={props.navDefault.defaultHome.route}>
          <p className="w-28 text-center cursor-pointer">
            {props.navDefault.defaultHome.name}
          </p>
        </Link>
        {props.categories
          .filter((item, index) => index < 3)
          .map((category: category) => {
            return (
              <Link href={`/${category.title}`}>
                <p className="w-28 text-center cursor-pointer">
                  {category.title}
                </p>
              </Link>
            );
          })}
        {moreThanThree ? (
          <div
            className="w-28 text-center cursor-pointer relative"
            onClick={handleMore}
            onMouseEnter={() => {
              moreEnter();
              searchLeave();
            }}
          >
            {props.navDefault.menuName}
            <div
              className={`${
                moreClicked ? "flex" : "hidden"
              } flex-col justify-center items-center gap-5 absolute top-10 bg-white shadow-sm py-5 px-5 z-50 border border-dimBlack`}
            >
              {props.categories
                .filter((item, index) => index >= 3)
                .map((category: category) => {
                  return (
                    <Link href={`/${category.title}`} key={category.id}>
                      <p
                        className="w-40 text-center cursor-pointer"
                        key={category.id}
                      >
                        {category.title}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </div>
        ) : null}
      </div>
      <div className="h-auto w-80 flex flex-row justify-center items-center gap-20">
        <div className="uppercase font-bebasneue text-weather flex flex-row w-32 justify-between items-center">
          <Image
            src={"https://img.icons8.com/?size=512&id=esGVrxg9VCJ1&format=png"}
            alt="Indian Flag"
            width={32}
            height={32}
          />
          <p>{props.weather.temp}°C</p>
          <p>DELHI,INDIA</p>
        </div>
        <div className="relative">
          <Image
            src={"https://img.icons8.com/?size=512&id=132&format=png"}
            alt="search blog"
            width={38}
            height={38}
            className="cursor-pointer"
            onClick={handleSearch}
            onMouseEnter={() => {
              searchEnter();
              moreLeave();
            }}
          />
          <div
            className={`h-10 w-72 border border-dimBlack z-50 top-14 right-0 py-2 px-3 ${
              searchClicked ? "flex" : "hidden"
            } flex-row items-center justify-center absolute bg-white`}
            onMouseEnter={searchEnter}
          >
            <input
              type="text"
              className="w-full h-full font-serif text-xs font-medium border border-dimBlack p-1"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
