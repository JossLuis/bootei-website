// Archivo: ProductCard.jsx (Rediseñado)

import { useState } from 'react';
import { useCart } from './CartContext';
import { salsas } from './data.js';
import SauceSelector from './SauceSelector';
import { PlusCircle } from 'lucide-react';

export default function ProductCard({ product, category }) {
  const { addToCart } = useCart();
  const [selectedSalsas, setSelectedSalsas] = useState([]);
  const [error, setError] = useState('');

  const needsSauceSelection = category === 'alitas' || category === 'tenders' || category === 'boneless';

  const handleAddToCart = () => {
    if (needsSauceSelection && selectedSalsas.length === 0) {
      setError('Por favor, elige al menos una salsa.');
      return;
    }
    setError('');
    const salsaParaCarrito = selectedSalsas.length > 0 ? selectedSalsas.join(', ') : 'N/A';
    addToCart({ 
      ...product, 
      salsa: salsaParaCarrito 
    });
  };

  return (
    // --- CAMBIO 1: Contenedor de la tarjeta ---
    // Bordes más redondeados, sombra más pronunciada y un borde sutil para un look premium.
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-200/80 transition-all duration-300 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
      
      <div className="p-5 flex flex-col flex-grow">
        {/* --- CAMBIO 2: Tipografía --- */}
        <h3 className="text-xl font-extrabold tracking-tight text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{product.portions || product.description}</p>
        
        {needsSauceSelection && (
          <SauceSelector 
            category={category}
            availableSalsas={salsas}
            onSelectionChange={setSelectedSalsas}
          />
        )}
        
        {error && <p className="text-red-500 text-xs mt-2 mb-2">{error}</p>}

        {/* --- CAMBIO 3: Precio y Botón --- */}
        <div className="mt-auto pt-4 flex justify-between items-center">
          {/* Usamos el color Rosa Fiesta para el precio, para que resalte. */}
          <p className="text-3xl font-black text-[#F15BB5]">${product.price}</p>
          <button 
            onClick={handleAddToCart}
            // Botón más grande y con sombra más notoria al hacer hover
            className="bg-[#FEE440] text-gray-900 font-bold rounded-full p-3 hover:bg-[#fddc1c] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            <PlusCircle size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}