import Link from 'next/link';

const services = [
  {
    title: 'Asesoria Estrategica en IA',
    description:
      'Ayudo a organizaciones de energia e industria a integrar inteligencia artificial de forma etica y eficiente. Desde la definicion de la estrategia hasta la implementacion.',
    features: [
      'Diagnostico de madurez digital',
      'Roadmap de transformacion con IA',
      'Implementacion de soluciones GenAI',
      'Gobernanza y etica en IA',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    cta: 'Explorar',
  },
  {
    title: 'Consejos de Administracion',
    description:
      'Aporto vision estrategica y experiencia internacional en consejos y comites asesores. Perfil tecnologico-humano con foco en transformacion digital y crecimiento sostenible.',
    features: [
      'Consejero independiente',
      'Comites de tecnologia e innovacion',
      'Supervision de transformacion digital',
      'Gobernanza corporativa',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    cta: 'Conocer mas',
  },
  {
    title: 'Conferencias y Ponencias',
    description:
      'Comparto conocimiento y experiencias sobre IA, transformacion digital, liderazgo tecnologico y el futuro del trabajo en eventos corporativos y foros internacionales.',
    features: [
      'Keynotes corporativas',
      'Paneles de expertos',
      'Workshops ejecutivos',
      'Sesiones inspiracionales',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    cta: 'Invitame',
  },
  {
    title: 'Colaboraciones y Emprendimientos',
    description:
      'Busco alianzas estrategicas con emprendedores, inversores y empresas que compartan la vision de una tecnologia al servicio de las personas.',
    features: [
      'Co-fundador en startups',
      'Advisor en proyectos de IA',
      'Partnerships estrategicos',
      'Inversiones de impacto',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    cta: 'Conectemos',
  },
];

const speakingTopics = [
  'IA aplicada al negocio',
  'Transformacion digital',
  'Excelencia operativa',
  'Arquitectura empresarial',
  'Innovacion tecnologica',
  'Liderazgo y gestion del cambio',
  'Gobernanza responsable de IA',
  'Energia e industria 4.0',
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--gray-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--teal)] font-semibold mb-2">SERVICIOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)] mb-4">
            Como puedo ayudarte
          </h2>
          <p className="text-lg text-[var(--gray-medium)] max-w-2xl mx-auto">
            Pongo mi experiencia y conocimiento al servicio de organizaciones que
            buscan transformarse con proposito.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[var(--teal)]/10 rounded-xl flex items-center justify-center text-[var(--teal)] mb-6 group-hover:bg-[var(--teal)] group-hover:text-white transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--gray-dark)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--gray-medium)] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[var(--gray-medium)]"
                  >
                    <svg
                      className="w-4 h-4 text-[var(--teal)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--teal)] font-semibold hover:text-[var(--teal-dark)] transition-colors"
              >
                {service.cta}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Speaking Topics */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[var(--gray-dark)] text-center mb-8">
            Tematicas de conferencias
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {speakingTopics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-[var(--gray-light)] rounded-full text-[var(--gray-dark)] text-sm font-medium hover:bg-[var(--teal)] hover:text-white transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="text-center text-[var(--gray-medium)] mt-8">
            He participado en: The Open Group Global Summit, Association of Enterprise
            Architects, Computerworld FinancialIT Forum, ITSMf, Gobierno de Dubai.
          </p>
        </div>
      </div>
    </section>
  );
}
