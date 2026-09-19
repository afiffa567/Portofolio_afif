"use client";

import { motion } from "framer-motion";

interface AnimatedSkillsProps {
  skills?: readonly string[] | string[];
  skillsRows?: string[][];
}

export function AnimatedSkills({ skills, skillsRows }: AnimatedSkillsProps) {
  const items = skills ?? skillsRows?.flat() ?? [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full">
      {items.map((skill, idx) => {
        const isAlternate = idx % 2 === 0;
        return (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.4,
              delay: Math.min(idx * 0.02, 0.3),
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.015,
              y: -1.5,
              transition: { type: "spring", stiffness: 450, damping: 22 },
            }}
            whileTap={{ scale: 0.985 }}
            className="w-full h-11 sm:h-12 flex items-center justify-start gap-2.5 sm:gap-3 px-3.5 sm:px-4 rounded-xl border border-border/80 bg-gradient-to-b from-card/90 via-card/70 to-card/40 hover:from-card hover:to-accent/60 hover:border-primary/50 transition-colors duration-300 shadow-xs hover:shadow-md cursor-pointer group select-none backdrop-blur-xs relative overflow-hidden"
          >
            {/* Modern light-beam sweep effect on hover */}
            <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-primary/15 to-transparent pointer-events-none" />

            {/* Animated competency status indicator dot - straight alignment */}
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 group-hover:opacity-100 ${
                  isAlternate ? "bg-emerald-400" : "bg-sky-400"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-1.5 w-1.5 transition-colors duration-200 ${
                  isAlternate
                    ? "bg-emerald-500 group-hover:bg-primary"
                    : "bg-sky-500 group-hover:bg-primary"
                }`}
              />
            </span>

            {/* Left-aligned single line text, straight from top to bottom */}
            <span className="whitespace-nowrap text-xs sm:text-[13px] md:text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 text-left truncate leading-none">
              {skill}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

