"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { useAudio } from "@/components/audio/AudioProvider";
import { Wordmark } from "@/components/chrome/Wordmark";
import { cn } from "@/lib/cn";

const MENUS = [
  {
    href: "/world",
    num: "01",
    title: "세계관 안내",
    caption: "게이트부터 학원비까지",
    kind: "world" as const,
  },
  {
    href: "/characters",
    num: "02",
    title: "학생 열람",
    caption: "학생 8 · 교직원 2",
    kind: "characters" as const,
  },
  {
    href: "/map",
    num: "03",
    title: "서울 생활권",
    caption: "학교와 유성아카데미",
    kind: "map" as const,
  },
  {
    href: "/placement",
    num: "04",
    title: "반 배정 받기",
    caption: "유성 사전상담",
    kind: "placement" as const,
  },
];

export function HomePortal() {
  const { startBgm } = useAudio();

  return (
    <main className="home-tex min-h-dvh overflow-hidden text-[#1c2330]">
      <div className="relative z-[1] mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 pb-10 pt-6 sm:max-w-4xl sm:px-8 lg:max-w-5xl">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-[#1c2330]/45">2040 · PORTAL</p>
            <Wordmark tone="home" href="/" />
            <p className="mt-3 text-[13px] text-[#1c2330]/55">9월 · 서울 대치동</p>
            <p className="text-[13px] text-[#1c2330]/45">오늘도 정상 수강 중.</p>
          </div>
          <AudioToggle tone="home" />
        </header>

        <ul className="mt-6 grid grid-cols-3 gap-2 text-[11px]">
          {[
            ["수면", "부족"],
            ["출결", "정상"],
            ["학원", "22:00 종료"],
          ].map(([k, v]) => (
            <li key={k} className="hud-chip rounded-2xl px-3 py-2">
              <p className="tracking-[0.16em] text-[#1c2330]/40">{k}</p>
              <p className="mt-0.5 font-medium">{v}</p>
            </li>
          ))}
        </ul>

        <section className="mt-6 flex flex-1 flex-col gap-3 sm:gap-3.5" aria-label="메인 메뉴">
          {MENUS.map((menu) => (
            <MenuCard key={menu.href} {...menu} onOpen={startBgm} />
          ))}
        </section>

        <div className="mt-8">
          <div className="h-1.5 overflow-hidden rounded-full bg-[#1c2330]/10">
            <div className="h-full w-[62%] rounded-full bg-[#1c2330]/55" />
          </div>
          <p className="mt-2 text-center text-[11px] tracking-wide text-[#1c2330]/40">
            학기 진행 62% · 각성은 랜덤 · 시간표는 확정
          </p>
        </div>
      </div>
    </main>
  );
}

function MenuCard({
  href,
  num,
  title,
  caption,
  kind,
  onOpen,
}: (typeof MENUS)[number] & { onOpen: () => void }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: fine)").matches === false) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translateY(-3px) translate(${x * 6}px, ${y * 4}px)`;
  };

  const reset = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "";
  };

  return (
    <Link
      ref={cardRef}
      href={href}
      onPointerDown={onOpen}
      onClick={onOpen}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "home-card game-frame group relative flex min-h-[5.8rem] items-center justify-between overflow-hidden rounded-[28px] px-5 py-4 sm:min-h-[6.4rem] sm:px-7",
        "border border-white/70 bg-white/60 backdrop-blur-xl",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c2330]",
      )}
    >
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#1c2330]/20 to-transparent" />
      <div className="flex min-w-0 items-center gap-4 sm:gap-6">
        <Glyph kind={kind} />
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-[0.22em] text-[#1c2330]/40">{num}</p>
          <h2 className="truncate text-[22px] font-medium tracking-tight sm:text-[26px]">{title}</h2>
          <p className="truncate text-[13px] text-[#1c2330]/50">{caption}</p>
        </div>
      </div>
      <ArrowUpRight
        aria-hidden
        className="size-5 shrink-0 text-[#1c2330]/35 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

function Glyph({ kind }: { kind: (typeof MENUS)[number]["kind"] }) {
  if (kind === "world") {
    return (
      <span className="relative grid size-12 shrink-0 place-items-center" aria-hidden>
        <span className="gate-ring absolute inset-0 rounded-full border border-dashed border-[#1c2330]/25" />
        <span className="absolute inset-1.5 rounded-full border border-[#1c2330]/15" />
        <span className="size-2 rounded-full bg-[#1c2330]/70" />
      </span>
    );
  }

  if (kind === "characters") {
    return (
      <span className="relative size-12 shrink-0" aria-hidden>
        <span className="absolute left-2 top-2 h-8 w-6 rounded-[4px] bg-[#c9d3dc]" />
        <span className="id-float absolute left-3.5 top-1.5 h-8 w-6 rounded-[4px] bg-[#e8edf2] shadow-sm" />
        <span className="absolute left-5 top-3 h-8 w-6 rounded-[4px] border border-[#1c2330]/15 bg-white" />
      </span>
    );
  }

  if (kind === "map") {
    return (
      <span className="relative grid size-12 shrink-0 place-items-center text-[#1c2330]" aria-hidden>
        <span className="pin-pulse relative size-2.5 rounded-full bg-[#c23b2a]" />
      </span>
    );
  }

  return (
    <span className="check-swap relative grid size-12 shrink-0 place-items-center" aria-hidden>
      <span className="absolute size-5 rounded-[4px] border border-[#1c2330]/30" />
      <span className="absolute text-[13px] text-[#1c2330]/70">✓</span>
      <span className="absolute text-[13px] text-[#1c2330]/70">●</span>
    </span>
  );
}
