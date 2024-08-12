import React from 'react';
import { Monitor, Code, Rocket } from 'lucide-react';

const Sistemas = () => {
  return (
    <section id="next-section" className="py-16">
      <div className="flex justify-center mb-6">
          <div className="w-[90px] h-[6px] rounded-sm bg-gradient-to-r from-[#02674F] to-[#04DC80]"></div>
        </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12 text-white">Como Funciona?</h2>
        
        <div className="flex flex-col lg:flex-row justify-between items-center">
          
          {/* Card 1: Prototipação */}
          <div className="bg-gradient-to-r from-[#02674F] to-[#04DC80] rounded-lg shadow-lg p-6 mb-8 lg:mb-0 lg:mx-4 max-w-sm min-h-[300px]">
            <div className="bg-slate-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Prototipação</h3>
            <p className="text-black font-semibold">
              Começamos com a criação de wireframes e protótipos para visualizar a estrutura e o fluxo do sistema. Essa etapa é crucial para garantir que todos os requisitos do projeto sejam atendidos.
            </p>
          </div>

          {/* Card 2: Desenvolvimento */}
          <div className="bg-gradient-to-r from-[#02674F] to-[#04DC80] rounded-lg shadow-lg p-6 mb-8 lg:mb-0 lg:mx-4 max-w-sm min-h-[300px]">
            <div className="bg-slate-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Desenvolvimento</h3>
            <p className="text-black font-semibold">
              Nesta fase, transformamos os protótipos em um sistema funcional. Utilizamos tecnologias modernas e boas práticas de programação para garantir um código limpo e eficiente.
            </p>
          </div>

          {/* Card 3: Deploy */}
          <div className="bg-gradient-to-r from-[#02674F] to-[#04DC80] rounded-lg shadow-lg p-6 lg:mx-4 max-w-sm min-h-[300px]">
            <div className="bg-slate-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Deploy</h3>
            <p className="text-black font-semibold">
              Após a fase de testes, o sistema é preparado para o deploy. Configuramos e monitoramos a infraestrutura para garantir uma implantação suave e uma operação estável em produção.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sistemas;
