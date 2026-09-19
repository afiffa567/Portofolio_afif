"use client";

import { Icons } from "@/components/icons";
import { motion } from "framer-motion";

interface Tool {
  name: string;
  icon: string;
}

interface AnimatedToolsProps {
  tools: readonly Tool[];
}

export function AnimatedTools({ tools }: AnimatedToolsProps) {
  const rows = [
    tools.slice(0, 4),
    tools.slice(4, 8),
    tools.slice(8, 12),
  ];

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="flex w-full gap-2 sm:gap-2.5">
          {row.map((tech, itemIdx) => {
            const IconComponent = Icons[tech.icon as keyof typeof Icons];
            const globalIndex = rowIdx * 4 + itemIdx;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: 1,
                  y: [0, -2.5, 0],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: globalIndex * 0.03 },
                  y: {
                    duration: 3 + (globalIndex % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: globalIndex * 0.15,
                  },
                }}
                whileHover={{
                  scale: 1.04,
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 min-w-0 inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1 sm:px-2.5 py-2 sm:py-2.5 rounded-xl border border-border bg-card/70 hover:bg-accent hover:border-primary/50 transition-colors duration-200 shadow-xs hover:shadow-md hover:shadow-primary/10 cursor-pointer group select-none"
                title={tech.name}
              >
                {IconComponent && (
                  <IconComponent className="size-4 sm:size-5 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shrink-0" />
                )}
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground text-center leading-tight max-w-full">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
