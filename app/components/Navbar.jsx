"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Burger from "./hamburger.png"

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="text-white flex bg-black py-4 lg:py-6">
      <div className="pl-5 lg:pl-20 w-1/2 place-content-center">
        <Link className="text-2xl lg:text-4xl font-black" href="/">
          Nard Sarroca
        </Link>
      </div>
      <div className="pr-10 lg:pr-20 w-1/2 font-medium text-end text-paragraph text-[16px] place-content-center">
        <button className="lg:hidden">
          <Image className="invert mt-2" src={Burger} width={20}/>
        </button>
        <ul className="text-paragraph space-x-8  hidden lg:block">
          <Link
            className={
              currentPath === "/"
                ? "group inline-block text-white font-semibold"
                : "group inline-block"
            }
            href="/"
          >
            Home ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
          <Link
            className={
              currentPath === "/about"
                ? "group inline-block text-white font-semibold"
                : "group inline-block"
            }
            href="/about"
          >
            About ( )
            <div
              className={
                currentPath === "/about"
                  ? "text-white font-semibold bg-underline w-[50%] h-[0.125rem]"
                  : "bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"
              }
            ></div>
          </Link>
          <Link className={
              currentPath === "/portfolio"
                ? "group inline-block text-white font-semibold"
                : "group inline-block"
            } href="/portfolio">
            Portfolio ( )
            <div className={
                currentPath === "/portfolio"
                  ? "text-white font-semibold bg-underline w-[50%] h-[0.125rem]"
                  : "bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"
              }></div>
          </Link>
          <Link className={
              currentPath === "/contact"
                ? "group inline-block text-white font-semibold"
                : "group inline-block"
            } href="/contact">
            Contact ( )
            <div className={
                currentPath === "/contact"
                  ? "text-white font-semibold bg-underline w-[50%] h-[0.125rem]"
                  : "bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"
              }></div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
