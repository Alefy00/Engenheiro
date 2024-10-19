import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import customIcon from './customIcon';  // Ícone personalizado do Leaflet

function Contact() {
  // Coordenadas para o mapa
  const position = [-16.3527, -46.8956]; 
  
  // Referência ao formulário
  const form = useRef();

  // Função para enviar e-mail via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rftl60q', 'template_fizhir8', form.current, 'Wob5E6qKRGId39n2y')
      .then((result) => {
          console.log(result.text);
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          console.log(error.text);
          alert('Ocorreu um erro ao enviar a mensagem.');
      });

    e.target.reset();  // Limpa o formulário após o envio
  };

  return (
    <section id="contact" className="bg-white py-12 md:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start px-4">
        
        {/* Formulário de Contato */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Envie uma mensagem e retornarei o mais breve possível.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                name="from_name"  // Correspondente à variável do EmailJS
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B8001F] focus:border-[#B8001F]"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="reply_to"  // Usamos 'reply_to' para o e-mail do remetente no EmailJS
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B8001F] focus:border-[#B8001F]"
                placeholder="Seu email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                name="message"  // Correspondente à variável do EmailJS
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B8001F] focus:border-[#B8001F]"
                placeholder="Escreva sua mensagem"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 md:px-6 py-2 bg-[#B8001F] text-white font-bold rounded-md hover:bg-[#a0001b] transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Mapa com Leaflet e Stadia Maps (Dark) */}
        <div className="w-full h-72 md:h-[400px] rounded-lg shadow-md">
          <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={false} 
            className="h-full w-full rounded-lg"
          >
            <TileLayer
             url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Avenida José Luiz Adjunto, 1378
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
