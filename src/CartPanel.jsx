// Archivo: CartPanel.jsx (Z-Index asegurado)

import { useCart } from './CartContext';
import { useState } from 'react';

export default function CartPanel({ onClose }) {
  const { cartItems, setCartItems } = useCart();
  const [isClosing, setIsClosing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const removeItem = (id, salsa) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.salsa === salsa))
    );
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const mensaje = encodeURIComponent(
    `Hola, quisiera ordenar:\n\n` +
      cartItems
        .map(
          (item) =>
            `${item.name} (${item.salsa}) x${item.quantity} - $${
              item.price * item.quantity
            }`
        )
        .join('\n') +
      `\n\nTotal: $${total}`
  );

  const numeroWhatsApp = '524421095992';
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  const handleSend = () => {
    clearCart();
    setShowConfirmation(true);
    handleClose();
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <>
      <div
        // --- CAMBIO AQUÍ: Usamos un z-index intermedio y específico ---
        className={`fixed top-16 right-4 bg-white shadow-2xl rounded p-4 w-80 z-[55] border border-gray-200 transition-all duration-300 ${
          isClosing ? 'opacity-0 translate-x-10' : 'opacity-100'
        }`}
      >
        {/* ...el resto del código JSX no cambia... */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Tu Pedido</h2>
          <button
            className="text-gray-500 hover:text-red-500 text-sm"
            onClick={handleClose}
          >
            Cerrar ✕
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-sm text-center">
            Tu carrito está vacío.
          </p>
        ) : (
          <>
            <ul className="space-y-3">
              {cartItems.map((item, idx) => (
                <li
                  key={`${item.id}-${idx}`}
                  className="flex justify-between text-sm"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Salsa: {item.salsa}</p>
                    <p className="text-xs text-gray-500">
                      Cantidad: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p>${item.price * item.quantity}</p>
                    <button
                      onClick={() => removeItem(item.id, item.salsa)}
                      className="text-xs text-red-500 hover:underline mt-1"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-2 text-sm">
              <p className="flex justify-between font-semibold">
                <span>Total:</span> <span>${total}</span>
              </p>
              <a
                href={urlWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSend}
                className="block mt-3 bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Enviar pedido por WhatsApp
              </a>
            </div>
          </>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded shadow-lg z-50 transition-all duration-300">
          ✅ ¡Pedido enviado!
        </div>
      )}
    </>
  );
}