// Archivo: Ensamble.jsx (Versión Final y Corregida con EmailJS)

import { useState, useRef } from 'react';
import { Calendar, Users, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Imágenes
import ensambleImage from './assets/booteiEnsamble.png';
import ensamble01 from './assets/ensamble01.png';
import ensamble02 from './assets/ensamble02.png';
import ensamble03 from './assets/ensamble03.png';
import ensamble04 from './assets/ensamble04.png';

export default function Ensamble() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
          e.target.reset();
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Hubo un error al enviar el mensaje. Por favor, revisa la consola para más detalles.');
      })
      .finally(() => {
          setIsSending(false);
      });
  };

  return (
    <div className="bg-white">
      {/* Sección Hero */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${ensambleImage})` }}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Eleva tu Celebración</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            El sabor inolvidable y la presentación espectacular de Bootei, ahora en tus eventos. Despreocúpate de la comida, nosotros la convertimos en una fiesta.
          </p>
          <a href="#formulario" className="mt-8 bg-[#00BBF9] text-white font-bold px-8 py-3 rounded-full hover:bg-sky-500 transition-colors">
            Cotiza tu Evento
          </a>
        </div>
      </div>

      {/* Sección "Cómo Funciona" */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Así de Fácil es Festejar con Nosotros</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center"><div className="bg-[#FEE440] p-4 rounded-full"><MessageSquare size={32} className="text-gray-900"/></div><h3 className="mt-4 text-xl font-bold">1. Contáctanos</h3><p className="mt-2 text-gray-600">Llena nuestro formulario con los detalles de tu evento.</p></div>
            <div className="flex flex-col items-center"><div className="bg-[#FEE440] p-4 rounded-full"><Calendar size={32} className="text-gray-900"/></div><h3 className="mt-4 text-xl font-bold">2. Personalizamos</h3><p className="mt-2 text-gray-600">Creamos un paquete a la medida de tus necesidades y presupuesto.</p></div>
            <div className="flex flex-col items-center"><div className="bg-[#FEE440] p-4 rounded-full"><Users size={32} className="text-gray-900"/></div><h3 className="mt-4 text-xl font-bold">3. ¡A Disfrutar!</h3><p className="mt-2 text-gray-600">Relájate y dedícate a festejar. Haremos que la comida sea un éxito garantizado.</p></div>
          </div>
        </div>
      </div>
      
      {/* Sección Galería */}
      <div className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Eventos que Dejan Huella</h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={ensamble01} alt="Catering 1" className="rounded-lg shadow-lg object-cover h-64 w-full"/><img src={ensamble02} alt="Catering 2" className="rounded-lg shadow-lg object-cover h-64 w-full md:mt-8"/><img src={ensamble03} alt="Catering 3" className="rounded-lg shadow-lg object-cover h-64 w-full"/><img src={ensamble04} alt="Catering 4" className="rounded-lg shadow-lg object-cover h-64 w-full md:mt-8"/>
        </div>
      </div>

      {/* Sección Formulario de Contacto */}
      <div id="formulario" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Hagamos tu Evento Realidad</h2>
            <p className="text-center mt-2 text-gray-600">Completa el formulario y nos pondremos en contacto a la brevedad.</p>
            <form ref={form} onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Nombre Completo" required className="p-3 border border-gray-300 rounded-lg" />
                <input type="email" name="email" placeholder="Email" required className="p-3 border border-gray-300 rounded-lg" />
                <input type="tel" name="phone" placeholder="Teléfono" required className="p-3 border border-gray-300 rounded-lg" />
                <select name="eventType" required defaultValue="Social" className="p-3 border border-gray-300 rounded-lg bg-white">
                    <option>Social</option><option>Corporativo</option><option>Bautizo</option><option>Posada</option><option>Otro</option>
                </select>
                <input type="number" name="guests" min="1" placeholder="No. de invitados (aprox.)" required className="p-3 border border-gray-300 rounded-lg" />
                <input type="date" name="date" required className="p-3 border border-gray-300 rounded-lg" />
                <textarea name="message" placeholder="Cuéntanos más sobre tu evento..." rows="5" className="p-3 border border-gray-300 rounded-lg md:col-span-2"></textarea>
                <button type="submit" disabled={isSending} className="md:col-span-2 bg-[#F15BB5] text-white font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400">
                    {isSending ? 'Enviando...' : <><Send size={20}/> Enviar Solicitud</>}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}