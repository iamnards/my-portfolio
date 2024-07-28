import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Odyssey from "../components/odyssey-repo.png";
import Wingman from "../components/wingman-app-repo.png";
import DigitalKubo from "../components/digitalkubo-repo.png";

export default function Portfolio() {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <section className="flex-wrap bg-wall mt-5 mx-16 py-4 px-8 z-10">
        <div className="flex-wrap z-10">
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
        <div>
          <div className="text-white text-center space-x-4 font-bold py-6">
            <button className="px-4 py-1 rounded bg-[#181818]">ALL</button>
            <button className="px-4 py-1 rounded bg-[#181818]">WEB</button>
            <button className="px-4 py-1 rounded bg-[#181818]">3D</button>
          </div>
          <div className="flex space-x-8 py-2">
            <div className="w-1/3 rounded-lg p-4">
              <Link href="https://github.com/iamnards/Odyssey">
                <Image className="rounded-lg" src={Odyssey} />
                <p className="text-white font-bold pt-2 pb-1">Odyssey</p>
                <p className="text-paragraph">
                  A Mobile Augmented Reality Application for Interactive
                  Experience at Cavite State University Museum.
                </p>
              </Link>
            </div>
            <div className="w-1/3 rounded-lg p-4">
              <Link href="https://github.com/iamnards/WingMan-App">
                <Image className="rounded-lg" src={Wingman}/>
              </Link>
              <p className="text-white font-bold pt-2 pb-1">Wingman</p>
              <p className="text-paragraph">
                An Online Assistant Platform for CEIT Students at Cavite State
                University - Don Severino Delas Alas Campus.
              </p>
            </div>
            <div className="w-1/3 rounded-lg p-4">
              <Link href="https://github.com/iamnards/digitalkubo">
                <Image className="rounded-lg" src={DigitalKubo} />
              </Link>
              <p className="text-white font-bold pt-2 pb-1">DigitalKubo</p>
              <p className="text-paragraph">Client-Based Website from OJT.</p>
            </div>
          </div>
          <div className="flex space-x-8 py-2">

          </div>
        </div>
      </section>
    </main>
  );
}
