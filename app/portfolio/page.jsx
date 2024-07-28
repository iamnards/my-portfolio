import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Odyssey from "../components/odyssey-repo.png";
import Wingman from "../components/wingman-app-repo.png";
import DigitalKubo from "../components/digitalkubo-repo.png";
import Chess from "../components/chess.webp";
import Pyramid from "../components/pyramid-head.webp";
import Donut from "../components/donut.png";

export default function Portfolio() {

  return (
    <main className="h-full">
      <Navbar />
      <section className="flex-wrap bg-wall mt-5 mx-16 py-4 px-8 z-10">
        <div className="z-10 py-2">
          <div className="flex z-10">
            <h1 className="text-paragraph text-sm font-medium tracking-[2px] pr-3">
              PORTFOLIO
            </h1>
            <div className="bg-underline h-[0.07rem] w-[9%] mt-[10px]"></div>
          </div>
          <div className="z-10">
            <h2 className="text-white text-[34px] font-extrabold">
              MY WORKS AND COLLABORATIONS
            </h2>
          </div>
        </div>
        <div className="">
          <div className="text-white text-center space-x-4 font-bold py-4">
            <button className="px-5 py-[5px] rounded bg-[#181818]">ALL</button>
            <button className="px-5 py-[5px] rounded bg-[#181818]">WEB</button>
            <button className="px-5 py-[5px] rounded bg-[#181818]">3D</button>
          </div>
          <div className="flex space-x-8 py-4">
            <div className="w-1/3 rounded-lg p-4 hover:bg-[#181818] duration-50 transition-all">
              <Link href="https://github.com/iamnards/Odyssey" target="_blank">
                <Image className="rounded-lg" alt="odyssey" src={Odyssey} />
                <p className="text-white font-bold pt-4 pb-1 text-[18px]">Odyssey</p>
                <p className="text-paragraph">
                  A Mobile Augmented Reality Application for Interactive
                  Experience at Cavite State University Museum.
                </p>
              </Link>
            </div>
            <div className="w-1/3 rounded-lg p-4 hover:bg-[#181818] duration-50 transition-all">
              <Link
                href="https://github.com/iamnards/WingMan-App"
                target="_blank"
              >
                <Image className="rounded-lg" alt="wingman" src={Wingman} />
                <p className="text-white font-bold pt-4 pb-1 text-[18px]">Wingman</p>
                <p className="text-paragraph">
                  An Online Assistant Platform for CEIT Students at Cavite State
                  University - Don Severino Delas Alas Campus.
                </p>
              </Link>
            </div>
            <div className="w-1/3 rounded-lg p-4 hover:bg-[#181818] duration-50 transition-all">
              <Link
                href="https://github.com/iamnards/digitalkubo"
                target="_blank"
              >
                <Image
                  className="rounded-lg"
                  alt="digitalkubo"
                  src={DigitalKubo}
                />
                <p className="text-white font-bold pt-4 pb-1 text-[18px]">DigitalKubo</p>
                <p className="text-paragraph">Client-Based Website from OJT.</p>
              </Link>
            </div>
          </div>
          <div className="flex space-x-8 py-4">
            <div className="w-1/3 rounded-lg p-4 hover:bg-[#181818] duration-50 transition-all orig">
                <Image
                  className="rounded-lg object-cover"
                  alt="donut"
                  src={Donut}
                />
              <p className="text-white font-bold pt-4 pb-1 text-[18px]">Donut</p>
              <p className="text-paragraph">
                An animated 3D donut model, guide from Blender Guru.
              </p>
            </div>
            <div className="w-1/3 rounded-lg p-4 hover:bg-[#181818] duration-50 transition-all orig">
              <Image
                className="rounded-lg object-cover"
                alt="Pyramid"
                src={Pyramid}
              />
              <p className="text-white font-bold pt-4 pb-1 text-[18px]">Pyramid Head</p>
              <p className="text-paragraph">
                Inspired from Silent Hill 2 Pyramid Head monster, referenced on
                YouTube and rendered using Blender.
              </p>
            </div>
            <div className="w-1/3 rounded-lg p-4 hover:bg-[#181818] duration-50 transition-all">
              <Image className="rounded-lg" alt="chess" src={Chess} />
              <p className="text-white font-bold pt-4 pb-1 text-[18px]">Chess</p>
              <p className="text-paragraph">
                3D model of chess board and pieces made using Blender.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
