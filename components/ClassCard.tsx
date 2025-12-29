
import React from 'react';
import { ClassKit } from '../types';

interface ClassCardProps {
  kit: ClassKit;
  onSelect: (kit: ClassKit) => void;
}

const ClassCard: React.FC<ClassCardProps> = ({ kit, onSelect }) => {
  return (
    <div id={kit.id} className={`flex flex-col h-full bg-white rounded-3xl shadow-lg border-2 overflow-visible transition-transform hover:-translate-y-2 relative mt-12 ${kit.borderColor} scroll-mt-24`}>
      
      {/* Circular Logo Overlap */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
        <div className={`w-24 h-24 rounded-full bg-white p-1 shadow-xl border-4 ${kit.borderColor} overflow-hidden flex items-center justify-center`}>
          <img 
            src={kit.iconUrl} 
            alt={`Logo ${kit.name}`} 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className={`${kit.color} p-8 pt-16 text-white text-center rounded-t-[1.4rem]`}>
        <h3 className="text-2xl font-black uppercase tracking-tight">{kit.name}</h3>
        <p className="text-sm opacity-90 font-medium tracking-wide">Kit Visual Completo</p>
      </div>
      
      <div className="p-8 flex-grow">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-gray-200 rounded-full inline-block"></span>
          Conteúdo do Kit:
        </h4>
        <ul className="space-y-4 mb-8">
          {kit.items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full ${kit.color} flex items-center justify-center text-white text-[10px] font-bold mt-0.5`}>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 pt-0 mt-auto bg-gray-50/50 border-t border-gray-100 rounded-b-3xl">
        <div className="flex flex-col items-center mb-6 pt-6">
          <span className="text-gray-400 line-through text-xs font-semibold uppercase tracking-widest mb-1">Valor Original: R$ {kit.oldPrice}</span>
          <div className="flex items-baseline gap-1">
            <span className="text-gray-500 text-sm font-bold">Por apenas R$</span>
            <span className={`text-4xl font-black ${kit.textColor} tracking-tighter`}>{kit.price}</span>
          </div>
        </div>
        <button 
          onClick={() => onSelect(kit)}
          className={`w-full py-4 rounded-2xl font-black text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg ${kit.color} uppercase tracking-tight text-sm`}
        >
          Garantir Kit {kit.name.split(' ').pop()}
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
