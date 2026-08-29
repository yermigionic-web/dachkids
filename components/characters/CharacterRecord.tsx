"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { BackLink } from "@/components/chrome/BackLink";
import { Wordmark } from "@/components/chrome/Wordmark";
import { PhoneMock } from "@/components/characters/PhoneMock";
import { ImageWithFallback } from "@/components/media/ImageWithFallback";
import { classLabel, type Character } from "@/data/characters";
import { ACADEMY_CLASSES } from "@/data/classes";
import { cn } from "@/lib/cn";

type Drawer = "phone" | "timetable" | "training" | null;

export function CharacterRecord({ character }: { character: Character }) {
  const [drawer, setDrawer] = useState<Drawer>(null);
  const titleId = useId();

  useEffect(() => {
    if (!drawer) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawer(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  return (
    <main className="archive-tex min-h-dvh text-[#1e2a36]">
      <div className="relative z-[1] mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <header className="flex items-start justify-between gap-3">
          <div>
            <BackLink href="/characters" label="기록 목록" tone="archive" />
            <div className="mt-3">
              <Wordmark tone="archive" compact />
            </div>
          </div>
          <AudioToggle tone="archive" />
        </header>

        <div className="mt-6 overflow-hidden border border-[#6d7c89] bg-[#e7edf2] shadow-[6px_8px_0_rgb(36_48_64_/_0.15)]">
          <div className="flex items-center justify-between bg-[#243040] px-4 py-2 text-[10px] tracking-[0.22em] text-[#d5dde4]">
            <span>FILE / {character.id.toUpperCase()}</span>
            <span>{character.role === "staff" ? "STAFF" : "STUDENT"}</span>
          </div>
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <section className="relative border-b border-[#8a96a3] lg:border-b-0 lg:border-r">
              <ImageWithFallback
                src={character.image}
                fileHint={character.image}
                alt={`${character.name} 인물 사진 자리`}
                label={character.name}
                variant="character"
                className="aspect-[3/4] w-full"
              />
              <div className="id-holo pointer-events-none absolute inset-0 opacity-40" />
              <p className="border-t border-[#8a96a3] px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-[#5b6773]">
                {character.image.replace("/assets/characters/", "")}
              </p>
            </section>

            <section className="p-4 sm:p-5">
              <p className="font-mono text-[10px] tracking-[0.22em] text-[#6b7784]">
                {character.role === "staff" ? "STAFF FILE" : "STUDENT FILE"}
              </p>
              <h1 className="mt-2 text-[32px] font-medium tracking-tight">{character.name}</h1>
              <p className="text-sm text-[#5b6773]">{character.nameEn}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="border border-[#8a96a3] bg-white/60 py-2">
                  <p className="text-[#6b7784]">나이</p>
                  <p className="text-base">{character.age}</p>
                </div>
                <div className="border border-[#8a96a3] bg-white/60 py-2">
                  <p className="text-[#6b7784]">반</p>
                  <p className="text-base">{classLabel(character)}</p>
                </div>
                <div className="border border-[#8a96a3] bg-white/60 py-2">
                  <p className="text-[#6b7784]">통학</p>
                  <p className="text-base">{character.commuteMinutes ? `${character.commuteMinutes}분` : "—"}</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                {character.school}
                {character.grade ? ` ${character.grade}` : character.staffTitle ? ` · ${character.staffTitle}` : ""}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#3a4652]">{character.look}</p>
              <p className="mt-2 text-sm leading-relaxed">{character.notes}</p>
            </section>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Block title="요즘">{character.lately}</Block>
          <Block title="싫어하는 말">
            <span className="font-serif text-lg">“{character.dislikedLine}”</span>
          </Block>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Block title="잘하는 것">
            <ul className="space-y-1 text-sm">
              {character.strengths.map((s) => (
                <li key={s} className="border-b border-[#c5ced6] py-1">
                  {s}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="가방 안 · INVENTORY">
            <ul className="grid grid-cols-2 gap-1.5 text-[12px]">
              {character.bag.map((item) => (
                <li key={item} className="border border-dashed border-[#7d8b97] bg-[#f4f7f9] px-2 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="일정">
            <ul className="text-sm">
              {character.schedule.map((row) => (
                <li key={row.time} className="grid grid-cols-[3.4rem_1fr] gap-2 border-b border-[#c5ced6] py-1.5">
                  <span className="font-mono text-[12px]">{row.time}</span>
                  <span>{row.label}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <Block title="현재 교육" className="mt-4">
          <p>{character.education}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {character.classIds.map((id) => (
              <span key={id} className="border border-[#243040]/30 bg-white/70 px-2 py-1 font-mono text-[11px]">
                {ACADEMY_CLASSES[id].id} · {ACADEMY_CLASSES[id].ko}
              </span>
            ))}
          </div>
        </Block>

        <div className="mt-5 flex flex-wrap gap-2">
          <DrawerButton active={drawer === "phone"} onClick={() => setDrawer("phone")}>
            휴대폰
          </DrawerButton>
          <DrawerButton active={drawer === "timetable"} onClick={() => setDrawer("timetable")}>
            시간표
          </DrawerButton>
          {character.trainingLog && (
            <DrawerButton active={drawer === "training"} onClick={() => setDrawer("training")}>
              훈련기록
            </DrawerButton>
          )}
        </div>

        {character.schoolLocationId && (
          <p className="mt-6 text-sm">
            <Link href="/map" className="underline underline-offset-4">
              지도에서 통학 경로 보기
            </Link>
          </p>
        )}
      </div>

      {drawer && (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-[#1e2a36]/50 p-3 sm:items-center"
          role="presentation"
          onClick={() => setDrawer(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "w-full shadow-2xl",
              drawer === "phone" ? "max-w-sm bg-transparent" : "max-w-md border border-[#8a96a3] bg-[#eef1f4] p-4",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {drawer !== "phone" && (
              <div className="flex items-center justify-between">
                <h2 id={titleId} className="font-medium">
                  {drawer === "timetable" && "시간표"}
                  {drawer === "training" && "훈련기록"}
                </h2>
                <button type="button" onClick={() => setDrawer(null)} className="grid size-10 place-items-center" aria-label="닫기">
                  <X size={16} />
                </button>
              </div>
            )}
            {drawer === "phone" && character.phone && (
              <div>
                <h2 id={titleId} className="sr-only">
                  휴대폰
                </h2>
                <PhoneMock character={character} onClose={() => setDrawer(null)} />
              </div>
            )}
            {drawer === "timetable" && (
              <ul className="mt-3 text-sm">
                {character.schedule.map((row) => (
                  <li key={row.time} className="flex justify-between border-b border-[#c5ced6] py-2">
                    <span className="font-mono">{row.time}</span>
                    <span>{row.label}</span>
                  </li>
                ))}
              </ul>
            )}
            {drawer === "training" && (
              <ul className="mt-3 space-y-2 text-sm">
                {character.trainingLog?.map((log) => (
                  <li key={log.date + log.title} className="border border-[#c5ced6] bg-white/70 px-3 py-2">
                    <p className="font-mono text-[11px] text-[#6b7784]">{log.date}</p>
                    <p className="font-medium">{log.title}</p>
                    <p className="text-[#5b6773]">{log.note}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function Block({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border border-[#8a96a3] bg-[#eef1f4]/90 p-4 shadow-[3px_3px_0_rgb(36_48_64_/_0.08)]", className)}>
      <h2 className="mb-2 font-mono text-[10px] tracking-[0.2em] text-[#6b7784]">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function DrawerButton({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 border px-4 text-sm",
        active ? "border-[#1e2a36] bg-[#1e2a36] text-white" : "border-[#8a96a3] bg-[#eef1f4]",
      )}
    >
      {children}
    </button>
  );
}
