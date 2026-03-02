import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Chema Salamanca"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--teal-dark)]/90 via-[var(--teal)]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <p className="text-[var(--gold-light)] font-medium mb-4 animate-fade-in-up">
            CEO & Fundador de BEAI Energy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
            Transformacion Empresarial y Humana{' '}
            <span className="text-[var(--gold-light)]">Aumentada</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in-up animate-delay-200">
            La tecnologia al servicio de las personas.{' '}
            <span className="font-semibold">Nunca en su lugar.</span>
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-xl animate-fade-in-up animate-delay-300">
            Conecto IA, personas y negocio para generar impacto sostenible en
            los sectores de energia e industria. Mas de 25 anos liderando
            transformaciones en +25 paises.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
            <Link
              href="#contact"
              className="bg-white text-[var(--teal-dark)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--gold-light)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hablemos
            </Link>
            <Link
              href="#about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--teal-dark)] transition-all duration-300"
            >
              Conoce mi historia
            </Link>
          </div>
        </div>

        {/* Stats highlight on desktop */}
        <div className="hidden md:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-[var(--gold-light)]">+25</p>
                <p className="text-white/80 text-sm mt-1">Paises</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-[var(--gold-light)]">$200M</p>
                <p className="text-white/80 text-sm mt-1">P&L Anual</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-[var(--gold-light)]">+2000</p>
                <p className="text-white/80 text-sm mt-1">Personas lideradas</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-[var(--gold-light)]">+20pp</p>
                <p className="text-white/80 text-sm mt-1">EBITDA en 3 anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about" className="text-white/80 hover:text-white">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
