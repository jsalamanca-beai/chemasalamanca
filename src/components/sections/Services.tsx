'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useDictionary } from '@/i18n/context';

// SVG icons kept inline — matched by index to dict.services.items
const serviceIcons = [
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
];

export default function Services() {
  const dict = useDictionary();
  const services = dict.services;

  return (
    <section id="services" className="py-20 bg-[var(--gray-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[var(--teal)] font-semibold mb-2">{services.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--gray-dark)] mb-4">
            {services.title}
          </h2>
          <p className="text-lg text-[var(--gray-medium)] max-w-2xl mx-auto">
            {services.description}
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {(services.items as Array<{
            title: string;
            description: string;
            features: string[];
            cta: string;
          }>).map((service, index) => (
            <AnimateOnScroll
              key={index}
              delay={index * 0.12}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm group h-full flex flex-col"
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[var(--teal)]/10 rounded-xl flex items-center justify-center text-[var(--teal)] mb-6 group-hover:bg-[var(--teal)] group-hover:text-white transition-colors duration-300">
                  {serviceIcons[index]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--gray-dark)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--gray-medium)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-sm text-[var(--gray-medium)]"
                    >
                      <svg
                        className="w-4 h-4 text-[var(--teal)] flex-shrink-0"
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
                  className="inline-flex items-center gap-2 text-[var(--teal)] font-semibold hover:text-[var(--teal-dark)] transition-colors mt-auto"
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
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Speaking Topics */}
        <AnimateOnScroll delay={0.1} direction="up">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <AnimateOnScroll className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[var(--gray-dark)]">
                {services.speakingTitle}
              </h3>
            </AnimateOnScroll>

            <div className="flex flex-wrap justify-center gap-3">
              {(services.speakingTopics as string[]).map((topic, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-[var(--gray-light)] rounded-full text-[var(--gray-dark)] text-sm font-medium hover:bg-[var(--teal)] hover:text-white transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.3,
                    ease: [0.34, 1.56, 0.64, 1] as const,
                  }}
                >
                  {topic}
                </motion.span>
              ))}
            </div>

            <p className="text-center text-[var(--gray-medium)] mt-8">
              {services.speakingExperience}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
