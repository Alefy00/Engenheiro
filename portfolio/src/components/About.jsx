import { useState, useEffect } from 'react';
import engineerImage from '../assets/images/ricardo.png'; // Substitua pelo caminho correto da imagem do engenheiro
import CustomCheckIcon from '../assets/images/svg/check.svg';
import curriculoPDF from '../assets/Ricardo.pdf'; // Caminho do PDF do currículo

function About() {
  const [isMobile, setIsMobile] = useState(false);

  // Função para verificar o tamanho da tela e ajustar o estado
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Define como mobile se a tela for menor que 768px
  };

  // useEffect para controlar a verificação do tamanho da tela
  useEffect(() => {
    handleResize(); // Verificar no carregamento
    window.addEventListener('resize', handleResize); // Adicionar um listener para monitorar as mudanças de tamanho

    // Remover o listener quando o componente for desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="about" className="bg-white py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem do Engenheiro */}
        <div className="flex justify-center md:justify-end">
          <div
            className={`overflow-hidden ${
              isMobile ? 'w-64 h-64 rounded-full' : 'w-82 h-82 rounded-lg'
            }`} 
          >
            <img src={engineerImage} alt="Foto do engenheiro Ricardo Silva" className="object-cover " />
          </div>
        </div>

        {/* Texto à direita */}
        <div className="text-center md:text-left px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Ricardo Silva</h2>
          <p className="text-lg text-gray-600 mb-6">
            Engenheiro civil com mais de 10 anos de experiência em projetos de construção, cálculos estruturais, vistorias e acompanhamento de obras. Formado pela UDF em 2015, possuo vasta experiência em obras públicas e privadas, atuando tanto no setor técnico quanto na gestão de projetos e equipes.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Principais Qualificações</h3>
          <p className="text-lg text-gray-600 mb-6">
            Experiência em projetos residenciais, públicos e comerciais, com destaque em fiscalização de obras, execução de projetos e gestão de equipes.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Habilidade em negociação com clientes, planejamento de obras e flexibilidade para se adaptar a qualquer projeto.
          </p>

          {/* Ponto 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 flex items-start">
            <img src={CustomCheckIcon} alt="Check Icon" className="w-6 h-6 mr-3" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Ouvindo você</p>
              <p className="text-gray-600">
                Começamos com uma reunião detalhada para entender completamente suas necessidades e desejos.
              </p>
            </div>
          </div>

          {/* Ponto 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-start">
            <img src={CustomCheckIcon} alt="Check Icon" className="w-6 h-6 mr-3" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Colaborando com você</p>
              <p className="text-gray-600">
                Incorporamos suas ideias e fazemos ajustes contínuos para garantir que o resultado final atenda às suas expectativas.
              </p>
            </div>
          </div>

          {/* Botão de Download do Currículo */}
          <div className="mt-8">
            <a
              href={curriculoPDF}
              download="Curriculo_Ricardo_Silva.pdf"
              className="px-6 py-3 bg-[#B8001F] text-white font-bold rounded-md hover:bg-red-700 transition-colors"
            >
              Currículo Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
