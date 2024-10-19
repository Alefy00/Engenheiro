import designImage from '../assets/images/imageHeader.png'; // Substitua pelo caminho correto da imagem

function MainSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto principal */}
        <div className="text-center md:text-left px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Transforme seu projeto dos sonhos em realidade. Vamos concretizar suas ideias.
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Com ampla experiência em projetos diversos, estou pronto para transformar suas ideias em realidade, sempre com inovação e eficiência.
          </p>
          <a href="#contact" className="px-6 py-3 bg-[#B8001F] text-white rounded-lg transition-transform transform hover:scale-105 inline-block">
            Entre em Contato
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            128+ Projetos realizados em diversas áreas da engenharia civil.
          </p>
        </div>

        {/* Imagem única à direita - Oculta no mobile */}
        <div className="hidden md:block overflow-hidden rounded-lg mt-8 md:mt-0 px-4">
          <img src={designImage} alt="Imagem do projeto" className="object-cover w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
