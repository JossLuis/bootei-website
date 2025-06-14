// Archivo: Welcome.jsx (Optimizado para Móvil)

import { Link } from 'react-router-dom';
import booteiLogo from './assets/booteiLogo.png';
import wingsImage from './assets/booteiWings.png';
import ensambleImage from './assets/booteiEnsamble.png';

function ChoiceCard({ to, image, title, subtitle, textPosition = 'bottom' }) {
  return (
    <Link
      to={to}
      // --- MEJORA MÓVIL 1: Altura de las tarjetas ---
      // En móvil: altura del 40% de la pantalla (h-[40vh]). En escritorio (md): altura del 60% (md:h-[60vh]).
      className="w-full h-[40vh] md:h-[60vh] md:w-2/5 lg:w-1/3 max-w-md bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden group relative transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/30"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`absolute inset-0 transition-all duration-300 group-hover:from-black/90 ${
        textPosition === 'top' 
          ? 'bg-gradient-to-b from-black/80 via-black/20 to-transparent' 
          : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
      }`}></div>
      
      <div className={`absolute left-0 p-6 md:p-8 text-white w-full ${
        textPosition === 'top' ? 'top-0' : 'bottom-0'
      }`}>
        {/* --- MEJORA MÓVIL 2: Tamaño de fuente responsivo --- */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">{title}</h2>
        {/* --- MEJORA MÓVIL 3: Subtítulo visible en móvil --- */}
        {/* En móvil: visible (opacity-100). En escritorio (md): oculto (md:opacity-0) y solo aparece al hacer hover. */}
        <p className="mt-2 text-md md:text-lg opacity-100 md:opacity-0 max-h-40 md:max-h-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">
            {subtitle}
        </p>
      </div>
    </Link>
  );
}


export default function Welcome() {
  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center font-sans p-4"
      style={{ 
          backgroundImage: `url(${booteiLogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* --- MEJORA MÓVIL 4: Reducción del espacio entre tarjetas --- */}
      {/* En móvil: separación de 4 (gap-4). En escritorio (md): separación de 12 (md:gap-12). */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
        
        <ChoiceCard
          to="/wings"
          image={wingsImage}
          title="La Fiesta en Casa"
          subtitle="Alitas, amigos y el mejor sabor."
        />

        <ChoiceCard
          to="/ensamble"
          image={ensambleImage}
          title="Tu Evento, Nuestro Sabor"
          subtitle="Llevamos la celebración a otro nivel."
          textPosition="top" 
        />

      </div>
    </div>
  );
}