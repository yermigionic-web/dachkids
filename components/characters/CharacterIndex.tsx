"use client";

import Link from "next/link";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { BackLink } from "@/components/chrome/BackLink";
import { Wordmark } from "@/components/chrome/Wordmark";
import { ImageWithFallback } from "@/components/media/ImageWithFallback";
import { classLabel, type Character } from "@/data/characters";
import { cn } from "@/lib/cn";

export function CharacterIndex({
  students,
  staff,
}: {
  students: Character[];
  staff: Character[];
}) {
  return (
    <main className="archive-tex min-h-dvh text-[#243040]">
      <div className="relative z-[1] mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <header className="mb-8 flex items-start justify-between gap-4 border-b border-[#6d7c89] pb-4">
          <div>
            <BackLink tone="archive" />
            <div className="mt-4 flex items-end gap-4">
              <Wordmark tone="archive" />
              <p className="hidden pb-0.5 font-mono text-[10px] tracking-[0.28em] text-[#6b7784] sm:block">
                STUDENT INDEX
              </p>
            </div>
            <h1 className="mt-5 text-[28px] font-medium tracking-tight sm:text-[34px]">학생 기록</h1>
            <p className="mt-1 text-sm text-[#5b6773]">보관실 열람 · 학생증 / 수강증 · 뽑기처럼 집어가기</p>
          </div>
          <AudioToggle tone="archive" />
        </header>

        <section aria-labelledby="students-heading">
          <h2 id="students-heading" className="mb-3 font-mono text-[11px] tracking-[0.22em] text-[#6b7784]">
            학생 · {students.length}
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {students.map((c) => (
              <li key={c.id}>
                <IdCard character={c} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="staff-heading">
          <h2 id="staff-heading" className="mb-3 font-mono text-[11px] tracking-[0.22em] text-[#6b7784]">
            교직원 · {staff.length}
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((c) => (
              <li key={c.id}>
                <IdCard character={c} staff />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function IdCard({ character, staff = false }: { character: Character; staff?: boolean }) {
  return (
    <Link
      href={`/characters/${character.id}`}
      className={cn(
        "group relative block min-h-[12.5rem] overflow-hidden border border-[#6d7c89] bg-[#eef1f4] p-3",
        "shadow-[4px_5px_0_rgb(36_48_64_/_0.12)]",
        "transition-transform duration-200 hover:rotate-[1.2deg] focus-visible:rotate-[1.2deg]",
      )}
    >
      <span className="absolute left-3 top-0 h-4 w-4 -translate-y-1/2 rounded-full border border-[#6d7c89] bg-[#c9d2db]" />
      <p className="flex justify-between font-mono text-[9px] tracking-[0.18em] text-[#6b7784]">
        <span>{staff ? "STAFF PASS" : "STUDENT ID"}</span>
        <span>YUSEONG</span>
      </p>
      <div className="mt-2 grid grid-cols-[5.5rem_1fr] gap-3">
        <div className="relative">
          <ImageWithFallback
            src={character.image}
            fileHint={character.image}
            alt={`${character.name} 사진 자리`}
            label={character.name}
            variant="character"
            className="aspect-[3/4] border border-[#7d8b97]"
          />
          <span className="id-holo pointer-events-none absolute inset-0" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-medium">{character.name}</h3>
          <p className="text-[12px] text-[#5b6773]">
            {character.age} · {character.grade ?? character.staffTitle}
          </p>
          <p className="mt-1 truncate text-[11px] text-[#6b7784]">{character.school}</p>
          <p className="mt-2 inline-block border border-[#243040]/30 bg-white px-1.5 py-0.5 font-mono text-[10px]">
            {classLabel(character)}
          </p>
          <p className="mt-2 text-[11px] text-[#4d5c6a]">{character.status}</p>
        </div>
      </div>
      <div className="mt-3 h-3 bg-[repeating-linear-gradient(90deg,#243040_0_2px,transparent_2px_4px)] opacity-50" />
      <div className="pointer-events-none absolute inset-x-3 bottom-2 text-[10px] text-[#6b7784] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        뒷면 · {character.keywords.join(" / ")}
      </div>
    </Link>
  );
}
