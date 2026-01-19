
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ClassCard from './components/ClassCard';
import BundleOffer from './components/BundleOffer';
import FAQ from './components/FAQ';
import UpsellPopup from './components/UpsellPopup';
import { CLASSES, UPSELL_CHECKOUT_URL } from './constants';
import { ClassKit, UpsellState } from './types';

const App: React.FC = () => {
  const logoUrl = "https://i.ibb.co/wZDcdHnD/1.png";
  
  const [upsell, setUpsell] = useState<UpsellState>({
    isOpen: false,
    selectedKit: null
  });

  // Função robusta para anexar UTMs da URL atual ao link de destino
  const appendCurrentParams = (baseUrl: string): string => {
    if (typeof window === 'undefined') return baseUrl;
    const currentParams = window.location.search;
    if (!currentParams) return baseUrl;
    
    // Remove o '?' inicial se existir
    const cleanParams = currentParams.startsWith('?') ? currentParams.substring(1) : currentParams;
    // Verifica se a URL base já possui parâmetros para usar & ou ?
    const separator = baseUrl.includes('?') ? '&' : '?';
    
    return `${baseUrl}${separator}${cleanParams}`;
  };

  // Bloquear scroll quando o popup abrir
  useEffect(() => {
    if (upsell.isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [upsell.isOpen]);

  const samples = [
    { src: 'https://i.ibb.co/jkxtQpkj/Imagens-da-Classe-de-Amigo-2026.jpg', label: 'Amostra Classe de Amigo' },
    { src: 'https://i.ibb.co/JF0n6vsF/Imagens-da-Classe-de-companheiro-2026.jpg', label: 'Amostra Classe de Companheiro' },
    { src: 'https://i.ibb.co/zVB2qm6J/Imagens-da-Classe-de-pesquisador-2026.jpg', label: 'Amostra Classe de Pesquisador' },
    { src: 'https://i.ibb.co/DfvfPp74/Imagens-da-Classe-de-Pioneiro-2026.jpg', label: 'Amostra Classe de Pioneiro' },
    { src: 'https://i.ibb.co/5hVXn7yr/Imagens-da-Classe-de-Excursionista-2026.jpg', label: 'Amostra Classe de Excursionista' },
    { src: 'https://i.ibb.co/5WtZ0bTz/Imagens-da-Classe-de-Guia-2026.jpg', label: 'Amostra Classe de Guia' },
  ];

  const handleKitSelect = (kit: ClassKit) => {
    setUpsell({
      isOpen: true,
      selectedKit: kit
    });
  };

  const handleUpsellAccept = () => {
    // Repasse de UTM para o checkout de R$ 24,90
    const finalUrl = appendCurrentParams(UPSELL_CHECKOUT_URL);
    window.open(finalUrl, '_blank');
    setUpsell({ isOpen: false, selectedKit: null });
  };

  const handleUpsellReject = () => {
    if (upsell.selectedKit) {
      // Repasse de UTM para o checkout individual de R$ 10,90
      const finalUrl = appendCurrentParams(upsell.selectedKit.checkoutUrl);
      window.open(finalUrl, '_blank');
      setUpsell({ isOpen: false, selectedKit: null });
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-yellow-200">
      <main>
        <Hero />
        
        <PainPoints />

        {/* Showcase Samples */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-yellow-600 font-black text-sm uppercase tracking-widest bg-yellow-50 px-3 py-1 rounded-full">Qualidade Premium</span>
              <h2 className="text-4xl font-black mt-4 mb-6 uppercase tracking-tighter text-gray-900">Veja a qualidade que espera por você</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Desenhos exclusivos, fotos reais e diagramação focada no aprendizado dos juvenis. Material testado e aprovado.</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {samples.map((img, i) => (
                <div 
                  key={i} 
                  className="group relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-gray-100 select-none"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img 
                    src={img.src} 
                    alt={img.label} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-transparent z-10" title="Protegido contra download"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 z-20">
                    <div className="w-full">
                      <span className="text-white font-black text-sm md:text-base uppercase tracking-tight block transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {img.label}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black rounded-full px-3 py-1 text-[10px] font-black z-20 shadow-lg border border-yellow-400">
                    AMOSTRA
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-gray-400 text-sm italic">
              * As imagens acima são amostras com qualidade reduzida para exibição web. O PDF original possui alta resolução para impressão.
            </p>
          </div>
        </section>

        <section id="vitrine" className="py-20 bg-gray-50 scroll-mt-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-tighter text-gray-900">
              Nossos Kits Individuais
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {CLASSES.map((kit) => (
                <ClassCard key={kit.id} kit={kit} onSelect={handleKitSelect} />
              ))}
            </div>
          </div>
        </section>

        <BundleOffer />
        
        <FAQ />
      </main>

      {upsell.isOpen && upsell.selectedKit && (
        <UpsellPopup 
          selectedKit={upsell.selectedKit} 
          onAccept={handleUpsellAccept}
          onReject={handleUpsellReject}
        />
      )}

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img 
              src={logoUrl} 
              alt="DBV NOVAERA Logo" 
              className="h-16 w-auto"
            />
            <span className="font-black text-2xl tracking-tighter uppercase">
              DBV NOVAERA
            </span>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Feito com dedicação para instrutores que buscam excelência no Clube de Desbravadores. 
            Nossa missão é facilitar sua instrução e inspirar seus desbravadores.
          </p>

          <div className="flex justify-center gap-6 mb-12 text-sm font-bold text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>

          <div className="border-t border-gray-800 pt-8 text-gray-600 text-xs">
            <p>Copyright © 2026 - Feito por quem ama Desbravadores para quem forma líderes.</p>
            <p className="mt-2 text-gray-700">O Clube de Desbravadores é um ministério oficial da Igreja Adventista do Sétimo Dia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
