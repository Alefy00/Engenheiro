function Services() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Serviços Oferecidos</h2>

        {/* Container dos serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Serviço 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Elaboração de Projetos</strong>
            </p>
            <p className="text-gray-600">
              Projetos completos para construção civil, incluindo cálculos estruturais e detalhamentos técnicos, com o uso de AutoCAD e Eberick.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Fiscalização e Acompanhamento de Obras</strong>
            </p>
            <p className="text-gray-600">
              Fiscalização técnica de obras públicas e privadas, garantindo conformidade com os projetos e padrões exigidos.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Consultoria Técnica</strong>
            </p>
            <p className="text-gray-600">
              Consultoria especializada em cálculos estruturais, análise de viabilidade de projetos e otimização de custos de construção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
