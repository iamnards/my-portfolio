import React from 'react'
import Navbar from '../components/Navbar'

export default function Portfolio() {
  return (
    <main className="h-screen w-screen">
      <Navbar />
      <section className="flex-wrap bg-wall mt-5 mx-16 py-4 px-8 z-10">
      <div className="flex-wrap z-10">
          <div className="flex z-10">
            <h1 className="text-paragraph text-sm font-medium tracking-[2px] pr-3 ">
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

        </div>
      </section>
    </main>
  )
}
