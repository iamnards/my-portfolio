"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Burger from "./hamburger.png";
import Close from "./close.png";
import { useState } from "react";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import GitHub from "./github.png";
import LinkedIn from "./linkedin.png";


export default function Navbar() {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="text-white bg-black py-4 lg:py-6">
      <div className="flex justify-between">
        <div className="pl-5 lg:pl-20 w-1/2 place-content-center">
          <Link className="text-2xl lg:text-4xl font-black" href="/">
            Nard Sarroca
          </Link>
        </div>
        <div className="pr-10 lg:pr-20 font-medium text-end text-paragraph text-[16px] place-content-center hidden lg:block">
          <ul className="text-paragraph space-x-8 text-right">
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
            <Link
              className={
                currentPath === "/portfolio"
                  ? "group inline-block text-white font-semibold"
                  : "group inline-block"
              }
              href="/portfolio"
            >
              Portfolio ( )
              <div
                className={
                  currentPath === "/portfolio"
                    ? "text-white font-semibold bg-underline w-[50%] h-[0.125rem]"
                    : "bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"
                }
              ></div>
            </Link>
            <Link
              className={
                currentPath === "/contact"
                  ? "group inline-block text-white font-semibold"
                  : "group inline-block"
              }
              href="/contact"
            >
              Contact ( )
              <div
                className={
                  currentPath === "/contact"
                    ? "text-white font-semibold bg-underline w-[50%] h-[0.125rem]"
                    : "bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"
                }
              ></div>
            </Link>
          </ul>
        </div>
        <div
          className="lg:hidden lg:w-0 cursor-pointer place-content-center text-right w-full pr-4"
          onClick={handleNav}
        >
          <button>
            <Image
              alt="burger"
              className="invert mt-2"
              src={Burger}
              width={20}
            />
          </button>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-black p-10 ease-in duration-500 z-20"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="w-full">
          <div className="flex">
            <div className="w-2/3">
              <Link className="text-2xl font-black" href="/">
                Nard Sarroca
              </Link>
            </div>
            <div onClick={handleNav} className="w-1/3 cursor-pointer">
              <Image
                alt="close"
                className="invert mt-2"
                src={Close}
                width={20}
              />
            </div>
          </div>
          <div className="py-2">
            <div className="pr-10 lg:pr-20 font-medium text-paragraph text-[16px] place-content-center">
              <p className=" text-lg">Site Map</p>
              <ul className="text-paragraph text-left flex-wrap space-y-6 py-8">
                <Link
                  className={
                    currentPath === "/"
                      ? "group inline-block text-white font-semibold w-full"
                      : "group inline-block w-full"
                  }
                  href="/"
                >
                  Home ( )
                  <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[15%] transition-all duration-500"></div>
                </Link>
                <Link
                  className={
                    currentPath === "/about"
                      ? "group inline-block text-white font-semibold w-full"
                      : "group inline-block w-full"
                  }
                  href="/about"
                >
                  About ( )
                  <div
                    className={
                      currentPath === "/about"
                        ? "text-white font-semibold bg-underline w-[15%] h-[0.125rem]"
                        : "bg-underline h-[0.125rem] w-0 group-hover:w-[15%] transition-all duration-500"
                    }
                  ></div>
                </Link>
                <Link
                  className={
                    currentPath === "/portfolio"
                      ? "group inline-block text-white font-semibold w-full"
                      : "group inline-block w-full"
                  }
                  href="/portfolio"
                >
                  Portfolio ( )
                  <div
                    className={
                      currentPath === "/portfolio"
                        ? "text-white font-semibold bg-underline w-[15%] h-[0.125rem]"
                        : "bg-underline h-[0.125rem] w-0 group-hover:w-[15%] transition-all duration-500"
                    }
                  ></div>
                </Link>
                <Link
                  className={
                    currentPath === "/contact"
                      ? "group inline-block text-white font-semibold w-full"
                      : "group inline-block w-full"
                  }
                  href="/contact"
                >
                  Contact ( )
                  <div
                    className={
                      currentPath === "/contact"
                        ? "text-white font-semibold bg-underline w-[15%] h-[0.125rem]"
                        : "bg-underline h-[0.125rem] w-0 group-hover:w-[15%] transition-all duration-500"
                    }
                  ></div>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex gap-6 place-content-center lg:place-content-start">
              <Link
                className="bg-black hover:invert hover:duration-500 rounded-full p-3"
                href="https://www.facebook.com/bernarddddd"
                target="_blank"
              >
                <Image
                  loading="lazy"
                  src={Facebook}
                  alt="Facebook"
                  width={25}
                />
              </Link>
              <Link
                className="bg-black hover:invert hover:duration-500 rounded-full p-3"
                href="https://www.instagram.com/i.am.nards/"
                target="_blank"
              >
                <Image
                  loading="lazy"
                  src={Instagram}
                  alt="Instagram"
                  width={25}
                />
              </Link>
              <Link
                className="bg-black hover:invert hover:duration-500 rounded-full p-3"
                href="https://github.com/iamnards"
                target="_blank"
              >
                <Image loading="lazy" src={GitHub} alt="GitHub" width={25} />
              </Link>
              <Link
                className="bg-black hover:invert hover:duration-500 rounded-full p-3"
                href="https://www.linkedin.com/in/nard-sarroca-9b360131a/"
                target="_blank"
              >
                <Image
                  loading="lazy"
                  src={LinkedIn}
                  alt="LinkedIn"
                  width={25}
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
