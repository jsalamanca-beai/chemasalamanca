'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const values = [
  {
    title: 'Liderazgo cientifico',
    description:
      'Enfoque analitico y dominio tecnologico para aplicar conocimiento con rigor en contextos de alta complejidad.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Anticipacion visionaria',
    description:
      'Detecto lo oculto, analizo con vision de futuro y anticipo tendencias para decisiones sostenibles.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Humanismo etico',
    description:
      'Actuo con integridad y proposito, asegurando que cada avance tecnologico sirva al bien comun.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Progreso evolutivo',
    description:
      'Inspiro un progreso genuinamente humano, dejando una huella positiva y sostenible.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--gray-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[var(--teal)] font-semibold mb-2">SOBRE MI</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)]">
            Del fisico al CEO: una trayectoria global
          </h2>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/chema-about.jpg"
                  alt="Chema Salamanca - Foto casual"
                  width={600}
                  height={750}
                  className="object-cover w-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--teal)]/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--gold)]/10 rounded-2xl -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll direction="right" delay={0.1}>
            <div>
              <p className="text-lg text-[var(--gray-medium)] mb-6 leading-relaxed">
                Soy <strong className="text-[var(--gray-dark)]">Chema Salamanca</strong>,
                fisico de formacion, MBA y fundador de{' '}
                <strong className="text-[var(--teal)]">BEAI Energy</strong>. Mi carrera
                ha sido un viaje de transformacion constante: desde las ecuaciones de la
                fisica hasta liderar equipos de mas de 2.000 personas en empresas
                multinacionales.
              </p>
              <p className="text-lg text-[var(--gray-medium)] mb-6 leading-relaxed">
                He trabajado en <strong className="text-[var(--gray-dark)]">mas de 25 paises</strong>,
                conectando culturas, equipos y visiones empresariales. Esta experiencia
                multicultural me ha ensenado que la verdadera transformacion no es solo
                tecnologica, es <em>profundamente humana</em>.
              </p>
              <p className="text-lg text-[var(--gray-medium)] mb-8 leading-relaxed">
                Hoy, desde BEAI Energy, tengo una mision clara:{' '}
                <strong className="text-[var(--teal)]">
                  que la inteligencia artificial amplifique lo mejor de nosotros,
                  sin reemplazarnos
                </strong>.
                Creo en la tecnologia con proposito, en el progreso con conciencia.
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-[var(--gold)] pl-6 py-2 mb-8 bg-white rounded-r-lg">
                <p className="text-xl italic text-[var(--gray-dark)]">
                  "Mas alla de lo artificial. Genuinamente humano."
                </p>
              </blockquote>

              {/* Personal touch */}
              <div className="flex items-center gap-4 text-sm text-[var(--gray-medium)]">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Madrid, Espana
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  +25 paises
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <AnimateOnScroll className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[var(--gray-dark)]">
              Mis valores
            </h3>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 0.1} direction="up">
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full cursor-default"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                  <div className="w-12 h-12 bg-[var(--teal)]/10 rounded-lg flex items-center justify-center text-[var(--teal)] mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--gray-dark)] mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-[var(--gray-medium)]">
                    {value.description}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
