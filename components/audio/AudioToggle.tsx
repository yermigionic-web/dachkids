"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "./AudioProvider";
import { cn } from "@/lib/cn";

type Tone = "home" | "world" | "archive" | "map" | "consult";

const toneClass: Record<Tone, string> = {
  home: "border-black/10 bg-white/70 text-[#1c2330] shadow-sm backdrop-blur-md",
  world: "border-[1.5px] border-black bg-[#f6f0e4] text-black",
  archive: "border border-[#8a96a3] bg-[#eceff2] text-[#243040]",
  map: "border border-[#c5d0d8] bg-white text-[#1d4e6b] shadow-sm",
  consult: "border border-[#e8c872]/50 bg-[#14110c] text-[#e8c872]",
};

export function AudioToggle({ tone = "home" }: { tone?: Tone }) {
  const { muted, playing, toggleMute } = useAudio();
  const silent = muted || !playing;

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={silent ? "배경음 켜기" : "배경음 끄기"}
      aria-pressed={silent}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full text-[13px] transition-transform duration-150",
        "hover:-translate-y-px active:scale-[0.96]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
        toneClass[tone],
      )}
    >
      {silent ? <VolumeX size={15} strokeWidth={1.75} /> : <Volume2 size={15} strokeWidth={1.75} />}
    </button>
  );
}
