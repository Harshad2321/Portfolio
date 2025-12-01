'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, Rocket, GraduationCap } from 'lucide-react';
import { timelineData } from '@/data/timeline';

const iconMap = {
  education: GraduationCap,
  project: Rocket,
  achievement: Award,
  certification: BookOpen,
};

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            My path in tech, from education to projects and achievements.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary md:left-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((event, index) => {
              const Icon = iconMap[event.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card glow-on-hover p-6"
                    >
                      <div className="mb-2 flex items-center gap-2 text-sm text-accent-primary">
                        <Icon className="h-4 w-4" />
                        <span className="font-semibold">{event.date}</span>
                      </div>

                      <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                      <p className="mb-3 text-sm text-gray-400">{event.description}</p>

                      {event.tags && (
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs text-accent-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-sm text-accent-secondary hover:underline"
                        >
                          View Project →
                        </a>
                      )}
                    </motion.div>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-8 md:left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-dark-bg bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden w-5/12 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
