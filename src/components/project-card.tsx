"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon?: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 3D Tilt calculations
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({ x: mouseX, y: mouseY });

    // Normalized from -0.5 to 0.5
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.985 }}
      className="relative h-full perspective-[1000px]"
    >
      <Card
        className={cn(
          "group relative flex flex-col overflow-hidden border border-border/70 bg-gradient-to-b from-card via-card to-card/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 ease-out h-full rounded-2xl backdrop-blur-xs",
          className
        )}
      >
        {/* Dynamic Cursor Spotlight Effect */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 opacity-100 z-10"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.12), transparent 70%)`,
            }}
          />
        )}

        <Link
          href={href || "#"}
          className="block cursor-pointer overflow-hidden relative"
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
          {image && (
            <div className="overflow-hidden h-40 w-full bg-muted/20 relative">
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-40 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* Subtle gradient overlay on media */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          )}


        </Link>

        <CardHeader className="px-3.5 pt-3 pb-1 z-20">
          <div className="space-y-1">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
                {title}
              </CardTitle>
            </div>
            <time className="font-sans text-xs text-muted-foreground/80 font-medium">
              {dates}
            </time>
            {link && (
              <div className="hidden font-sans text-xs underline print:visible">
                {link?.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            )}
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground leading-relaxed pt-1 text-justify-clean">
              {description}
            </Markdown>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-3.5 py-2 z-20">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1.5 py-0.5 text-[10px] font-medium transition-all duration-200 hover:bg-primary/20 hover:text-primary hover:scale-105 cursor-default"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="px-3.5 pb-3.5 pt-1.5 z-20">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-center gap-2">
              {links?.map((link, idx) => (
                <Link
                  href={link?.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide border border-border/80 bg-secondary/50 text-foreground/80 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 active:scale-95 shadow-2xs backdrop-blur-xs cursor-pointer"
                >
                  {link.type}
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}