'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useDictionary } from '@/i18n/context';

// SVG icons for recognitions kept inline — matched by index
const recognitionIcons: ReactNode[] = [
  (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
];

export default function Brands() {
  const dict = useDictionary();
  const brands = dict.brands;

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[var(--teal)] font-semibold mb-2 tracking-widest uppercase text-sm">
            {brands.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)] mb-4">
            {brands.title}
          </h2>
          <p className="text-lg text-[var(--gray-medium)] max-w-2xl mx-auto">
            {brands.description}
          </p>
        </AnimateOnScroll>

        {/* Company cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {(brands.companies as Array<{
            name: string;
            years: string;
            role: string;
            sector: string;
          }>).map((company, index) => (
            <AnimateOnScroll
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                className="group relative bg-[var(--gray-light)] rounded-xl p-6 border-l-4 border-[var(--teal)] hover:border-[var(--gold)] transition-colors duration-300 h-full"
                whileHover={{
                  y: -5,
                  boxShadow: '0 16px 35px -8px rgba(0,139,139,0.15)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Decorative top-right accent */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--teal)]/8 group-hover:bg-[var(--gold)]/15 transition-colors duration-300" />

                {/* Company name */}
                <h3 className="text-xl font-bold text-[var(--gray-dark)] mb-1 pr-8 leading-tight">
                  {company.name}
                </h3>

                {/* Years */}
                <p className="text-[var(--teal)] font-semibold text-sm mb-3">
                  {company.years}
                </p>

                {/* Role */}
                <p className="text-[var(--gray-dark)] font-medium text-sm mb-2">
                  {company.role}
                </p>

                {/* Sector */}
                <p className="text-[var(--gray-medium)] text-xs leading-relaxed">
                  {company.sector}
                </p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Divider */}
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-[var(--gray-light)]" />
            <p className="text-[var(--gray-medium)] text-sm font-medium whitespace-nowrap">
              {brands.recognitionsLabel}
            </p>
            <div className="flex-1 h-px bg-[var(--gray-light)]" />
          </div>
        </AnimateOnScroll>

        {/* Recognition badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {(brands.recognitions as string[]).map((label, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-5 py-3 bg-[var(--gray-light)] rounded-full text-[var(--gray-dark)] font-medium text-sm hover:bg-[var(--teal)] hover:text-white transition-colors duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.82, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.09,
                duration: 0.38,
                ease: [0.34, 1.56, 0.64, 1] as const,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[var(--teal)] group-hover:text-white transition-colors">
                {recognitionIcons[index]}
              </span>
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
