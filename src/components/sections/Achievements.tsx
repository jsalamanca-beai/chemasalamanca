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
import { useDictionary } from '@/i18n/context';

interface StatConfig {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  description: string;
  useComma: boolean;
}

// Numeric configuration — values that don't belong in the dictionary
const statsNumericConfig = [
  { target: 25,   prefix: '+',  suffix: '',   useComma: false },
  { target: 200,  prefix: '$',  suffix: 'M',  useComma: false },
  { target: 2000, prefix: '+',  suffix: '',   useComma: true  },
  { target: 20,   prefix: '+',  suffix: 'pp', useComma: false },
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
  const dict = useDictionary();
  const achievements = dict.achievements;

  // Merge numeric config with dictionary labels
  const statsConfig: StatConfig[] = statsNumericConfig.map((numeric, i) => ({
    ...numeric,
    label: (achievements.stats as Array<{ label: string; description: string }>)[i]?.label ?? '',
    description: (achievements.stats as Array<{ label: string; description: string }>)[i]?.description ?? '',
  }));

  // highlight is a UI concern — not stored in the dictionary
  const timelineHighlights = [true, false, false, false, true, false];

  return (
    <section id="achievements" className="py-20 bg-[var(--gray-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-[var(--gold-light)] font-semibold mb-2">{achievements.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {achievements.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {achievements.description}
          </p>
        </AnimateOnScroll>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statsConfig.map((stat, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1} direction="up">
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
              {achievements.timelineTitle}
            </h3>
          </AnimateOnScroll>

          <div className="space-y-6">
            {(achievements.timeline as Array<{
              year: string;
              title: string;
              description: string;
            }>).map((item, index) => {
              const isHighlight = timelineHighlights[index] ?? false;
              return (
                <AnimateOnScroll
                  key={`${item.year}-${index}`}
                  delay={index * 0.1}
                  direction="left"
                >
                  <motion.div
                    className={`relative flex items-start gap-6 p-6 rounded-xl transition-colors ${
                      isHighlight
                        ? 'bg-gradient-to-r from-[var(--teal)]/20 to-transparent border border-[var(--teal)]/30'
                        : 'bg-white/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    {/* Year badge */}
                    <div
                      className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center font-bold text-lg ${
                        isHighlight
                          ? 'bg-[var(--teal)] text-white'
                          : 'bg-white/10 text-[var(--gold-light)]'
                      }`}
                    >
                      {item.year}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4
                        className={`text-xl font-semibold mb-2 ${
                          isHighlight ? 'text-[var(--gold-light)]' : 'text-white'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Highlight indicator */}
                    {isHighlight && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--gold)]/20 text-[var(--gold-light)]">
                          {achievements.highlightBadge}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        {/* Additional recognition */}
        <AnimateOnScroll delay={0.1} className="mt-16 text-center">
          <p className="text-white/60 mb-4">{achievements.mentionsLabel}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {(achievements.mentions as string[]).map((mention, index) => (
              <motion.span
                key={index}
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
