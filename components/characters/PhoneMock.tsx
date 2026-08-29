"use client";

import { useState } from "react";
import { ChevronLeft, Signal, Wifi, Battery } from "lucide-react";
import type { Character } from "@/data/characters";
import { phoneFlavorOf, type PhoneTheme } from "@/data/phones";
import { cn } from "@/lib/cn";

type Screen = "lock" | "home" | "messages" | "calendar" | "yuseong" | "transit" | "notes";

const THEMES: Record<PhoneTheme, string> = {
  slate: "from-[#1e293b] via-[#0f172a] to-[#020617]",
  rose: "from-[#4a2c38] via-[#1c1418] to-[#120c10]",
  ink: "from-[#111827] via-[#0b1220] to-[#030712]",
  lilac: "from-[#2e1065] via-[#1e1b4b] to-[#0f0a1f]",
  mint: "from-[#134e4a] via-[#042f2e] to-[#022c22]",
  gold: "from-[#431407] via-[#1c1410] to-[#0c0a09]",
};

export function PhoneMock({ character, onClose }: { character: Character; onClose: () => void }) {
  const [screen, setScreen] = useState<Screen>("lock");
  const flavor = phoneFlavorOf(character);

  return (
    <div className="mx-auto w-[min(100%,320px)]">
      <div className="relative overflow-hidden rounded-[2.4rem] border-[8px] border-[#1a1d24] bg-black shadow-[0_20px_60px_rgb(0_0_0_/_0.45)]">
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[108px] -translate-x-1/2 rounded-full bg-[#0b0d12]" />
        <div className={cn("relative min-h-[560px] bg-gradient-to-b text-white", THEMES[flavor.theme])}>
          <StatusBar />
          {screen === "lock" && (
            <LockScreen character={character} wallpaper={character.phone?.wallpaper} onUnlock={() => setScreen("home")} />
          )}
          {screen === "home" && <HomeScreen character={character} onOpen={setScreen} />}
          {screen === "messages" && (
            <MessagesScreen character={character} onBack={() => setScreen("home")} />
          )}
          {screen === "calendar" && <CalendarScreen character={character} onBack={() => setScreen("home")} />}
          {screen === "yuseong" && <YuseongScreen character={character} onBack={() => setScreen("home")} />}
          {screen === "transit" && <TransitScreen character={character} onBack={() => setScreen("home")} />}
          {screen === "notes" && <NotesScreen character={character} onBack={() => setScreen("home")} />}
        </div>
        <button
          type="button"
          aria-label="홈 화면"
          onClick={() => setScreen("home")}
          className="absolute bottom-2 left-1/2 z-20 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/40"
        />
      </div>
      <button type="button" onClick={onClose} className="mt-3 w-full min-h-11 text-sm text-[#4d5c6a]">
        휴대폰 닫기
      </button>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="relative z-10 flex items-center justify-between px-6 pb-1 pt-3 text-[10px] text-white/80">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <Signal size={10} />
        <Wifi size={10} />
        <Battery size={12} />
      </span>
    </div>
  );
}

function LockScreen({
  character,
  wallpaper,
  onUnlock,
}: {
  character: Character;
  wallpaper?: string;
  onUnlock: () => void;
}) {
  return (
    <button type="button" onClick={onUnlock} className="flex min-h-[520px] w-full flex-col px-6 pb-10 pt-16 text-left">
      <p className="text-[12px] tracking-[0.22em] text-white/50">잠금화면</p>
      <p className="mt-6 text-6xl font-extralight">9:41</p>
      <p className="mt-1 text-sm text-white/70">9월 18일 수요일</p>
      <div className="mt-auto rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
        <p className="text-[11px] text-white/55">{wallpaper}</p>
        <p className="mt-1 text-sm">{character.name}</p>
        <p className="text-[12px] text-white/70">{character.phone?.lastMessage}</p>
        <p className="mt-3 text-center text-[11px] text-white/40">탭하여 잠금 해제</p>
      </div>
    </button>
  );
}

function HomeScreen({
  character,
  onOpen,
}: {
  character: Character;
  onOpen: (screen: Screen) => void;
}) {
  const apps: { id: Screen; label: string; glyph: string }[] = [
    { id: "messages", label: "메시지", glyph: "💬" },
    { id: "calendar", label: "시간표", glyph: "📅" },
    { id: "yuseong", label: "유성출결", glyph: "✦" },
    { id: "transit", label: "교통", glyph: "🚇" },
    { id: "notes", label: "메모", glyph: "✎" },
  ];

  return (
    <div className="px-5 pb-8 pt-6">
      <p className="text-[11px] tracking-[0.2em] text-white/40">{character.school}</p>
      <p className="mt-1 text-lg font-medium">{character.name}</p>
      <ul className="mt-6 grid grid-cols-4 gap-3">
        {apps.map((app) => (
          <li key={app.id}>
            <button
              type="button"
              onClick={() => onOpen(app.id)}
              className="flex w-full flex-col items-center gap-1"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-white/15 text-lg backdrop-blur-sm">
                {app.glyph}
              </span>
              <span className="text-[10px] text-white/80">{app.label}</span>
            </button>
          </li>
        ))}
        <li className="flex flex-col items-center gap-1 opacity-60">
          <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-lg">📷</span>
          <span className="text-[10px] text-white/70">앨범</span>
        </li>
      </ul>
      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-3">
        <p className="text-[10px] tracking-[0.16em] text-white/40">WIDGET</p>
        <p className="mt-1 text-sm">{character.status}</p>
        <p className="mt-1 text-[11px] text-white/55">{character.education}</p>
      </div>
    </div>
  );
}

function AppChrome({
  title,
  onBack,
  children,
}: {
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[520px] bg-[#f4f1ea] text-[#1c1916]">
      <div className="flex items-center gap-1 border-b border-black/10 bg-white/80 px-2 py-2">
        <button type="button" onClick={onBack} className="grid size-10 place-items-center" aria-label="뒤로">
          <ChevronLeft size={18} />
        </button>
        <p className="text-sm font-medium">{title}</p>
      </div>
      {children}
    </div>
  );
}

function MessagesScreen({ character, onBack }: { character: Character; onBack: () => void }) {
  const flavor = phoneFlavorOf(character);
  return (
    <AppChrome title={flavor.threadName} onBack={onBack}>
      <ul className="space-y-2 px-3 py-4">
        {flavor.messages.map((msg, i) => (
          <li key={i} className={cn("flex", msg.me ? "justify-end" : "justify-start")}>
            <span
              className={cn(
                "max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed",
                msg.me ? "bg-[#fee500] text-black" : "bg-white text-[#1c1916] shadow-sm",
              )}
            >
              {msg.text}
              <span className="mt-1 block text-right text-[10px] opacity-50">{msg.time}</span>
            </span>
          </li>
        ))}
      </ul>
    </AppChrome>
  );
}

function CalendarScreen({ character, onBack }: { character: Character; onBack: () => void }) {
  return (
    <AppChrome title="오늘 일정" onBack={onBack}>
      <ul className="px-4 py-3">
        {character.schedule.map((row) => (
          <li key={row.time} className="grid grid-cols-[4rem_1fr] gap-3 border-b border-black/10 py-3 text-sm">
            <span className="font-mono text-[#9a3412]">{row.time}</span>
            <span>{row.label}</span>
          </li>
        ))}
      </ul>
    </AppChrome>
  );
}

function YuseongScreen({ character, onBack }: { character: Character; onBack: () => void }) {
  return (
    <AppChrome title="유성 출결" onBack={onBack}>
      <div className="px-4 py-4">
        <div className="rounded-xl bg-[#132238] p-4 text-[#f4f1ea]">
          <p className="text-[10px] tracking-[0.2em] opacity-60">YUSEONG QR</p>
          <div className="mx-auto mt-3 grid size-28 grid-cols-5 gap-1 bg-white p-2">
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i} className={cn("block", i % 3 === 0 || i % 7 === 0 ? "bg-black" : "bg-neutral-300")} />
            ))}
          </div>
          <p className="mt-3 text-center text-xs">{character.name} · {character.classIds.join(" / ")}</p>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg bg-white p-3">
            <dt className="text-[11px] text-neutral-500">이번 달 출석</dt>
            <dd className="text-lg font-medium">94%</dd>
          </div>
          <div className="rounded-lg bg-white p-3">
            <dt className="text-[11px] text-neutral-500">지각</dt>
            <dd className="text-lg font-medium">{character.id === "songa" ? "2" : "0"}</dd>
          </div>
        </dl>
      </div>
    </AppChrome>
  );
}

function TransitScreen({ character, onBack }: { character: Character; onBack: () => void }) {
  const flavor = phoneFlavorOf(character);
  return (
    <AppChrome title="교통" onBack={onBack}>
      <div className="px-4 py-4">
        <p className="text-[11px] tracking-[0.16em] text-neutral-500">NEXT TRAIN</p>
        <p className="mt-1 text-xl font-medium">{flavor.transitLine}</p>
        <p className="mt-1 text-sm text-[#9a3412]">{flavor.transitEta}</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-full bg-[#1d4e89]"
            style={{ width: `${Math.min(96, (character.commuteMinutes ?? 20) / 90 * 100)}%` }}
          />
        </div>
        <p className="mt-2 text-[12px] text-neutral-600">
          {character.commuteMinutes ? `유성 본원까지 약 ${character.commuteMinutes}분` : "내부 이동"}
        </p>
      </div>
    </AppChrome>
  );
}

function NotesScreen({ character, onBack }: { character: Character; onBack: () => void }) {
  const flavor = phoneFlavorOf(character);
  return (
    <AppChrome title="메모" onBack={onBack}>
      <ul className="space-y-2 px-4 py-4">
        {flavor.notes.map((note) => (
          <li key={note} className="rounded-lg bg-[#fff4b0] px-3 py-3 text-sm shadow-sm">
            {note}
          </li>
        ))}
      </ul>
    </AppChrome>
  );
}
