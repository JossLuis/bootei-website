// Archivo: Header.jsx (Nuevo)

import { Link } from 'react-router-dom';
import booteiLogo from './assets/booteiLogo.png'; // Usamos el logo de Wings para esta sección

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo que funciona como link a la página de inicio */}
        <Link to="/" className="flex-shrink-0">
          <img src={booteiLogo} alt="Bootei Wings Logo" className="h-12 md:h-16" />
        </Link>

        {/* Aquí podríamos añadir más links de navegación en el futuro si es necesario */}
        <nav>
          {/* Ejemplo: <Link to="/contacto" className="text-gray-600 hover:text-gray-900">Contacto</Link> */}
        </nav>
      </div>
    </header>
  );
}