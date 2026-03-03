'use client';

import { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

interface StatConfig {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  description: string;
  useComma: boolean;
}

const statsConfig: StatConfig[] = [
  {
    target: 25,
    prefix: '+',
    suffix: '',
    label: 'Países',
    description: 'Experiencia global multicultural',
    useComma: false,
  },
  {
    target: 200,
    prefix: '$',
    suffix: 'M',
    label: 'P&L Anual',
    description: 'Gestión de grandes presupuestos',
    useComma: false,
  },
  {
    target: 2000,
    prefix: '+',
    suffix: '',
    label: 'Personas',
    description: 'Equipos liderados',
    useComma: true,
  },
  {
    target: 20,
    prefix: '+',
    suffix: 'pp',
    label: 'EBITDA',
    description: 'Incremento en 3 años',
    useComma: false,
  },
];

const achievements = [
  {
    year: '2025',
    title: 'Fundación de BEAI Energy',
    description:
      'Creación de empresa nativa de IA para sectores energético e industrial en España y expansión a 3 países.',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Finalista Retos All4Zero',
    description:
      'Con la solución CorrosionAI de Inteligencia Artificial aplicada a mantenimiento predictivo.',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Transformación UST',
    description:
      'Liderazgo que incrementó EBITDA de -7% a 13% en 3 años. Gestión de equipo de +2,000 consultores y P&L de $200M.',
    highlight: false,
  },
  {
    year: '2023',
    title: 'Top Employer #20',
    description:
      'Reconocimiento como una de las 20 mejores empresas para trabajar en España bajo mi gestión.',
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
      'Cofundador de firma de consultoría en TIC y gestión en Emiratos Árabes Unidos y Arabia Saudí.',
    highlight: false,
  },
];

function AnimatedCounter({ stat }: { stat: StatConfig }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const displayValue = useTransform(motionValue, (latest) => {
    const rounded = Math.round(latest);
    if (stat.useComma) {
      return `${stat.prefix}${rounded.toLocaleString('es-ES')}${stat.suffix}`;
    }
    return `${stat.prefix}${rounded}${stat.suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, stat.target, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, motionValue, stat.target]);

  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-[var(--gold-light)]"
    >
      {displayValue}
    </motion.span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-[var(--gray-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[var(--gold-light)] font-semibold mb-2">LOGROS Y RESULTADOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Impacto medible y reconocido
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Mi trayectoria está respaldada por resultados concretos y
            reconocimientos internacionales.
          </p>
        </AnimateOnScroll>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statsConfig.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1} direction="up">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors h-full">
                <div className="mb-2">
                  <AnimatedCounter stat={stat} />
                </div>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-white/60 text-sm">{stat.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <AnimateOnScroll className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white">
              Hitos destacados
            </h3>
          </AnimateOnScroll>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <AnimateOnScroll
                key={`${achievement.year}-${achievement.title}`}
                delay={index * 0.1}
                direction="left"
              >
                <motion.div
                  className={`relative flex items-start gap-6 p-6 rounded-xl transition-colors ${
                    achievement.highlight
                      ? 'bg-gradient-to-r from-[var(--teal)]/20 to-transparent border border-[var(--teal)]/30'
                      : 'bg-white/5'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
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
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Additional recognition */}
        <AnimateOnScroll delay={0.1} className="mt-16 text-center">
          <p className="text-white/60 mb-4">Otras menciones</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'TOGAF Certificado',
              'MBA',
              'Consultor EFQM Certificado',
              'Consultor Banco Mundial',
              'Fundador Capítulo Español de Arquitectos Empresariales',
              'Colegio Oficial de Físicos',
              'PMI Project Management Institute',
              'Proyecto YgualeX (impacto social)',
            ].map((mention, index) => (
              <motion.span
                key={mention}
                className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.08, duration: 0.35, ease: 'easeOut' }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
              >
                {mention}
              </motion.span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
