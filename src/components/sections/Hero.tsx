'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '+25', label: 'Países' },
  { value: '$200M', label: 'P&L Anual' },
  { value: '+2.000', label: 'Personas lideradas' },
  { value: '+20pp', label: 'EBITDA en 3 años' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const photoVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--teal-dark)]"
    >
      {/* Parallax background overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, opacity: bgOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-dark)] via-[var(--teal)] to-[var(--teal-dark)]" />
        {/* Subtle texture dots */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[var(--teal-light)]/15 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 xl:gap-20 items-center">
          {/* ── Left column: text ── */}
          <motion.div
            className="text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-[var(--gold-light)] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--gold-light)] animate-pulse" />
                CEO & Fundador de BEAI Energy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-5 leading-tight"
            >
              Transformación Empresarial y Humana{' '}
              <span className="text-[var(--gold-light)]">Aumentada</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-4 text-white/90"
            >
              La tecnología al servicio de las personas.{' '}
              <span className="font-semibold">Nunca en su lugar.</span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/75 mb-3 max-w-xl leading-relaxed"
            >
              Conecto IA, personas y negocio para generar impacto sostenible en
              los sectores de energía e industria. Más de 25 años liderando
              transformaciones en +25 países.
            </motion.p>

            {/* Mantra */}
            <motion.p
              variants={itemVariants}
              className="italic text-[var(--gold-light)]/80 text-base mb-8 font-light tracking-wide"
            >
              "Nada me para."
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="bg-white text-[var(--teal-dark)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--gold-light)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Hablemos
              </Link>
              <Link
                href="#about"
                className="border-2 border-white/70 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--teal-dark)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Conoce mi historia
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right column: photo ── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Teal accent border behind the photo */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--gold-light)]/50 via-[var(--teal-light)]/30 to-transparent blur-sm" />
              <div className="absolute -inset-1 rounded-2xl border-2 border-[var(--teal-light)]/40" />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-72 h-[420px] md:w-80 md:h-[480px] xl:w-96 xl:h-[560px]">
                <Image
                  src="/images/chema-hero.jpg"
                  alt="Chema Salamanca — CEO y fundador de BEAI Energy"
                  fill
                  className="object-cover object-top"
                  priority
                  quality={90}
                />
                {/* subtle bottom gradient to blend with section */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--teal-dark)]/30 via-transparent to-transparent" />
              </div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white shadow-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
              >
                <p className="text-xs text-white/70 mb-0.5">Físico · MBA · CEO</p>
                <p className="font-semibold text-sm">+25 años de impacto global</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-white/5 backdrop-blur-sm px-6 py-5 text-center hover:bg-white/10 transition-colors ${
                i < stats.length - 1 ? '' : ''
              }`}
            >
              <p className="text-3xl md:text-4xl font-bold text-[var(--gold-light)]">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group"
          aria-label="Ir a la sección Sobre mí"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </section>
  );
}
