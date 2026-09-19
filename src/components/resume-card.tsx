"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex items-start p-2.5 sm:p-3.5 hover:bg-accent/40 transition-colors duration-200 rounded-xl">
        <div className="flex-none">
          <Avatar className="border size-10 sm:size-12 bg-muted-background dark:bg-foreground shrink-0 shadow-2xs">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-3 sm:ml-4 flex flex-col group min-w-0 pt-0.5">
          <div className="flex items-start justify-between gap-x-2 text-base">
            <div className="flex-1 min-w-0">
              <h3 className="inline-flex items-center gap-1.5 font-semibold leading-snug text-xs sm:text-sm text-foreground flex-wrap">
                <span>{title}</span>
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[10px] sm:text-xs px-1.5 py-0"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "hidden sm:inline-flex size-3.5 sm:size-4 shrink-0 transition-transform duration-300",
                      isExpanded ? "rotate-90 text-primary" : "group-hover:translate-x-0.5 text-muted-foreground"
                    )}
                  />
                )}
              </h3>
              {subtitle && (
                <div className="text-xs text-muted-foreground font-medium mt-0.5 leading-snug">
                  {subtitle}
                </div>
              )}
              {description && (
                <div className="flex sm:hidden items-center gap-1 text-[11px] text-muted-foreground font-medium pt-1 group-hover:text-primary transition-colors">
                  <span>{isExpanded ? "Hide details" : "View details"}</span>
                  <ChevronRightIcon
                    className={cn(
                      "size-3 transition-transform duration-300",
                      isExpanded ? "rotate-90 text-primary" : ""
                    )}
                  />
                </div>
              )}
            </div>
            <div className="text-[11px] sm:text-xs tabular-nums text-muted-foreground font-normal shrink-0 text-right mt-0.5">
              {period}
            </div>
          </div>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm whitespace-pre-line leading-relaxed text-muted-foreground text-justify-clean"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};