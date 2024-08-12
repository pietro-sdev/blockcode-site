"use client"

import React, { useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from 'next/link';  // Importando Link
import hero from '../app/assets/img-hero.png';
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".animate-text span",
      { opacity: 0, y: 300 },  // Inicialmente, o texto estará 100px abaixo e invisível
      { opacity: 50, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" }  // O texto desliza para cima e aparece
    );
  }, []);

  return (
    <main id="home" className="pt-[40px] pb-[20px]">
      <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between lg:items-center">
        <div className="w-full lg:w-1/2 lg:mb-10">
          <h1 className="text-[28px] leading-[40px] lg:leading-[60px] text-white lg:mr-16 mb-6 lg:mb-10 lg:ml-10 font-light lg:text-[42px] animate-text">
            {["Transforme a experiência", "da sua empresa com um", "sistema responsivo.", "Venha para a BlockCode!"].map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <Link href="#sobre" scroll={true}> 
          <button className="relative mx-auto lg:mx-10 px-8 py-[10px] rounded-md border-[#04DC80] border-2 text-[20px] lg:text-[25px] text-white bg-transparent overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#02674F] to-[#04DC80] opacity-0 group-hover:opacity-100 transition-opacity duration-100"></span>
            <span className="relative group-hover:animate-bounce">Saiba Mais!</span>
          </button>
          </Link>
        </div>
        <div className="flex justify-center mt-10 lg:mt-0 lg:justify-end w-full lg:w-1/2 lg:mr-[70px]">
          <Image src={hero} alt="BlockCode" width={400} height={400} />
        </div>
      </div>
    </main>
  );
}
