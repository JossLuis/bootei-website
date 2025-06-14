// Archivo: SauceSelector.jsx (Pulido)

import { useState, useEffect } from 'react';

export default function SauceSelector({ category, availableSalsas, onSelectionChange }) {
  const [selectedSalsas, setSelectedSalsas] = useState([]);

  const isForPapas = category === 'papas'; // Aunque ya no lo usamos, lo dejamos por si acaso
  const maxSelection = 2; // Simplificado, ya que las papas no usan esto
  const title = 'Elige hasta 2 salsas';

  useEffect(() => {
    onSelectionChange(selectedSalsas);
  }, [selectedSalsas, onSelectionChange]);

  const handleCheckboxChange = (salsa) => {
    setSelectedSalsas(prevSelected => {
      const isSelected = prevSelected.includes(salsa);
      if (isSelected) {
        return prevSelected.filter(s => s !== salsa);
      } else {
        if (prevSelected.length < maxSelection) {
          return [...prevSelected, salsa];
        }
      }
      return prevSelected;
    });
  };

  return (
    // --- CAMBIO AQUÍ: Título del selector con más peso ---
    <div className="mb-4">
      <label className="text-md font-bold text-gray-800 block mb-2">{title}:</label>
      <div className="flex flex-wrap gap-2">
        {availableSalsas.map((salsa) => {
          const isSelected = selectedSalsas.includes(salsa);
          return (
            <label 
              key={salsa} 
              className={`flex items-center justify-center px-3 py-1.5 rounded-full border-2 cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'bg-[#FEE440] border-[#FEE440] text-gray-900 font-bold shadow-sm' 
                  : 'bg-white border-gray-300 hover:border-gray-500'
                }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleCheckboxChange(salsa)}
                className="hidden"
              />
              {salsa}
            </label>
          )
        })}
      </div>
    </div>
  );
}