"use client";

import Link from "next/link";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { BackLink } from "@/components/chrome/BackLink";
import { Wordmark } from "@/components/chrome/Wordmark";
import { ImageWithFallback } from "@/components/media/ImageWithFallback";
import {
  WORLD_ASSETS,
  WORLD_CAREERS,
  WORLD_COMMUNITY,
  WORLD_RECEIPT,
  WORLD_TIMETABLE,
} from "@/data/world";

export function WorldGuide() {
  return (
    <main className="world-grain min-h-dvh text-[#141414]">
      <div className="relative z-[1] mx-auto max-w-6xl px-3 py-5 sm:px-6 sm:py-8">
        <header className="mb-4 flex items-start justify-between gap-3 border-b-[3px] border-black pb-3">
          <div>
            <BackLink tone="world" />
            <div className="mt-3">
              <Wordmark tone="world" />
            </div>
          </div>
          <AudioToggle tone="world" />
        </header>

        <article className="border-[3px] border-black bg-[#f7f0dd] shadow-[10px_12px_0_#141414]">
          <Masthead />
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="space-y-0 border-black lg:col-span-7 lg:border-r-[3px]">
              <Section01 />
              <Section02 />
              <CatSlot
                src={WORLD_ASSETS.catTest}
                file="world-cat-test.png"
                caption="이게 맞아?"
                label="검사표 고양이"
              />
              <Section03 />
              <Section04 />
            </div>
            <div className="lg:col-span-5">
              <Section05 />
              <CatSlot
                src={WORLD_ASSETS.catSchedule}
                file="world-cat-schedule.png"
                caption="살려주세요ㅠ"
                label="시간표 고양이"
              />
              <Section06 />
              <CatSlot
                src={WORLD_ASSETS.catMoney}
                file="world-cat-money.png"
                caption="카드값은 확정"
                label="계산 고양이"
              />
            </div>
          </div>
          <div className="grid border-t-[3px] border-black lg:grid-cols-2">
            <Section07 />
            <Section08 />
          </div>
          <div className="grid border-t-[3px] border-black lg:grid-cols-[1.15fr_0.85fr]">
            <Section09 />
            <CatSlot
              src={WORLD_ASSETS.catCommute}
              file="world-cat-commute.png"
              caption="막차 계산 중"
              label="통학 고양이"
            />
          </div>
          <footer className="flex flex-col gap-3 border-t-[3px] border-black bg-[#c23b2a] px-4 py-4 text-[#f6f0e4] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] tracking-[0.18em]">대치헌터키즈 ☆ 2040 학생용 정보지 ver. 1.0</p>
              <p className="mt-1 text-sm">복사·공유 OK · S급 보장 안 함 · 학교 먼저</p>
            </div>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center border-2 border-[#f6f0e4] px-5 text-sm font-medium hover:bg-[#f6f0e4] hover:text-[#c23b2a]"
            >
              ← 메인으로
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}

function Masthead() {
  return (
    <header className="relative overflow-hidden border-b-[3px] border-black px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.32em]">2040 / SEOUL / 학생용 정보지</p>
        <ul className="flex gap-1 text-[11px]">
          {["학교", "각성", "수강", "수면"].map((item) => (
            <li key={item} className="flex items-center gap-1 border border-black px-1.5 py-0.5">
              <span className="size-2.5 border border-black" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 rotate-[-1deg] font-serif text-[15px] text-[#c23b2a] sm:text-[18px]">
        ☆ 와! 대치동 크래커보다 싸다! ☆ <span className="text-black">← 거짓말</span>
      </p>
      <h1 className="mt-2 font-serif text-[34px] leading-[0.95] sm:text-[56px]">
        각성은 랜덤.
        <br />
        시간표는 확정.
      </h1>
      <p className="mt-3 max-w-xl text-[14px] leading-relaxed">
        대치동 학생들이 단톡에 돌리는 헌터 사교육 정보지.
        이 페이지가 그 찌라시다. 캡처본을 붙이지 않는다.
      </p>
      <div className="mt-4 grid items-end gap-3 sm:grid-cols-[1fr_160px]">
        <LifeIcons />
        <div className="max-w-[160px]">
          <ImageWithFallback
            src={WORLD_ASSETS.catBoard}
            fileHint="world-cat-board.png"
            alt="단톡 고양이 밈 자리"
            label="단톡 고양이"
            variant="world"
            className="tilt-sticker aspect-square"
          />
        </div>
      </div>
      <span className="stamp absolute right-4 top-16 hidden sm:block">S급 보장 안 함</span>
    </header>
  );
}

function LifeIcons() {
  return (
    <svg viewBox="0 0 420 92" className="w-full" role="img" aria-label="교복, 문제집, 교통카드, 보호대 아이콘 콜라주">
      <rect x="4" y="18" width="70" height="58" fill="#fff" stroke="#141414" />
      <text x="39" y="44" textAnchor="middle" fontSize="10">수학Ⅱ</text>
      <text x="39" y="60" textAnchor="middle" fontSize="9">기출</text>
      <rect x="86" y="28" width="52" height="34" rx="4" fill="#1d3a5f" stroke="#141414" />
      <text x="112" y="49" textAnchor="middle" fontSize="9" fill="#f6f0e4">T-머니</text>
      <rect x="152" y="16" width="44" height="62" fill="#f4ead8" stroke="#141414" />
      <text x="174" y="50" textAnchor="middle" fontSize="9">학생증</text>
      <path d="M214 28 h58 v44 h-58 z" fill="#fff" stroke="#141414" />
      <text x="243" y="48" textAnchor="middle" fontSize="9">GS봉투</text>
      <rect x="286" y="34" width="48" height="28" rx="6" fill="#222" stroke="#141414" />
      <text x="310" y="52" textAnchor="middle" fontSize="9" fill="#eee">보호대</text>
      <rect x="348" y="20" width="64" height="52" fill="#fff3bf" stroke="#141414" />
      <text x="380" y="50" textAnchor="middle" fontSize="9">QR출결</text>
    </svg>
  );
}

function Box({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-b-2 border-black">
      <header className="flex items-baseline justify-between gap-3 bg-[#141414] px-3 py-2 text-[#f7f0dd]">
        <h2 className="font-serif text-lg sm:text-xl">
          <span className="mr-2 font-mono text-sm text-[#ffb4a8]">{num}</span>
          {title}
        </h2>
        <span aria-hidden className="text-[11px] tracking-[0.2em] opacity-60">
          ▶
        </span>
      </header>
      <div className="p-3 sm:p-4">{children}</div>
    </section>
  );
}

function Section01() {
  return (
    <Box num="01" title="헌터 준비생 이전에 고2">
      <p className="font-serif text-lg leading-snug">
        게이트가 열린 지 30년.
        <br />
        <span className="hl">수행평가는 아직도 있다.</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed">
        학생은 학생이다. 학교, 수행평가, 내신, 수능, 통학이 그대로 존재한다.
      </p>
      <ul className="mt-3 grid grid-cols-2 gap-1 text-[12px] sm:grid-cols-5">
        {["학교", "자습", "유성", "숙제", "복습"].map((item) => (
          <li key={item} className="border border-black bg-white px-2 py-2 text-center">
            □ {item}
          </li>
        ))}
      </ul>
    </Box>
  );
}

function Section02() {
  const bars = [
    { label: "마력감응", value: 42 },
    { label: "위기지각", value: 55 },
    { label: "집중", value: 61 },
    { label: "멘탈", value: 38 },
  ];
  return (
    <Box num="02" title="각성은 아직 모름">
      <ul className="grid gap-1 text-[13px] sm:grid-cols-2">
        <li className="border border-black bg-white px-2 py-1">각성 17세 전후 집중</li>
        <li className="border border-black bg-white px-2 py-1">각성률 약 5~8%</li>
        <li className="border border-black bg-white px-2 py-1">검사결과 ≠ 미래 확정</li>
        <li className="border border-black bg-white px-2 py-1">잠재력 ≠ 등급 · 미각성 ≠ 실패</li>
      </ul>
      <div className="mt-3 border border-black bg-white p-3">
        <p className="font-mono text-[10px] tracking-[0.18em] text-neutral-500">각성 검사 결과표 · 미확정</p>
        <div className="mt-2 space-y-2">
          {bars.map((bar) => (
            <div key={bar.label} className="grid grid-cols-[4.5rem_1fr_1.5rem] items-center gap-2 text-[12px]">
              <span>{bar.label}</span>
              <span className="h-2.5 border border-black bg-[#efe6d2]">
                <span className="block h-full bg-[#1d3a5f]" style={{ width: `${bar.value}%` }} />
              </span>
              <span className="font-mono text-[#c23b2a]">?</span>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}

function Section03() {
  return (
    <Box num="03" title="각성자 ≠ 헌터">
      <div className="border-2 border-black bg-white px-4 py-6 text-center">
        <p className="font-serif text-4xl">각성자</p>
        <p className="my-2 font-mono text-3xl text-[#c23b2a]">≠</p>
        <p className="font-serif text-4xl">헌터</p>
      </div>
      <p className="mt-3 text-sm">능력이 생긴 사람과 국가 면허를 가진 전문직은 다르다.</p>
      <p className="mt-2 rotate-[-1deg] border border-dashed border-black bg-[#fff3bf] px-3 py-2 text-[13px]">
        “운전할 줄 안다고 택시기사는 아니다.”
      </p>
    </Box>
  );
}

function Section04() {
  const subjects = ["공간인지", "마력감응", "위기판단", "실기", "진로설계", "상담"];
  return (
    <Box num="04" title="유성아카데미">
      <p className="font-serif text-lg">수학학원 사이에 헌터학원이 있는 시대.</p>
      <AcademyPortalMock />
      <div className="mt-3 grid grid-cols-3 gap-1 text-[12px]">
        {subjects.map((s) => (
          <span key={s} className="border border-black bg-white px-2 py-2 text-center">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-3 flex justify-end">
        <span className="stamp">S급 보장 안 함</span>
      </div>
    </Box>
  );
}

function AcademyPortalMock() {
  return (
    <div className="mt-3 overflow-hidden border border-black bg-white">
      <div className="flex items-center justify-between bg-[#132238] px-3 py-2 text-[11px] text-[#f6f0e4]">
        <span className="tracking-[0.16em]">YUSEONG · 학생</span>
        <span>알림 3</span>
      </div>
      <p className="border-b border-black/20 bg-[#1a2e48] px-3 py-1.5 text-[11px] text-[#f6f0e4]/80">
        공지 · 9월 모의던전 안전정지 기준 안내
      </p>
      <div className="grid grid-cols-3 divide-x divide-black/20 text-center text-[11px]">
        <div className="px-2 py-3">출결 현황</div>
        <div className="px-2 py-3">오늘 수업</div>
        <div className="px-2 py-3">과제 마감</div>
      </div>
    </div>
  );
}

function Section05() {
  return (
    <Box num="05" title="오늘 시간표">
      <table className="w-full border-collapse text-[13px]">
        <tbody>
          {WORLD_TIMETABLE.map((row) => (
            <tr key={row.time} className="border-b border-black/70">
              <th className="w-16 py-2 text-left font-mono font-medium">{row.time}</th>
              <td className="py-2 font-medium">{row.label}</td>
              <td className="py-2 text-right text-[11px] text-neutral-600">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 font-serif text-base leading-snug">
        각성 여부와 관계없이
        <br />
        내일 1교시는 온다.
      </p>
    </Box>
  );
}

function Section06() {
  return (
    <Box num="06" title="돈">
      <div className="mx-auto max-w-xs border border-dashed border-black bg-white px-3 py-3 font-mono text-[12px]">
        <p className="text-center text-[10px] tracking-[0.2em]">YUSEONG ACADEMY</p>
        <p className="text-center text-[10px]">****-****-0921</p>
        <ul className="mt-3 space-y-1">
          {WORLD_RECEIPT.map((row) => (
            <li key={row.item} className="flex justify-between gap-3">
              <span>{row.item}</span>
              <span>{row.value}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t border-dotted border-black pt-2 text-base">TOTAL ₩ ______</p>
      </div>
      <p className="mt-3 text-center font-serif">가능성은 모르겠고 카드값은 확정.</p>
    </Box>
  );
}

function Section07() {
  return (
    <Box num="07" title="헌터 말고도 많음">
      <svg viewBox="0 0 360 176" className="w-full" role="img" aria-label="각성자와 비각성자 진로가 교차하는 도식">
        <rect x="8" y="20" width="70" height="36" fill="#fff" stroke="#141414" />
        <text x="43" y="42" textAnchor="middle" fontSize="11">각성자</text>
        <rect x="282" y="20" width="70" height="36" fill="#fff" stroke="#141414" />
        <text x="317" y="42" textAnchor="middle" fontSize="11">비각성</text>
        <path d="M78 38 H160 M200 38 H282 M180 56 V78" fill="none" stroke="#141414" />
        <circle cx="180" cy="38" r="18" fill="#fff3bf" stroke="#141414" />
        <text x="180" y="42" textAnchor="middle" fontSize="10">교차</text>
        {[...WORLD_CAREERS.awakened, ...WORLD_CAREERS.either].map((label, i) => {
          const x = 12 + (i % 5) * 70;
          const y = 92 + Math.floor(i / 5) * 34;
          return (
            <g key={label}>
              <rect x={x} y={y} width="64" height="26" fill="#fff" stroke="#141414" />
              <text x={x + 32} y={y + 17} textAnchor="middle" fontSize="10">{label}</text>
            </g>
          );
        })}
      </svg>
    </Box>
  );
}

function Section08() {
  return (
    <Box num="08" title="커뮤니티는 이미 난리">
      <p className="mb-3 font-serif">본인도 모르는데 왜 커뮤엔 예상등급이 있음</p>
      <div className="grid gap-2 sm:grid-cols-2">
        <BoardMock
          title="DACHITA"
          tabs={["익명", "학교", "급식"]}
          posts={["통학 더움 실화?", "수2 쪽지시험 범위", "돈가스 나온 날"]}
        />
        <BoardMock
          title="YUSEONG BOARD"
          tabs={["잡담", "팀모집", "셔틀"]}
          posts={["별관 매트 미끄러움", "주말 실기 빈자리", "막차 계산표"]}
        />
      </div>
      <SnsGridMock />
      <ul className="mt-3 space-y-2">
        {WORLD_COMMUNITY.map((post) => (
          <li key={post.text} className="flex items-start gap-2 border border-black bg-white px-2 py-2 text-[12px]">
            <span className="mt-0.5 size-6 shrink-0 rounded-full border border-black bg-[#efe6d2]" />
            <span>
              <b className="mr-1">{post.board}</b>
              {post.text}
              <span className="mt-0.5 block text-[10px] text-neutral-500">{post.meta}</span>
            </span>
          </li>
        ))}
      </ul>
    </Box>
  );
}

function BoardMock({ title, tabs, posts }: { title: string; tabs: string[]; posts: string[] }) {
  return (
    <div className="border border-black bg-white text-[11px]">
      <div className="bg-[#132238] px-2 py-2 tracking-[0.14em] text-white">{title}</div>
      <div className="flex gap-1 border-b border-black/15 px-2 py-1">
        {tabs.map((t, i) => (
          <span key={t} className={i === 0 ? "bg-[#132238] px-1.5 text-white" : "px-1.5"}>
            {t}
          </span>
        ))}
      </div>
      <ul>
        {posts.map((p) => (
          <li key={p} className="border-b border-black/10 px-2 py-2">
            {p}
            <span className="ml-2 text-[10px] text-neutral-500">익명 · ♡ 12</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SnsGridMock() {
  const cells = ["급식", "커피", "야경", "필통", "고양이", "영수증", "가방", "노트", "잠금"];
  return (
    <div className="mt-2 border border-black bg-white p-2">
      <p className="mb-2 text-[10px] tracking-[0.16em] text-neutral-500">비공개 계정 · 팔로잉 요청됨</p>
      <div className="grid grid-cols-3 gap-px bg-black">
        {cells.map((c, i) => (
          <div
            key={c}
            className="aspect-square bg-[#efe6d2] text-center text-[10px] leading-[4.6rem]"
            style={{ background: i % 2 ? "#e8dcc4" : "#f3ead8" }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

function Section09() {
  return (
    <Box num="09" title="모의던전">
      <p className="font-serif text-lg">중단 판단도 평가다. 관절은 재시험이 안 된다.</p>
      <svg viewBox="0 0 360 180" className="mt-3 w-full border-2 border-black bg-[#e4dcc8]" role="img" aria-label="모의던전 평면도">
        <rect x="16" y="16" width="70" height="28" fill="#fff" stroke="#141414" />
        <text x="51" y="34" textAnchor="middle" fontSize="10">START</text>
        <rect x="274" y="136" width="70" height="28" fill="#fff" stroke="#141414" />
        <text x="309" y="154" textAnchor="middle" fontSize="10">EXIT</text>
        <rect x="70" y="58" width="86" height="40" fill="none" stroke="#141414" strokeDasharray="4 3" />
        <text x="113" y="82" textAnchor="middle" fontSize="10">센서</text>
        <rect x="210" y="40" width="64" height="32" fill="#fff" stroke="#141414" />
        <text x="242" y="60" textAnchor="middle" fontSize="10">드론</text>
        <rect x="118" y="112" width="92" height="28" fill="#fff" stroke="#c23b2a" />
        <text x="164" y="130" textAnchor="middle" fontSize="10" fill="#c23b2a">비상정지</text>
        <path d="M50 44 C 90 90, 150 50, 210 100 S 280 150, 310 150" fill="none" stroke="#c23b2a" strokeDasharray="6 4" />
      </svg>
      <p className="mt-2 text-[12px] text-neutral-600">훈련장 평면도 · 전투 UI 아님 · 이동경로는 평가 항목</p>
    </Box>
  );
}

function CatSlot({
  src,
  file,
  caption,
  label,
}: {
  src: string;
  file: string;
  caption: string;
  label: string;
}) {
  return (
    <figure className="border-b-2 border-black bg-[#fffdf6] p-3">
      <div className="tilt-sticker mx-auto max-w-[240px] border-2 border-black bg-white p-2">
        <ImageWithFallback
          src={src}
          fileHint={file}
          alt={`${label} 자리`}
          label={label}
          variant="world"
          className="aspect-square"
        />
      </div>
      <figcaption className="mt-2 text-center font-serif text-sm">“{caption}”</figcaption>
    </figure>
  );
}
