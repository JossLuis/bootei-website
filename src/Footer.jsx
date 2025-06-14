// Archivo: Footer.jsx (Nuevo)

import { Instagram, Facebook, MessageCircle } from 'lucide-react'; // Íconos para redes

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold">Bootei&reg;</p>
          <p className="text-sm text-gray-400">&copy; {currentYear} Bootei. Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-6">
          {/* Reemplaza '#' con los enlaces a tus redes sociales */}
          <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="hover:text-[#FEE440] transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer" className="hover:text-[#FEE440] transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://wa.me/524421095992" target="_blank" rel="noopener noreferrer" className="hover:text-[#FEE440] transition-colors">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}