"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { BackLink } from "@/components/chrome/BackLink";
import { Wordmark } from "@/components/chrome/Wordmark";
import { ClassCrest } from "@/components/placement/ClassCrest";
import { YSigil } from "@/components/placement/YSigil";
import { classmatesOf } from "@/data/characters";
import { ACADEMY_CLASSES, type ClassId } from "@/data/classes";
import {
  PLACEMENT_QUESTIONS,
  PLACEMENT_STORAGE_KEY,
  tallyPlacement,
  type ScoreMap,
} from "@/data/placement";
import { cn } from "@/lib/cn";

type Stage = "intro" | "quiz" | "result";

type Saved = {
  result: ClassId;
  novaEligible: boolean;
  scores: ScoreMap;
  savedAt: string;
};

export function PlacementFlow() {
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState<Saved | null>(null);
  const [result, setResult] = useState<Saved | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(PLACEMENT_STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw) as Saved);
    } catch {
      setSaved(null);
    }
  }, []);

  const question = PLACEMENT_QUESTIONS[index];
  const total = PLACEMENT_QUESTIONS.length;
  const glow = result ? ACADEMY_CLASSES[result.result].sort.glow : "#e8c872";

  const choose = (optionId: string) => {
    if (pending) return;
    const nextAnswers = { ...answers, [question.id]: optionId };
    setAnswers(nextAnswers);
    setPending(true);
    window.setTimeout(() => {
      if (index + 1 >= total) {
        const tallied = tallyPlacement(nextAnswers);
        const payload: Saved = {
          result: tallied.result,
          novaEligible: tallied.novaEligible,
          scores: tallied.scores,
          savedAt: new Date().toISOString(),
        };
        setResult(payload);
        setStage("result");
      } else {
        setIndex((n) => n + 1);
      }
      setPending(false);
    }, 280);
  };

  const persist = () => {
    if (!result) return;
    window.localStorage.setItem(PLACEMENT_STORAGE_KEY, JSON.stringify(result));
    setSaved(result);
  };

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setResult(null);
    setStage("quiz");
  };

  return (
    <main className="sort-tex min-h-dvh overflow-hidden text-[#f4ead8]">
      <Dust />
      <div
        className="pointer-events-none absolute left-1/2 top-24 z-0 h-48 w-48 -translate-x-1/2 rounded-full sort-glow"
        style={{ background: glow }}
      />
      <div className="relative z-[1] mx-auto flex min-h-dvh max-w-[760px] flex-col px-4 py-6 sm:px-6">
        <header className="flex items-start justify-between gap-3">
          <div>
            <BackLink tone="consult" />
            <div className="mt-3">
              <Wordmark tone="consult" compact />
            </div>
          </div>
          <AudioToggle tone="consult" />
        </header>

        {stage === "intro" && (
          <Intro saved={saved} onStart={() => setStage("quiz")} onSaved={() => saved && (setResult(saved), setStage("result"))} />
        )}
        {stage === "quiz" && question && (
          <Quiz
            index={index}
            total={total}
            text={question.text}
            hint={question.hint}
            options={question.options}
            pending={pending}
            onChoose={choose}
          />
        )}
        {stage === "result" && result && (
          <ResultCard result={result} saved={saved} onSave={persist} onRestart={restart} />
        )}
      </div>
    </main>
  );
}

function Dust() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute size-1 rounded-full bg-[#e8c872]"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 29) % 100}%`,
            opacity: 0.15 + (i % 5) * 0.05,
            animation: `float-dust ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Intro({
  saved,
  onStart,
  onSaved,
}: {
  saved: Saved | null;
  onStart: () => void;
  onSaved: () => void;
}) {
  return (
    <section className="relative mt-10 border border-[#e8c872]/35 bg-[#14110c]/70 px-5 py-10 text-center sm:px-8">
      <YSigil />
      <p className="text-[11px] tracking-[0.38em] text-[#e8c872]">YUSEONG SORTING</p>
      <h1 className="mt-4 font-serif text-[32px] leading-tight text-[#f8f1d4] sm:text-[42px]">수강반이 당신을 고른다</h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#cbb99a]">
        MBTI 같은 게 아니랍니다. 유성에 들어왔거나 들어오려 하는 바로 너! 당신의 일정과 목표, 현재 상태를 입력하여 상담을 끝내고 반에 배정됩시다.
      </p>
      <p className="mt-5 text-[12px] tracking-widest text-[#e8c872]/70">예상 소요 3분</p>
      <ul className="mt-6 space-y-1 text-[12px] text-[#a89478]">
        <li>※ 각성등급을 예측하지 않습니다.</li>
        <li>※ 결과는 실제 입학/진로를 보장하지 않습니다.</li>
      </ul>
      <button
        type="button"
        onClick={onStart}
        className="mt-8 min-h-12 w-full bg-gradient-to-r from-[#8a6a2a] to-[#e8c872] text-sm font-medium text-[#1a1208]"
      >
        문을 연다
      </button>
      {saved && (
        <button type="button" onClick={onSaved} className="mt-3 min-h-11 w-full border border-[#e8c872]/40 text-sm text-[#e8c872]">
          지난 결과 보기 · {ACADEMY_CLASSES[saved.result].id}
        </button>
      )}
      <p className="mt-6 text-center text-[12px] leading-relaxed text-[#8a7a62]">
        Q. 그럼 보장하는 게 뭐임??
        <br />
        A. 시간표랑 주의사항만 알면 되지 ㅋㅋ
      </p>
    </section>
  );
}

function Quiz({
  index,
  total,
  text,
  hint,
  options,
  pending,
  onChoose,
}: {
  index: number;
  total: number;
  text: string;
  hint?: string;
  options: { id: string; label: string }[];
  pending: boolean;
  onChoose: (id: string) => void;
}) {
  return (
    <section className="mt-10">
      <p className="font-mono text-[12px] tracking-[0.28em] text-[#e8c872]">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
      <div className="mt-3 h-[3px] bg-[#2a2418]">
        <div className="h-full bg-[#e8c872] transition-all" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>
      <h1 className="mt-8 font-serif text-[26px] leading-snug text-[#f8f1d4] sm:text-[32px]">{text}</h1>
      {hint && <p className="mt-2 text-sm text-[#a89478]">{hint}</p>}
      <ul className="mt-8 space-y-2">
        {options.map((option, i) => (
          <li key={option.id}>
            <button
              type="button"
              disabled={pending}
              onClick={() => onChoose(option.id)}
              className={cn(
                "min-h-14 w-full border border-[#e8c872]/25 bg-[#14110c]/80 px-4 text-left text-[15px] text-[#f4ead8]",
                "transition-all hover:border-[#e8c872] hover:bg-[#e8c872]/10 disabled:opacity-60",
              )}
            >
              <span className="mr-3 font-mono text-[11px] text-[#e8c872]">{String.fromCharCode(65 + i)}</span>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ResultCard({
  result,
  saved,
  onSave,
  onRestart,
}: {
  result: Saved;
  saved: Saved | null;
  onSave: () => void;
  onRestart: () => void;
}) {
  const klass = ACADEMY_CLASSES[result.result];
  const peers = classmatesOf(result.result);

  return (
    <section className="reveal-crest relative mt-8 overflow-hidden border px-5 py-10 text-center sm:px-8"
      style={{
        background: `linear-gradient(180deg, ${klass.sort.from}, ${klass.sort.to})`,
        borderColor: klass.sort.gold,
        color: "#f8f1d4",
      }}
    >
      <ClassCrest classId={klass.id} colors={klass.sort} />
      <p className="text-[11px] tracking-[0.38em]" style={{ color: klass.sort.gold }}>THE SORTING IS COMPLETE</p>
      <h1 className="mt-3 font-mono text-[13px] tracking-[0.32em]">{klass.id}</h1>
      <p className="mt-2 font-serif text-[48px] leading-none">{klass.ko}</p>
      <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-snug">“{klass.tagline}”</p>
      <p className="mx-auto mt-4 max-w-xl text-left text-sm leading-relaxed text-[#f8f1d4]/80">{klass.summary}</p>

      <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
        <div className="border border-white/15 bg-black/20 p-4">
          <p className="text-[11px] tracking-[0.16em] opacity-70">추천</p>
          <ul className="mt-2 space-y-1 text-sm">
            {klass.recommended.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-white/15 bg-black/20 p-4">
          <p className="text-[11px] tracking-[0.16em] opacity-70">주의</p>
          <ul className="mt-2 space-y-1 text-sm">
            {klass.caution.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {peers.length > 0 && (
        <div className="mt-6 text-left">
          <p className="text-[11px] tracking-[0.16em] opacity-70">같은 반</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {peers.map((p) => (
              <li key={p.id}>
                <Link href={`/characters/${p.id}`} className="border px-2 py-1 text-sm" style={{ borderColor: klass.sort.gold }}>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={onRestart} className="min-h-12 flex-1 border text-sm" style={{ borderColor: klass.sort.gold }}>
          다시 검사
        </button>
        <button
          type="button"
          onClick={onSave}
          className="min-h-12 flex-1 text-sm text-[#1a1208]"
          style={{ background: klass.sort.gold }}
        >
          {saved?.result === result.result ? "결과 저장됨" : "결과 저장"}
        </button>
      </div>
    </section>
  );
}
