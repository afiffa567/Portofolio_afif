import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroAvatarProps {
    src: string;
    alt: string;
    className?: string;
}

export function HeroAvatar({ src, alt, className }: HeroAvatarProps) {
    return (
        <div className={cn(
            "relative w-48 h-60 overflow-hidden rounded-lg shadow-xl border-2 border-background",
            "md:w-56 md:h-64",
            className
        )}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 200px"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
    );
}