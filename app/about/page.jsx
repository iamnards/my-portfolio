"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Side from "../components/4_bw1.webp";
import Link from "next/link";
import CountUp from "react-countup";

export default function About() {
  return (
    <main className="h-full">
      <Navbar />
      <section className="flex-wrap bg-wall mt-5 mx-16 py-4 px-8 z-10">
        <div className="flex-wrap z-10">
          <div className="flex z-10">
            <h1 className="text-paragraph text-sm font-medium tracking-[2px] pr-3 ">
              ABOUT
            </h1>
            <div className="bg-underline h-[0.07rem] w-[9%] mt-[10px]"></div>
          </div>
          <div className="z-10">
            <h2 className="text-white text-[34px] font-extrabold">
              LEARN MORE ABOUT ME
            </h2>
          </div>
        </div>
        <div className="z-10 flex py-6">
          <div className="w-[32%]">
            <Image
              className="z-100 m-auto"
              src={Side}
              alt="Facebook"
              width={350}
            />
          </div>
          <div className="w-[68%]">
            <h1 className="text-underline text-2xl font-bold py-1">
              Web Developer & Unity Game Dev
            </h1>
            <p className="text-white italic py-1">
              Hi, I'm <span className="font-bold">Nard Sarroca</span>! I like
              exploring places, playing games, and working out. Usually, I sit
              on my desk writing codes and programs while drinking my cold
              coffee.
            </p>
            <div className="py-2 flex">
              <div className=" w-1/2 py-2 space-y-6 pb-4">
                <div className="flex">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">Birthday:</p>
                  <p className="text-white">February 02, 2002{"\n"}</p>
                </div>
                <div className="flex">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">Sex:</p>
                  <p className="text-white">Male</p>
                </div>
                <div className="flex">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">
                    Educational Attainment:
                  </p>
                  <p className="text-white">College Graduate</p>
                </div>
                <div className="flex">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">Nationality:</p>
                  <p className="text-white">Filipino</p>
                </div>
              </div>
              <div className="w-1/2 py-2 space-y-6">
                <div className="flex">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">Age:</p>
                  <p className="text-white">22</p>
                </div>
                <div className="flex">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">Location:</p>
                  <p className="text-white">Manila</p>
                </div>
                <div className="flex group">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">Email:</p>
                  <Link
                    href="mailto:nardsarroca02@gmail.com"
                    className="text-white group-hover:text-underline duration-500"
                  >
                    nardsarroca02@gmail.com
                  </Link>
                </div>
                <div className="flex">
                  <p className="text-underline px-2">{"►"}</p>
                  <p className="text-white font-bold pr-2">Religion:</p>
                  <p className="text-white">Catholic</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-white">
                A dedicated Computer Science graduate with hands-on experience
                in website development. Analytical and detail-oriented, I have
                successfully built two project-based websites. I possess
                expertise in Python, Java, C++, and C# programming languages.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex z-10 py-4">
            <h1 className="text-paragraph text-sm font-medium tracking-[2px] pr-3 ">
              SKILLS
            </h1>
            <div className="bg-underline h-[0.07rem] w-[9%] mt-[10px]"></div>
          </div>
          <div className="py-2 flex space-x-6">
            <div className="text-xs text-white font-bold w-1/2 space-y-6">
              <div className="space-y-2">
                <div className="w-full flex">
                  <h2 className="w-1/2">PYTHON</h2>
                  <CountUp end={75} duration={4} className="w-1/2 text-end" />%
                </div>
                <div className="progress bg-[#181818]">
                  <div className="h-[10px] w-[75%] bg-underline left-right transition-all duration-500"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full flex">
                  <h2 className="w-1/2">JAVA</h2>
                  <CountUp end={82} duration={4} className="w-1/2 text-end" />%
                </div>
                <div className="progress bg-[#181818]">
                  <div className="h-[10px] w-[82%] bg-underline left-right transition-all duration-500"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full flex">
                  <h2 className="w-1/2">C++</h2>
                  <CountUp end={80} duration={4} className="w-1/2 text-end" />%
                </div>
                <div className="progress bg-[#181818]">
                  <div className="h-[10px] w-[80%] bg-underline left-right transition-all duration-500"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full flex">
                  <h2 className="w-1/2">WORDPRESS</h2>
                  <CountUp end={97} duration={4} className="w-1/2 text-end" />%
                </div>
                <div className="progress bg-[#181818]">
                  <div className="h-[10px] w-[97%] bg-underline left-right transition-all duration-500"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full flex">
                  <h2 className="w-1/2">MARIDB</h2>
                  <CountUp end={85} duration={4} className="w-1/2 text-end" />%
                </div>
                <div className="progress bg-[#181818]">
                  <div className="h-[10px] w-[85%] bg-underline left-right transition-all duration-500"></div>
                </div>
              </div>
            </div>
            <div className="text-xs text-white font-bold w-1/2 space-y-6">
              <div className="text-xs text-white font-bold space-y-6">
                <div className="space-y-2">
                  <div className="w-full flex">
                    <h2 className="w-1/2">C#</h2>
                    <CountUp end={78} duration={4} className="w-1/2 text-end" />%
                  </div>
                  <div className="progress bg-[#181818]">
                    <div className="h-[10px] w-[78%] bg-underline left-right transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex">
                    <h2 className="w-1/2">PHP</h2>
                    <CountUp end={72} duration={4} className="w-1/2 text-end" />%
                  </div>
                  <div className="progress bg-[#181818]">
                    <div className="h-[10px] w-[72%] bg-underline left-right transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex">
                    <h2 className="w-1/2">REACT</h2>
                    <CountUp end={74} duration={4} className="w-1/2 text-end" />%
                  </div>
                  <div className="progress bg-[#181818]">
                    <div className="h-[10px] w-[74%] bg-underline left-right transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex">
                    <h2 className="w-1/2">NEXTJS</h2>
                    <CountUp end={86} duration={4} className="w-1/2 text-end" />%
                  </div>
                  <div className="progress bg-[#181818]">
                    <div className="h-[10px] w-[86%] bg-underline left-right transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex">
                    <h2 className="w-1/2">MONGODB</h2>
                    <CountUp end={83} duration={4} className="w-1/2 text-end" />%
                  </div>
                  <div className="progress bg-[#181818]">
                    <div className="h-[10px] w-[83%] bg-underline left-right transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
