// Archivo: App.jsx (COMPLETO Y ACTUALIZADO)

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';
import CartPanel from './CartPanel';
import Welcome from './Welcome';
import WingsMenuTabs from './WingsMenuTabs';
import Ensamble from './Ensamble';
import MainLayout from './MainLayout';
import { useState } from 'react';

function AppContent() {
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';
  // --- CAMBIO 1: Identificar si estamos en la página Ensamble ---
  const isEnsamblePage = location.pathname === '/ensamble'; 

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  // --- CAMBIO 2: Modificar la condición para mostrar el carrito ---
  // Ahora solo se muestra si NO es la página de bienvenida Y NO es la página de Ensamble.
  const shouldShowCart = !isWelcomePage && !isEnsamblePage;

  return (
    <div className="relative">
      {shouldShowCart && <CartIcon onClick={handleCartClick} />}
      {shouldShowCart && showCart && <CartPanel onClose={() => setShowCart(false)} />}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<MainLayout />}>
          <Route path="/wings" element={<WingsMenuTabs />} />
          <Route path="/ensamble" element={<Ensamble />} />
        </Route>
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}