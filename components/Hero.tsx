
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden bg-gray-950 py-16 md:py-24">
      {/* Dark Professional Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black"></div>

      <div className="container mx-auto px-4 z-10 text-center max-w-5xl">
        {/* Logo superior centralizada */}
        <div className="flex justify-center mb-8 animate-fadeIn">
          <img 
            src="https://i.ibb.co/wZDcdHnD/1.png" 
            alt="Logo DBV Nova Era" 
            className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight uppercase drop-shadow-2xl tracking-tighter">
          Instrutor, pare de perder horas no Google procurando imagens ruins!
        </h1>

        {/* Hero Image / Mockup */}
        <div className="relative mb-10 group max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://i.ibb.co/S49Vkrd6/Pronto.jpg" 
              alt="Pronto para imprimir e usar - Kits Visuais DBV" 
              className="w-full h-auto transform transition duration-500"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-10 font-light leading-relaxed text-gray-300 drop-shadow-lg max-w-3xl mx-auto">
          Tenha em mãos todo o material visual de <span className="text-yellow-400 font-bold">alta qualidade</span> para os requisitos das Classes Regulares e Avançadas. <span className="underline decoration-yellow-400 font-medium">Pronto para imprimir e usar.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('oferta')}
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-full font-black text-lg md:text-xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.3)] uppercase tracking-tight cursor-pointer"
          >
            Quero as imagens de todas as classes
          </button>
          <button 
            onClick={() => scrollToSection('vitrine')}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all uppercase tracking-tight cursor-pointer"
          >
            Quero as imagens das classes separadas
          </button>
        </div>

        {/* Trust Indicator */}
        <p className="mt-8 text-gray-500 text-sm font-bold uppercase tracking-widest animate-pulse">
          ⚡ ACESSO IMEDIATO APÓS O PAGAMENTO
        </p>
      </div>
    </section>
  );
};

export default Hero;
