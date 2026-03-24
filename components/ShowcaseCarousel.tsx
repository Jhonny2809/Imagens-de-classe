import React, { useState } from 'react';

const samples = [
  { src: 'https://i.ibb.co/jkxtQpkj/Imagens-da-Classe-de-Amigo-2026.jpg', label: 'Amostra Classe de Amigo' },
  { src: 'https://i.ibb.co/JF0n6vsF/Imagens-da-Classe-de-companheiro-2026.jpg', label: 'Amostra Classe de Companheiro' },
  { src: 'https://i.ibb.co/zVB2qm6J/Imagens-da-Classe-de-pesquisador-2026.jpg', label: 'Amostra Classe de Pesquisador' },
  { src: 'https://i.ibb.co/DfvfPp74/Imagens-da-Classe-de-Pioneiro-2026.jpg', label: 'Amostra Classe de Pioneiro' },
  { src: 'https://i.ibb.co/5hVXn7yr/Imagens-da-Classe-de-Excursionista-2026.jpg', label: 'Amostra Classe de Excursionista' },
  { src: 'https://i.ibb.co/5WtZ0bTz/Imagens-da-Classe-de-Guia-2026.jpg', label: 'Amostra Classe de Guia' },
];

const ShowcaseCarousel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Duplicate the array to create a seamless infinite loop
  const carouselItems = [...samples, ...samples];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-600 font-black text-sm uppercase tracking-widest bg-yellow-50 px-3 py-1 rounded-full">Qualidade Premium</span>
          <h2 className="text-4xl font-black mt-4 mb-6 uppercase tracking-tighter text-gray-900">Veja a qualidade que espera por você</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Desenhos exclusivos, fotos reais e diagramação focada no aprendizado dos juvenis. Material testado e aprovado.</p>
          <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
            ✨ Imagens Atualizadas 2026
          </div>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {carouselItems.map((img, i) => (
            <div 
              key={i} 
              className="relative w-64 md:w-80 mx-4 rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-gray-100 select-none cursor-pointer flex-shrink-0"
              onClick={() => setSelectedImage(img.src)}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110 pointer-events-none"
                draggable="false"
              />
              <div className="absolute inset-0 bg-transparent z-10" title="Clique para ampliar"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 z-20 pointer-events-none">
                <div className="w-full">
                  <span className="text-white font-black text-sm md:text-base uppercase tracking-tight block">
                    {img.label}
                  </span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-black rounded-full px-3 py-1 text-[10px] font-black z-20 shadow-lg border border-yellow-400 pointer-events-none">
                AMOSTRA
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-10 text-gray-400 text-sm italic px-4">
        * As imagens acima são amostras com qualidade reduzida para exibição web. O PDF original possui alta resolução para impressão.
      </p>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 font-bold text-xl"
              onClick={() => setSelectedImage(null)}
            >
              Fechar (X)
            </button>
            <img 
              src={selectedImage} 
              alt="Amostra Ampliada" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowcaseCarousel;
