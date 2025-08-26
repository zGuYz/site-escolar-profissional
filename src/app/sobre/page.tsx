import React from 'react';
import Link from 'next/link';

const SobrePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre o Projeto
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça mais sobre este site escolar e seus objetivos educacionais
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Project Description */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 text-xl">🎯</span>
              </span>
              Objetivo do Projeto
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Este site foi desenvolvido como uma plataforma educacional moderna e profissional, 
              especialmente criada para apoiar trabalhos escolares e projetos acadêmicos. 
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              O objetivo principal é fornecer um espaço organizado onde estudantes possam 
              apresentar informações através de banners visuais, compartilhar links úteis 
              e criar uma experiência digital atrativa para seus projetos.
            </p>
          </section>

          {/* Features */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-green-600 text-xl">⚡</span>
              </span>
              Características Principais
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Design Responsivo</h3>
                  <p className="text-gray-600 text-sm">Funciona perfeitamente em computadores, tablets e celulares</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Interface Moderna</h3>
                  <p className="text-gray-600 text-sm">Visual limpo e profissional com cores harmoniosas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Navegação Intuitiva</h3>
                  <p className="text-gray-600 text-sm">Menu simples e fácil de usar para todos os usuários</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Conteúdo Organizado</h3>
                  <p className="text-gray-600 text-sm">Informações bem estruturadas e fáceis de encontrar</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-purple-600 text-xl">🛠️</span>
              </span>
              Tecnologias Utilizadas
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚛️</div>
                <h3 className="font-semibold text-gray-800">Next.js</h3>
                <p className="text-gray-600 text-sm">Framework React moderno</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold text-gray-800">Tailwind CSS</h3>
                <p className="text-gray-600 text-sm">Estilização responsiva</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📝</div>
                <h3 className="font-semibold text-gray-800">TypeScript</h3>
                <p className="text-gray-600 text-sm">Código mais seguro</p>
              </div>
            </div>
          </section>

          {/* Contact/Action */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore todas as funcionalidades do site e descubra como ele pode 
              ajudar em seus trabalhos escolares e projetos acadêmicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/banners" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Ver Banners
              </Link>
              <Link 
                href="/" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Voltar ao Início
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SobrePage;
