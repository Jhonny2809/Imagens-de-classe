
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ClassCard from './components/ClassCard';
import BundleOffer from './components/BundleOffer';
import FAQ from './components/FAQ';
import UpsellPopup from './components/UpsellPopup';
import ShowcaseCarousel from './components/ShowcaseCarousel';
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

  const handleKitSelect = (kit: ClassKit) => {
    setUpsell({
      isOpen: true,
      selectedKit: kit
    });
  };

  const handleUpsellAccept = () => {
    // Repasse de UTM para o checkout de R$ 19,90
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

        <ShowcaseCarousel />

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
