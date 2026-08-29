import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "home" | "world" | "archive" | "map" | "consult";

const toneClass: Record<Tone, string> = {
  home: "text-[#1c2330]/80 hover:text-[#1c2330]",
  world: "border-[1.5px] border-black bg-white px-2 py-1 text-[12px] text-black hover:bg-black hover:text-[#f6f0e4]",
  archive: "text-[#4d5c6a] hover:text-[#1e2a36]",
  map: "text-[#1d4e6b] hover:text-[#0f3348]",
  consult: "text-[#e8c872] hover:text-[#f8f1d4]",
};

export function BackLink({
  href = "/",
  label = "메인으로",
  tone = "home",
}: {
  href?: string;
  label?: string;
  tone?: Tone;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 text-[13px] transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-current",
        toneClass[tone],
      )}
    >
      <ArrowLeft size={15} strokeWidth={1.75} aria-hidden />
      {label}
    </Link>
  );
}
