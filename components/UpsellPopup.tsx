
import React, { useState, useEffect } from 'react';
import { ClassKit } from '../types';

interface UpsellPopupProps {
  selectedKit: ClassKit;
  onAccept: () => void;
  onReject: () => void;
}

const UpsellPopup: React.FC<UpsellPopupProps> = ({ selectedKit, onAccept, onReject }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop com desfoque profundo */}
      <div 
        className="fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-opacity" 
        onClick={onReject}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col max-h-[95vh] animate-scaleUp overflow-hidden border border-white/20">
        
        {/* Top Progress/Timer Bar */}
        <div className="bg-gray-100 h-1.5 w-full shrink-0">
          <div 
            className="h-full bg-orange-500 transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / 120) * 100}%` }}
          ></div>
        </div>

        {/* Header - Urgency */}
        <div className="bg-black py-2.5 px-6 flex justify-between items-center shrink-0">
          <span className="flex items-center gap-2 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.15em]">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Oferta de Tempo Limitado
          </span>
          <div className="bg-orange-600 text-white px-2.5 py-0.5 rounded-full font-mono font-bold text-[10px] sm:text-xs">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 flex-grow scrollbar-hide">
          {/* Headline */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight uppercase tracking-tighter mb-3 sm:mb-4">
              ESPERE! <br className="sm:hidden"/>
              <span className="text-orange-600">SÉRIO MESMO?</span>
            </h2>
            <p className="text-gray-500 font-medium text-sm sm:text-base leading-tight">
              Você vai levar apenas 1 classe quando pode ter <span className="text-gray-900 font-bold underline decoration-orange-500 decoration-2 italic">TUDO + BÔNUS EXCLUSIVOS</span>?
            </p>
          </div>

          {/* Comparison Card (UPSELL Choice) */}
          <div className="mb-6 sm:mb-8">
            <div className="relative p-5 sm:p-6 rounded-[2.5rem] border-2 border-orange-500 bg-orange-50 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-black uppercase px-4 py-1.5 rounded-b-2xl shadow-sm tracking-widest">
                UPGRADE PREMIUM
              </div>
              
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30">📚</div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">VOCÊ RECEBE:</p>
                    <p className="text-lg font-black text-gray-900 leading-tight">Biblioteca das 6 Classes</p>
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold text-gray-400 line-through">R$ 65,40</p>
                   <p className="text-2xl font-black text-orange-600 tracking-tighter">R$ 34,90</p>
                </div>
              </div>

              {/* Bonus List in Popup */}
              <div className="bg-white/60 rounded-2xl p-3 border border-orange-200">
                <p className="text-[10px] font-black text-orange-800 uppercase mb-2 tracking-tighter">🎁 BÔNUS (PPT + PROVAS 100% EDITÁVEIS):</p>
                <ul className="grid grid-cols-1 gap-1.5">
                  {['Mestrado em Zoologia (Editável)', 'Mestrado em Botânica (Editável)', 'Certificado das 6 Classes'].map((bonus, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-700">
                      <span className="text-orange-500">★</span> {bonus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 sm:space-y-4">
            <button 
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white py-5 sm:py-6 rounded-2xl font-black text-base sm:text-xl shadow-[0_15px_30px_-5px_rgba(234,88,12,0.5)] transition-all transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-tight flex flex-col items-center group"
            >
              <span className="group-hover:translate-x-1 transition-transform">ADICIONAR TUDO + BÔNUS POR R$ 34,90</span>
              <span className="text-[10px] sm:text-[11px] opacity-90 font-bold mt-1 tracking-widest uppercase">Garantir Oferta Única</span>
            </button>
            
            <button 
              onClick={onReject}
              className="w-full text-gray-400 hover:text-gray-600 font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] transition-colors py-2"
            >
              Não, quero pagar R$ 10,90 por classe (Sem Bônus)
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50/80 p-4 sm:p-5 flex justify-center gap-4 sm:gap-8 border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="text-base">💳</span>
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tighter text-gray-600">Seguro</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="text-base">⚡</span>
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tighter text-gray-600">Imediato</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="text-base">🛡️</span>
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tighter text-gray-600">Garantia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellPopup;
