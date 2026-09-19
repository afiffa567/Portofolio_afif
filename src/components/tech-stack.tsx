import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechStackProps {
    techStack: Array<{
        name: string;
        icon: keyof typeof Icons;
    }>;
}

export function TechStack({ techStack }: TechStackProps) {
    return (
        <div className="mt-8">
            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-semibold mb-4"
            >
                TECH STACK
            </motion.h3>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, id) => {
                    const IconComponent = Icons[tech.icon];
                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: id * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className={cn(
                                "flex items-center gap-2 px-3 py-2",
                                "rounded-lg border",
                                "bg-background hover:bg-accent",
                                "transition-all duration-300"
                            )}
                        >
                            <div className="flex items-center justify-center w-5 h-5">
                                {IconComponent && (
                                    <IconComponent className="w-4 h-4" />
                                )}
                            </div>
                            <span className="text-sm font-medium">{tech.name}</span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}