"use client"
import Link from "next/link";
import Image from "next/image";
import Facebook from "./components/facebook.png";
import Instagram from "./components/instagram.png";
import GitHub from "./components/github.png";
import LinkedIn from "./components/linkedin.png";
import Profile from "./components/2_bw_png.webp";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <header className="h-screen w-screen flex">
      <div className="w-1/2 place-content-center px-20 z-10">
        <h2 className="text-white text-5xl font-extrabold py-2">
          Nard Sarroca
        </h2>
        <p className="text-paragraph text-2xl py-2">
          I'm a <TypeAnimation className="text-white"
          sequence={[
            "gradute of BS in Computer Science.",
            1200,
            "Programmer.",
            900,
            "Web Developer.",
            900,
            "Musician.",
            900
          ]}
          repeat={Infinity}
          />
        </p>
        <ul className="text-paragraph space-x-8 py-4">
          <Link className="text-white inline-block" href="/">
            Home ( )
            <div className="bg-underline h-[0.125rem] w-[50%] transition-all duration-500"></div>
          </Link>
          <Link className="group hover:text-white inline-block" href="/about">
            About ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
          <Link className="group hover:text-white inline-block" href="/portfolio">
            Portfolio ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
          <Link className="group hover:text-white inline-block" href="/contact">
            Contact ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
        </ul>
        <ul className="flex gap-6">
          <Link
            className="bg-black hover:invert hover:duration-500 rounded-full p-3"
            href="https://www.facebook.com/bernarddddd"
            target="_blank"
          >
            <Image src={Facebook} alt="Facebook" width={25} />
          </Link>
          <Link
            className="bg-black hover:invert hover:duration-500 rounded-full p-3"
            href="https://www.instagram.com/i.am.nards/"
            target="_blank"
          >
            <Image src={Instagram} alt="Instagram" width={25} />
          </Link>
          <Link
            className="bg-black hover:invert hover:duration-500 rounded-full p-3"
            href="https://github.com/iamnards"
            target="_blank"
          >
            <Image src={GitHub} alt="GitHub" width={25} />
          </Link>
          <Link
            className="bg-black hover:invert hover:duration-500 rounded-full p-3"
            href="https://www.linkedin.com/in/nard-sarroca-9b360131a/"
            target="_blank"
          >
            <Image src={LinkedIn} alt="LinkedIn" width={25} />
          </Link>
        </ul>
      </div>
      <div className="w-1/2 z-10">
        <Image
          className="size-full object-contain rounded-xl"
          src={Profile}
          alt="Pic"
        />
      </div>
    </header>
  );
}
