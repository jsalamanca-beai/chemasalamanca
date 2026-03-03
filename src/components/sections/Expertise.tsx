'use client';

import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const expertiseAreas = [
  {
    title: 'Estrategia y Arquitectura Empresarial',
    description:
      'Construyo organizaciones inteligentes. Transformo estructuras complejas en ecosistemas eficientes, conectando negocio, tecnología y personas bajo una misma visión para impulsar un alto rendimiento.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'var(--teal)',
  },
  {
    title: 'Amplifica Personas, Equipos y Empresas',
    description:
      'Inspiro, movilizo y multiplico el talento colectivo creando organizaciones que piensan, sienten y actúan al unísono, aportando su máximo potencial al propósito empresarial.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'var(--gold)',
  },
  {
    title: 'Diseño y Venta de Soluciones',
    description:
      'Transformo necesidades tecnológicas en procesos con beneficios escalables y humanizados que impulsan la excelencia operativa, el bienestar y la rentabilidad organizacional.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'var(--teal-dark)',
  },
  {
    title: 'Transformación Aumentada y Ética con IA',
    description:
      'Diseño e integro modelos dentro de ecosistemas tecnológicos con la IA más avanzada, optimizando la eficiencia, la rentabilidad y generando impacto positivo en empresas, industrias y la sociedad.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'var(--gold-light)',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[var(--teal)] font-semibold mb-2">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)] mb-4">
            Mi talento al servicio de tu organización
          </h2>
          <p className="text-lg text-[var(--gray-medium)] max-w-3xl mx-auto">
            Combino visión estratégica, rigor técnico y excelencia operativa para
            generar impacto real y sostenible. Estas son las áreas donde puedo
            aportar valor a tu empresa.
          </p>
        </AnimateOnScroll>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <AnimateOnScroll
              key={area.title}
              delay={index * 0.12}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className="group relative bg-[var(--gray-light)] rounded-2xl p-8 overflow-hidden cursor-default h-full"
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 25px 50px -12px rgba(0,0,0,0.18)',
                }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                {/* Background decoration */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 transition-opacity group-hover:opacity-25"
                  style={{ backgroundColor: area.color }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${area.color}20`, color: area.color }}
                >
                  {area.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--gray-dark)] mb-4">
                  {area.title}
                </h3>
                <p className="text-[var(--gray-medium)] leading-relaxed">
                  {area.description}
                </p>

                {/* Animated bottom border */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: area.color }}
                />
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mission Statement */}
        <AnimateOnScroll delay={0.2} direction="up">
          <motion.div
            className="mt-16 bg-gradient-to-r from-[var(--teal)] to-[var(--teal-dark)] rounded-2xl p-8 md:p-12 text-white text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Mi misión</h3>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-95">
              Diseñar e implementar estrategias sostenibles que conectan tecnología,
              IA, personas y negocio, utilizando la IA para{' '}
              <strong>amplificar la inteligencia humana y empresarial</strong>,
              generando innovación con propósito, eficiencia y valor sostenible.
            </p>
            <p className="mt-6 text-[var(--gold-light)] font-semibold text-lg">
              La tecnología al servicio de las personas, nunca en su lugar.
            </p>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
