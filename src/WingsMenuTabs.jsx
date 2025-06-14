// Archivo: WingsMenuTabs.jsx (Con funcionalidad de pestañas restaurada)

import { useState } from 'react';
import { alitas, tenders, boneless, papas, combos } from './data.js';
import ProductCard from './ProductCard'; 

export default function WingsMenuTabs() {
  const [activeTab, setActiveTab] = useState('Alitas');

  const tabs = {
    'Alitas': alitas, 'Tenders': tenders, /*'Boneless': boneless,*/ 'Papas': papas, /*'Combos': combos,*/
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24 md:pt-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
          Elige tu <span className="text-[#F15BB5]">Arma</span> contra el Hambre
        </h1>
        <p className="text-lg text-gray-600 mt-2">Prepara tu paladar. ¡Se viene algo bueno!</p>
      </div>

      {/* --- CÓDIGO RESTAURADO AQUÍ --- */}
      {/* Se ha restaurado el 'onClick' y el 'className' dinámico en los botones */}
      <div className="flex justify-center border-b-2 border-gray-200 mb-8 flex-wrap">
        {Object.keys(tabs).map((tabName) => (
          <button
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            className={`px-4 py-2 text-lg font-semibold transition-colors duration-300
              ${activeTab === tabName 
                ? 'border-b-4 border-[#FEE440] text-gray-900' 
                : 'text-gray-500 hover:text-gray-800'
              }`}
          >
            {tabName}
          </button>
        ))}
      </div>

      {/* Contenido de la Pestaña Activa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        {tabs[activeTab].map(product => (
          <ProductCard key={product.id} product={product} category={activeTab.toLowerCase()} />
        ))}
      </div>
    </div>
  );
}