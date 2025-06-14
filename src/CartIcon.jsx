// Archivo: CartIcon.jsx (Z-Index asegurado)

import { useCart } from './CartContext';
import { ShoppingCart } from 'lucide-react';

export default function CartIcon({ onClick }) {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      // --- CAMBIO AQUÍ: Usamos un z-index muy alto y específico ---
      className="fixed top-4 right-4 z-[60] bg-yellow-300 hover:bg-yellow-400 text-gray-800 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 transition-all duration-200"
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="text-sm font-semibold">{totalItems}</span>
    </button>
  );
}