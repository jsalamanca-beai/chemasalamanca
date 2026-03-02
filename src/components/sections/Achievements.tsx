const stats = [
  {
    value: '+25',
    label: 'Paises',
    description: 'Experiencia global multicultural',
  },
  {
    value: '$200M',
    label: 'P&L Anual',
    description: 'Gestion de grandes presupuestos',
  },
  {
    value: '+2,000',
    label: 'Personas',
    description: 'Equipos liderados',
  },
  {
    value: '+20pp',
    label: 'EBITDA',
    description: 'Incremento en 3 anos',
  },
];

const achievements = [
  {
    year: '2025',
    title: 'Fundacion de BEAI Energy',
    description:
      'Creacion de empresa nativa de IA para sectores energetico e industrial en Espana y expansion a 3 paises.',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Finalista Retos All4Zero',
    description:
      'Con la solucion CorrosionAI de Inteligencia Artificial aplicada a mantenimiento predictivo.',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Transformacion UST',
    description:
      'Liderazgo que incremento EBITDA de -7% a 13% en 3 anos. Gestion de equipo de +2,000 consultores y P&L de $200M.',
    highlight: false,
  },
  {
    year: '2023',
    title: 'Top Employer #20',
    description:
      'Reconocimiento como una de las 20 mejores empresas para trabajar en Espana bajo mi gestion.',
    highlight: false,
  },
  {
    year: '2015',
    title: 'Premio iCMG World Global Awards',
    description:
      'Mejor proyecto mundial de Arquitectura Empresarial. Roads & Transport Authority, Dubai.',
    highlight: true,
  },
  {
    year: '2008',
    title: 'Emprendedor: Seema Partners',
    description:
      'Cofundador de firma de consultoria en TIC y gestion en Emiratos Arabes Unidos y Arabia Saudi.',
    highlight: false,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-[var(--gray-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--gold-light)] font-semibold mb-2">LOGROS Y RESULTADOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impacto medible y reconocido
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Mi trayectoria esta respaldada por resultados concretos y
            reconocimientos internacionales.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-bold text-[var(--gold-light)] mb-2">
                {stat.value}
              </p>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-white/60 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Hitos destacados
          </h3>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={`${achievement.year}-${achievement.title}`}
                className={`relative flex items-start gap-6 p-6 rounded-xl transition-all hover:scale-[1.02] ${
                  achievement.highlight
                    ? 'bg-gradient-to-r from-[var(--teal)]/20 to-transparent border border-[var(--teal)]/30'
                    : 'bg-white/5'
                }`}
              >
                {/* Year badge */}
                <div
                  className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center font-bold text-lg ${
                    achievement.highlight
                      ? 'bg-[var(--teal)] text-white'
                      : 'bg-white/10 text-[var(--gold-light)]'
                  }`}
                >
                  {achievement.year}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4
                    className={`text-xl font-semibold mb-2 ${
                      achievement.highlight ? 'text-[var(--gold-light)]' : 'text-white'
                    }`}
                  >
                    {achievement.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Highlight indicator */}
                {achievement.highlight && (
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--gold)]/20 text-[var(--gold-light)]">
                      Destacado
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional recognition */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-4">Otras menciones</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm">
              Consultor Banco Mundial
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm">
              Colegio Oficial de Fisicos
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm">
              PMI Project Management Institute
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm">
              Proyecto YgualeX (impacto social)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
