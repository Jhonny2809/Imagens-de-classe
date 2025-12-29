
import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Nós sabemos como é...
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
            Sábado está chegando, você tem uma classe para dar e ainda não preparou os visuais. 
            Você ama seus desbravadores, mas a rotina é corrida e o tempo é curto.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Fotos de plantas e animais pixeladas ou em baixa resolução.",
              "Imagens doutrinárias confusas que as crianças não entendem.",
              "Ilustrações para os Votos e Leis amadoras e mal feitas."
            ].map((text, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 font-bold text-xl">
                  ✕
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Chega de improviso.</h3>
            <p className="text-green-700">
              Nós organizamos tudo para você. Separado por classes, com design profissional e seguindo os requisitos atualizados. Transforme suas aulas em momentos inesquecíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
