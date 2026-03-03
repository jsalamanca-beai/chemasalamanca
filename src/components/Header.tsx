'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Logros', href: '#achievements' },
  { name: 'Trayectoria', href: '#brands' },
  { name: 'Servicios', href: '#services' },
  { name: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2">
          <span
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[var(--teal)]' : 'text-white'
            }`}
          >
            Chema Salamanca
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--teal)] ${
                  activeSection === item.href
                    ? 'text-[var(--teal)]'
                    : isScrolled
                    ? 'text-[var(--gray-dark)]'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
              {activeSection === item.href && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--teal)] rounded-full" />
              )}
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="bg-[var(--teal)] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[var(--teal-dark)] transition-colors"
            >
              Hablemos
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              isScrolled ? 'text-[var(--gray-dark)]' : 'text-white'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block font-medium transition-colors ${
                      activeSection === item.href
                        ? 'text-[var(--teal)]'
                        : 'text-[var(--gray-dark)] hover:text-[var(--teal)]'
                    }`}
                    onClick={handleNavClick}
                  >
                    {activeSection === item.href && (
                      <span className="inline-block w-1.5 h-1.5 bg-[var(--teal)] rounded-full mr-2 align-middle" />
                    )}
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="block bg-[var(--teal)] text-white px-5 py-2 rounded-full text-center font-medium hover:bg-[var(--teal-dark)] transition-colors"
                  onClick={handleNavClick}
                >
                  Hablemos
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
