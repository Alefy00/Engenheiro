import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'; // Ícones

function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-300">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="text-[#B8001F] font-bold text-xl text-center md:text-left ml-7">
          <span>Ricardo Silva</span> <br />
          <span className="text-gray-600">Engenheiro Civil</span>
        </div>

        {/* Links de navegação */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
          <a href="#about" className="text-gray-600 hover:text-gray-900">Sobre Mim</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projetos</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contato</a>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex space-x-6 justify-center mr-7">
          {/* Link para Instagram */}
          <a href="https://www.instagram.com/ricardo.rs1984/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#B8001F]">
            <FaInstagram size={20} />
          </a>
          {/* Link para WhatsApp */}
          <a href="https://wa.me/556199361446" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#B8001F]">
            <FaWhatsapp size={20} />
          </a>
          {/* Link para LinkedIn */}
          <a href="https://linkedin.com/in/sua_pagina" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#B8001F]">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="mt-6 text-center text-gray-500 text-sm px-4">
        © {new Date().getFullYear()} Ricardo Silva. Todos os direitos reservados. 
        <a href="/privacy-policy" className="ml-4 text-gray-600 hover:text-gray-900">Política de Privacidade</a>
        <a href="/terms-of-service" className="ml-4 text-gray-600 hover:text-gray-900">Termos de Serviço</a>
      </div>
    </footer>
  );
}

export default Footer;
