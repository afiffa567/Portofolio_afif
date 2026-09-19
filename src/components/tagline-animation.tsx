"use client";

import { useEffect, useState } from "react";

interface TaglineAnimationProps {
  taglines: readonly string[] | string[];
}

export function TaglineAnimation({ taglines }: TaglineAnimationProps) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!taglines || taglines.length === 0) return;

    const currentFullText = taglines[taglineIndex] || "";
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        // Typing each character
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        // Finished typing full word, pause before erasing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        // Deleting characters
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        // Finished deleting, proceed to next word
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, taglineIndex, taglines]);

  return (
    <div className="h-7 sm:h-8 flex items-center">
      <span className="text-sm sm:text-lg md:text-xl font-semibold text-muted-foreground tracking-tight">
        {displayedText}
      </span>
      <span className="inline-block w-[2px] h-4 sm:h-5 bg-primary ml-1 animate-pulse" />
    </div>
  );
}