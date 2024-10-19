import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#B8001F] font-bold text-xl">
          <span>Ricardo Silva</span> <br />
          <span className="text-gray-600">Engenheiro Civil</span>
        </div>

        {/* Botão de menu no mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Menu de navegação - desktop */}
        <nav
          className={`hidden md:flex space-x-6 text-gray-700 md:space-x-6`}
        >
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-[#B8001F]">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#B8001F]">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#B8001F]">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão de Contato - desktop */}
        <a href="#contact" className="hidden md:inline-block">
          <button className="px-4 py-2 bg-[#B8001F] text-white rounded-md hover:bg-red-700">
            Entre em Contato
          </button>
        </a>
      </div>

      {/* Menu de navegação - mobile */}
      {isOpen && (
        <div className="md:hidden">
          {/* Botão para fechar o menu (X) */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 focus:outline-none"
            >
            </button>
          </div>

          {/* Links de navegação mobile */}
          <nav className="flex flex-col items-center space-y-4 text-gray-700">
            <a href="#about" className="hover:text-[#B8001F]" onClick={() => setIsOpen(false)}>
              Sobre
            </a>
            <a href="#projects" className="hover:text-[#B8001F]" onClick={() => setIsOpen(false)}>
              Projetos
            </a>
            <a href="#contact" className="hover:text-[#B8001F]" onClick={() => setIsOpen(false)}>
              Contato
            </a>
          </nav>

          {/* Botão de Contato - mobile */}
          <div className="mt-4">
            <a href="#contact">
              <button className="w-full px-4 py-2 bg-[#B8001F] text-white rounded-md hover:bg-red-700">
                Entre em Contato
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
