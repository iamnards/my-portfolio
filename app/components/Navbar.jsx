"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white flex bg-black py-6">
      <div className="pl-20 w-1/2 place-content-center">
        <Link className="text-4xl font-black" href="/">
          Nard Sarroca
        </Link>
      </div>
      <div className="pr-20 w-1/2 font-medium text-end text-paragraph text-[16px] place-content-center">
        <ul className="text-paragraph space-x-8">
          <Link className="group hover:text-white inline-block" href="/">
            Home ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
          <Link className="group hover:text-white inline-block" href="/about">
            About ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
          <Link
            className="group hover:text-white inline-block"
            href="/portfolio"
          >
            Portfolio ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
          <Link className="group hover:text-white inline-block" href="/contact">
            Contact ( )
            <div className="bg-underline h-[0.125rem] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
