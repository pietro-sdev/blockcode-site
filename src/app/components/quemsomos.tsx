"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import sistemas from '../assets/Ativo 2.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QuemSomos = () => {

  useEffect(() => {
    gsap.fromTo(
      ".animate-text span",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animate-text",
          start: "top 80%",  // Quando o topo da seção chega a 80% da altura da viewport
          end: "bottom 20%",  // Quando o fundo da seção chega a 20% da altura da viewport
          toggleActions: "play none none none",  // Inicia a animação quando o gatilho é ativado
        }
      }
    );
  }, []);

  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Imagem na Esquerda */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-start rounded-lg">
          <Image className="rounded-3xl" src={sistemas} alt="Sistemas" width={800} height={800} />
        </div>

        {/* Texto da empresa à Direita */}
        <div className="lg:w-1/2 lg:pl-10 animate-text">
          {/* Barra Degradê */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="w-[90px] h-[6px] rounded-sm bg-gradient-to-r from-[#02674F] to-[#04DC80]"></div>
          </div>

          <h2 className="text-[32px] lg:text-[40px] font-light mb-4">
            <span>Quem Somos?</span>
          </h2>
          <p className="text-[24px] lg:text-[24px] leading-relaxed mb-4">
            <span>A <span className="font-semibold text-white">BlockCode</span> é uma empresa de tecnologia focada em oferecer soluções personalizadas para transformar ideias em realidade. 
            Com uma equipe dedicada e expertise em diversas áreas, estamos comprometidos em entregar produtos inovadores e de alta qualidade.</span>
          </p>
          <p className="text-[18px] lg:text-[25px] font-light">
            <span>Nossa missão é <span className="text-green-500">impulsionar o sucesso</span> dos nossos clientes por meio de soluções tecnológicas eficientes e criativas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
