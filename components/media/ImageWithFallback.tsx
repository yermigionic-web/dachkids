import { cn } from "@/lib/cn";
import { withBase } from "@/lib/basePath";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function ImageWithFallback({ src, alt, className, imgClassName, priority = false }: Props) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase(src)}
        alt={alt}
        decoding={priority ? "sync" : "async"}
        className={cn("h-full w-full object-cover", imgClassName)}
        suppressHydrationWarning
      />
    </div>
  );
}
