'use client'

import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import { useState } from 'react';

const Footer = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'dataProtection' | 'cloudSolutions' | 'encryption' | null>(null);

  const handleModal = (content: 'privacy' | 'dataProtection' | 'cloudSolutions' | 'encryption') => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="bg-white rounded-lg shadow bg-gradient-to-r from-[#02674F] to-[#00693b] m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between lg:ml-10">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image src={logo} alt="Logo BlockCode" width={200} height={200} />
            </a>
            <ul className="flex lg:mr-5 flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <button onClick={() => handleModal('privacy')} className="hover:underline me-4 md:me-6">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={() => handleModal('dataProtection')} className="hover:underline me-4 md:me-6">
                  Política de Proteção de Dados - LGPD
                </button>
              </li>
              <li>
                <button onClick={() => handleModal('cloudSolutions')} className="hover:underline me-4 md:me-6">
                  Soluções em Nuvem
                </button>
              </li>
              <li>
                <button onClick={() => handleModal('encryption')} className="hover:underline">
                  Criptografia
                </button>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200/10 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center font-semibold">
            © 2024 <a href="#" className="hover:underline">BlockCode</a>. Todos os direitos reservados. <br /> 
            CNPJ: 56.057.743/0001-52 - Razão Social: BLOCK CODE DESENVOLVIMENTO DE SISTEMAS LTDA.
          </span>
        </div>
      </footer>

      {/* Modals */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button className="absolute top-2 right-2 text-gray-700" onClick={closeModal}>&times;</button>
            {modalContent === 'privacy' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-500">Política de Privacidade</h2>
                <p className='text-gray-500'>
                  A BlockCode valoriza a privacidade e proteção dos dados pessoais de seus usuários. Coletamos apenas as informações necessárias para fornecer nossos serviços e melhorar a experiência do usuário. Os dados são utilizados de forma transparente, com base legal, e não são compartilhados com terceiros sem consentimento, salvo obrigações legais. Implementamos medidas de segurança robustas para proteger esses dados em nossos servidores.
                </p>
              </div>
            )}
            {modalContent === 'dataProtection' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-500">Política de Proteção de Dados - LGPD</h2>
                <p className='text-gray-500'>
                  Em conformidade com a LGPD, a BlockCode assegura que todos os dados pessoais tratados em nossas plataformas são protegidos e manipulados com segurança. Garantimos transparência no uso dos dados, permitindo ao titular o controle sobre suas informações, incluindo o direito de acesso, correção e exclusão. Nossa política reflete nosso compromisso com a privacidade e a segurança.
                </p>
              </div>
            )}
            {modalContent === 'cloudSolutions' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-500">Soluções em Nuvem</h2>
                <p className='text-gray-500'>
                  A BlockCode utiliza a infraestrutura da AWS (Amazon Web Services), líder em soluções de computação em nuvem, para garantir alta disponibilidade, segurança e escalabilidade dos sistemas que desenvolvemos. Essa escolha permite que nossos serviços sejam robustos e estejam em conformidade com as melhores práticas de segurança e eficiência.
                </p>
              </div>
            )}
            {modalContent === 'encryption' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-500">Criptografia</h2>
                <p className='text-gray-500'>
                  A segurança dos dados é primordial na BlockCode. Utilizamos criptografia AES-256, um dos padrões mais seguros, para proteger os dados tanto em repouso quanto em trânsito. Isso garante que as informações sensíveis de nossos clientes estejam sempre protegidas contra acessos não autorizados.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
