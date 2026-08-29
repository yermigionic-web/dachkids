"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Variant = "world" | "character" | "map" | "default";

type Props = {
  src: string;
  alt: string;
  fileHint: string;
  label?: string;
  variant?: Variant;
  className?: string;
  imgClassName?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fileHint,
  label,
  variant = "default",
  className,
  imgClassName,
}: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const fileName = fileHint.split("/").pop() ?? fileHint;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-300",
            loaded ? "relative opacity-100" : "absolute inset-0 opacity-0",
            imgClassName,
          )}
        />
      )}
      {(!loaded || failed) && (
        <Placeholder variant={variant} fileName={fileName} label={label} />
      )}
    </div>
  );
}

function Placeholder({
  variant,
  fileName,
  label,
}: {
  variant: Variant;
  fileName: string;
  label?: string;
}) {
  if (variant === "world") {
    return (
      <div className="flex h-full min-h-[140px] w-full flex-col items-center justify-center gap-1 border-[1.5px] border-black bg-[#efe6d2] px-3 py-4 text-center shadow-[3px_3px_0_#000]">
        <p className="text-[10px] tracking-[0.18em] text-[#9a3412]">IMAGE NEEDED</p>
        {label ? <p className="font-serif text-sm font-semibold text-black">{label}</p> : null}
        <p className="mt-1 font-mono text-[11px] text-neutral-700">{fileName}</p>
      </div>
    );
  }

  if (variant === "character") {
    return (
      <div className="flex h-full min-h-[160px] w-full flex-col items-center justify-center gap-1 bg-[linear-gradient(180deg,#d5dce3_0%,#bec8d2_100%)] px-3 py-4 text-center">
        <div className="mb-2 size-14 rounded-sm border border-[#7d8b97] bg-[#c5ced6]/80" />
        <p className="text-[9px] tracking-[0.2em] text-[#4d5c6a]">CHARACTER IMAGE</p>
        {label ? <p className="text-sm font-medium text-[#1e2a36]">{label}</p> : null}
        <p className="font-mono text-[10px] text-[#5b6a78]">{fileName}</p>
      </div>
    );
  }

  if (variant === "map") {
    return (
      <div className="flex h-full min-h-[180px] w-full flex-col items-center justify-center gap-1 bg-[#d9e3ea] px-3 py-4 text-center [background-image:linear-gradient(#c5d3dc_1px,transparent_1px),linear-gradient(90deg,#c5d3dc_1px,transparent_1px)] [background-size:28px_28px]">
        <p className="text-[10px] tracking-[0.2em] text-[#3e6a82]">MAP TILE</p>
        {label ? <p className="text-sm text-[#1d4e6b]">{label}</p> : null}
        <p className="font-mono text-[10px] text-[#4d6c7e]">{fileName}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[120px] w-full flex-col items-center justify-center gap-1 bg-neutral-200 px-3 py-4 text-center">
      <p className="text-[10px] tracking-[0.16em] text-neutral-500">IMAGE NEEDED</p>
      {label ? <p className="text-sm text-neutral-800">{label}</p> : null}
      <p className="font-mono text-[11px] text-neutral-600">{fileName}</p>
    </div>
  );
}
