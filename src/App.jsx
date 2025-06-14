// Archivo: App.jsx (Actualizado para redirigir a /wings)

// --- CAMBIO 1: Importar 'Navigate' de react-router-dom ---
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
  const isEnsamblePage = location.pathname === '/ensamble';
  
  // Ya no necesitamos 'isWelcomePage' porque estamos redirigiendo.
  // La lógica del carrito ahora es más simple.
  const shouldShowCart = !isEnsamblePage;

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="relative">
      {shouldShowCart && <CartIcon onClick={handleCartClick} />}
      {shouldShowCart && showCart && <CartPanel onClose={() => setShowCart(false)} />}

      <Routes>
        {/* --- CAMBIO 2: La ruta principal ahora redirige a /wings --- */}
        {/* ANTES era: <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Navigate to="/wings" replace />} />

        {/* El resto de la estructura se mantiene intacta */}
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