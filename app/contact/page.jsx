import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="h-full">
      <Navbar />
      <section className="bg-wall mt-5 lg:mx-16 py-36 lg:py-60 px-8 z-10 boot">
        <div className="">
          <h1 className="text-4xl lg:text-5xl text-white font-bold text-center py-3 leading-[52px] md:leading-0">
            Let&apos;s <span className="bg-underline rounded-md px-2 py-1">Start Collaborating</span> Together!
          </h1>
          <p className="text-xl text-paragraph font-medium text-center py-1">
            You can contact me by clicking this button
          </p>
          <div className="w-[100%] text-center py-6">
          <Link
            href="mailto:nardsarroca02@gmail.com"
            className="px-5 py-[10px] rounded bg-underline text-white font-medium hover:text-black hover:bg-white duration-300"
          >
            Send an Email
          </Link>
          </div>
        </div>
        <div></div>
      </section>
      <Footer />
    </main>
  );
}
