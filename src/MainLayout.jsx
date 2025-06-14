// Archivo: MainLayout.jsx (Nuevo)

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {/* El contenido de la página (ej. WingsMenuTabs) se renderizará aquí */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}