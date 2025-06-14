import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('bootei_cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('bootei_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Agregar producto
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id && p.salsa === item.salsa);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id && p.salsa === item.salsa
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
