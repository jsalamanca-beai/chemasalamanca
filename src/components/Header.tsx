'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mi', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Logros', href: '#achievements' },
  { name: 'Servicios', href: '#services' },
  { name: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--teal)] ${
                  isScrolled ? 'text-[var(--gray-dark)]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-[var(--gray-dark)] font-medium hover:text-[var(--teal)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="block bg-[var(--teal)] text-white px-5 py-2 rounded-full text-center font-medium hover:bg-[var(--teal-dark)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hablemos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
