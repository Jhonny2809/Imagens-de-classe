
import React from 'react';
import { BUNDLE_CHECKOUT_URL } from '../constants';

const BundleOffer: React.FC = () => {
  // Função para anexar os parâmetros da URL atual (UTMs) ao link de checkout
  const getFinalCheckoutUrl = (baseUrl: string): string => {
    if (typeof window === 'undefined') return baseUrl;
    const currentParams = window.location.search;
    if (!currentParams) return baseUrl;
    
    // Remove o '?' inicial se existir
    const cleanParams = currentParams.startsWith('?') ? currentParams.substring(1) : currentParams;
    // Verifica se a URL base já possui parâmetros para usar & ou ?
    const separator = baseUrl.includes('?') ? '&' : '?';
    
    return `${baseUrl}${separator}${cleanParams}`;
  };

  const finalUrl = getFinalCheckoutUrl(BUNDLE_CHECKOUT_URL);

  return (
    <section id="oferta" className="py-20 scroll-mt-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="gradient-gold p-1 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="bg-white p-8 md:p-16 rounded-[2.2rem] text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-black text-lg shadow-lg">
              MAIS VENDIDO 🚀
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-800 uppercase tracking-tighter leading-tight">
              PROMOÇÃO ESPECIAL: LEVE TUDO + BÔNUS!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Garanta a biblioteca visual completa e receba materiais exclusivos de mestrado para elevar o nível do seu clube.
            </p>

            {/* Main Features Badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
              {['Acesso Imediato', 'Alta Resolução', 'Vitalício', '6 PDFs Completos'].map((badge, i) => (
                <div key={i} className="bg-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-bold text-gray-700 text-[10px] md:text-sm">
                  ✅ {badge}
                </div>
              ))}
            </div>

            {/* Exclusive Bonuses Section */}
            <div className="bg-yellow-50 border-2 border-dashed border-yellow-400 rounded-3xl p-5 md:p-6 mb-10">
              <h3 className="text-yellow-800 font-black text-sm md:text-lg uppercase mb-4 tracking-widest flex items-center justify-center gap-2">
                🎁 BÔNUS EXCLUSIVOS INCLUÍDOS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {[
                  { 
                    title: "Mestrado em Zoologia", 
                    desc: "Especialidades com Power Point, provas e gabaritos. Tudo 100% editável." 
                  },
                  { 
                    title: "Mestrado em Botânica", 
                    desc: "Especialidades com Power Point, provas e gabaritos. Tudo 100% editável." 
                  },
                  { 
                    title: "Certificado de Conclusão", 
                    desc: "Arte exclusiva para as 6 classes regulares e avançadas." 
                  }
                ].map((bonus, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100 h-full flex flex-col">
                    <p className="font-black text-gray-900 text-xs md:text-sm mb-1 uppercase tracking-tight">{bonus.title}</p>
                    <p className="text-[10px] md:text-xs text-gray-600 leading-tight flex-grow">{bonus.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center mb-10">
              <span className="text-gray-400 line-through text-lg md:text-xl">Preço total: R$ 65,40</span>
              <div className="flex flex-col items-center">
                <span className="text-gray-600 font-bold text-sm md:text-base">HOJE NO PACOTE COMPLETO:</span>
                <span className="text-6xl md:text-8xl font-black text-orange-600 drop-shadow-sm tracking-tighter">R$ 34,90</span>
                <span className="text-green-600 font-bold mt-2 text-sm md:text-base">Isso dá menos de R$ 6,00 por classe!</span>
              </div>
            </div>

            <a 
              href={finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 text-white px-6 py-4 md:px-12 md:py-6 rounded-2xl font-black text-lg sm:text-xl md:text-3xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl flex items-center justify-center gap-4 mx-auto uppercase tracking-tight"
            >
              Quero o Pacote Completo Agora
            </a>
            
            <p className="mt-6 text-gray-500 flex items-center justify-center gap-2 text-[10px] md:text-sm font-medium">
              <span className="text-lg md:text-xl">🔒</span> Pagamento 100% Seguro e Entrega Instantânea via E-mail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
