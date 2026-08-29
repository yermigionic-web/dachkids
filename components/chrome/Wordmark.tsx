import Link from "next/link";
import { cn } from "@/lib/cn";

type Tone = "home" | "world" | "archive" | "map" | "consult";

const toneClass: Record<Tone, string> = {
  home: "text-[#1c2330]",
  world: "text-black",
  archive: "text-[#243040]",
  map: "text-[#16324a]",
  consult: "text-[#f8f1d4]",
};

export function Wordmark({
  tone = "home",
  href = "/",
  compact = false,
}: {
  tone?: Tone;
  href?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label="대치헌터키즈 홈"
      className={cn(
        "inline-flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        toneClass[tone],
      )}
    >
      {!compact && (
        <span className="text-[10px] tracking-[0.28em] opacity-55">2040</span>
      )}
      <span
        className={cn(
          "font-medium tracking-tight",
          compact ? "text-[15px]" : "text-[17px] sm:text-[18px]",
        )}
      >
        대치헌터키즈
      </span>
    </Link>
  );
}
