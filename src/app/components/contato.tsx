"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import sistemasImg from '../assets/sistemas.png';

const Contato = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
        const response = await fetch('http://localhost:5000/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            setFormData({ name: '', email: '', message: '' });
            setIsModalOpen(false);
        } else {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
        setIsSubmitting(false);
    }
};

const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
};


  const whatsappLink = "https://wa.me/5511980141941"; // Substitua pelo seu número de WhatsApp com o código do país

  return (
    <section id='contato'>
    <div className="py-16 ml-16 mr-14 text-white relative flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-light mb-4">Entre em contato com nossos consultores</h2>
        <p className="text-md mb-8 leading-[35px] text-[#818492]">
          Descubra a solução perfeita para impulsionar o sucesso do seu negócio. Nossos especialistas estão prontos para oferecer a orientação personalizada que você precisa. Não perca tempo — fale com um de nossos consultores agora e comece a transformar seu potencial em resultados concretos!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative px-6 py-[5px] rounded-md border-[#04DC80] border-2 text-[20px] text-white bg-transparent overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#02674F] to-[#04DC80] opacity-0 group-hover:opacity-100 transition-opacity duration-100"></span>
          <span className="relative group-hover:animate-bounce">Entre em Contato!</span>
        </button>
      </div>

      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end ">
        <Image className="rounded-3xl" src={sistemasImg} alt="Sistemas" width={550} height={550} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Formulário de Contato</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white text-xl justify-end">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full rounded-md bg-gray-700 border border-gray-600 text-white"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full py-2 px-4 bg-gradient-to-r from-[#02674F] to-[#04DC80] text-white rounded-md hover:from-[#04DC80] hover:to-[#02674F] transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 bg-gradient-to-r from-[#02674F] to-[#04DC80] text-white rounded-md hover:from-[#04DC80] hover:to-[#02674F] transition-colors duration-300"
              >
                Fale conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default Contato;
