"use client"

import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Importando o ScrollToPlugin
import icon1 from '../assets/icons-sobre/icon1.png';
import icon2 from '../assets/icons-sobre/icon2.png';
import icon3 from '../assets/icons-sobre/icon3.png';

gsap.registerPlugin(ScrollToPlugin); // Registrando o plugin

const Sobre = () => {

  const handleScroll = () => {
    const nextSection = document.querySelector("#next-section") as HTMLElement;
    if (nextSection) {
      gsap.to(window, { scrollTo: { y: nextSection.offsetTop }, duration: 1.5, ease: "power3.out" });
    }
  };

  return (
    <main id="sobre" className="pt-[120px] pb-[40px] text-white">
      <div className="container mx-auto px-4">
        {/* Barra Degradê */}
        <div className="flex justify-center mb-6">
          <div className="w-[90px] h-[6px] rounded-sm bg-gradient-to-r from-[#02674F] to-[#04DC80]"></div>
        </div>

        <h1 className="text-[36px] lg:text-[48px] font-light text-center mb-10">
          Sobre a BlockCode!
        </h1>
        
        <div className="flex flex-col lg:mr-5 lg:flex-row lg:justify-between lg:items-start text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:w-1/3 mb-10 lg:mb-0">
            <div className="p-4 rounded-md mb-4 lg:mb-0 lg:mr-[5px]">
              <Image src={icon1} alt="Segurança e Confiabilidade" width={200} height={200} />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold mb-2">Segurança e Confiabilidade</h2>
              <p className="text-[13px] leading-[24px] text-[#818492]">
                Nosso sistema foi desenvolvido com as mais recentes tecnologias de segurança. Garantimos a proteção total das suas informações, com criptografia avançada e monitoramento contínuo.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:w-1/3 mb-10 lg:mb-0">
            <div className="p-4 rounded-md mb-4 lg:mb-0 lg:mr-[5px]">
              <Image src={icon2} alt="Facilidade de Uso" width={200} height={70} />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold mb-2">Facilidade de Uso</h2>
              <p className="text-[13px] leading-[24px] text-[#818492]">
                Oferecemos uma interface intuitiva e simplificada, permitindo que você realize suas atividades com rapidez e eficiência, independentemente do seu nível de experiência.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:w-1/3">
            <div className="p-4 rounded-md mb-4 lg:mb-0 lg:mr-[5px]">
              <Image src={icon3} alt="Suporte de Qualidade" width={200} height={70} />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold mb-2">Suporte de Qualidade</h2>
              <p className="text-[13px] leading-[24px] text-[#818492]">
                Nossa equipe de suporte dedicada está sempre ao seu lado, oferecendo assistência especializada a qualquer momento, garantindo a continuidade e eficiência das suas operações.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <p className="text-white font-bold mb-2">VEJA MAIS</p> {/* Texto "VEJA MAIS" */}

        <div className="relative">
            {/* Linha Degradê */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120%] h-[2px] bg-gradient-to-r from-[#02674F] to-[#04DC80]"></div>
            </div>

            {/* Botão Chevron */}
            <button 
              onClick={handleScroll}  // Adiciona o evento de clique personalizado
              className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#02674F] to-[#04DC80] text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <ChevronDown size={32} />
            </button>
        </div>
      </div>
    </main>
  );
}

export default Sobre;
