
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-800 uppercase tracking-tighter">
          Dúvidas Frequentes
        </h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800">{faq.question}</span>
                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl">🛡️</div>
          <div>
            <h3 className="text-xl font-black text-blue-900 mb-1">Garantia Blindada de 7 Dias</h3>
            <p className="text-blue-800 opacity-80">
              Se você não gostar do material por qualquer motivo, devolvemos seu dinheiro integralmente. Sem perguntas. Seu risco é zero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
