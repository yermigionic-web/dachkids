"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AudioToggle } from "@/components/audio/AudioToggle";
import { BackLink } from "@/components/chrome/BackLink";
import { Wordmark } from "@/components/chrome/Wordmark";
import { ImageWithFallback } from "@/components/media/ImageWithFallback";
import { CHARACTERS, getCharacter } from "@/data/characters";
import { LOCATIONS, SEOUL_MAP_IMAGE, getLocation, type MapLocation } from "@/data/locations";
import { cn } from "@/lib/cn";

type MapTab = "schools" | "academy" | "commute";

export function MapView() {
  const [tab, setTab] = useState<MapTab>("schools");
  const [selectedId, setSelectedId] = useState<string>("daemyeong");
  const [commuteId, setCommuteId] = useState<string>("songa");
  const selected = getLocation(selectedId) ?? LOCATIONS[0];
  const commuter = getCharacter(commuteId);
  const route = useMemo(() => {
    if (tab !== "commute") return [];
    const school = LOCATIONS.find((l) => l.id === commuter?.schoolLocationId);
    return school?.routeVia ?? [];
  }, [commuter, tab]);

  const students = CHARACTERS.filter((c) => c.role === "student");
  const visible = LOCATIONS.filter((loc) => {
    if (tab === "schools") return loc.kind === "school";
    if (tab === "academy") return loc.kind === "academy" || loc.kind === "training";
    return true;
  });

  const switchTab = (next: MapTab) => {
    setTab(next);
    if (next === "schools") setSelectedId("daemyeong");
    if (next === "academy") setSelectedId("yuseong-hq");
    if (next === "commute") {
      const schoolId = getCharacter(commuteId)?.schoolLocationId;
      if (schoolId) setSelectedId(schoolId);
    }
  };

  return (
    <main className="map-tex min-h-dvh text-[#16324a]">
      <div className="relative z-[1] mx-auto flex min-h-dvh max-w-[1400px] flex-col lg:flex-row">
        <section className="relative min-h-[70vh] flex-1 overflow-hidden lg:min-h-dvh">
          <div className="absolute left-4 right-4 top-4 z-20 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="rounded-2xl border border-[#b7c9d4] bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
              <BackLink tone="map" />
              <div className="mt-1">
                <Wordmark tone="map" compact />
              </div>
              <h1 className="mt-2 text-lg font-medium">서울 생활권</h1>
            </div>
            <AudioToggle tone="map" />
          </div>

          <div className="absolute left-4 right-4 top-[7.2rem] z-20 sm:left-auto sm:right-4 sm:top-4 sm:mt-24 lg:mt-0 lg:top-[6.5rem]">
            <div className="grid grid-cols-3 gap-1 rounded-2xl border border-[#b7c9d4] bg-white/95 p-1 shadow-md">
              {(
                [
                  ["schools", "학교"],
                  ["academy", "학원"],
                  ["commute", "통학"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => switchTab(id)}
                  className={cn(
                    "min-h-11 rounded-xl px-2 text-sm",
                    tab === id ? "bg-[#16324a] text-white" : "text-[#16324a]",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {tab === "commute" && (
            <div className="absolute bottom-4 left-4 z-20 max-w-[calc(100%-2rem)] rounded-xl border border-[#c5d0d8] bg-white/95 p-3 shadow-sm">
              <label className="block text-[11px] tracking-[0.16em] text-[#5a7384]" htmlFor="commuter">
                COMMUTE
              </label>
              <select
                id="commuter"
                value={commuteId}
                onChange={(e) => {
                  setCommuteId(e.target.value);
                  const next = getCharacter(e.target.value);
                  if (next?.schoolLocationId) setSelectedId(next.schoolLocationId);
                }}
                className="mt-1 min-h-11 w-full min-w-[16rem] border border-[#c5d0d8] bg-white px-2 text-sm"
              >
                {students.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} · {s.school} → 유성 {s.commuteMinutes}분
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="absolute inset-0">
            <div
              className="absolute inset-0 origin-center transition-transform duration-500 ease-out"
              style={{
                transform: tab === "academy" ? "scale(2.15)" : "scale(1)",
                transformOrigin: tab === "academy" ? "58.5% 64%" : "50% 50%",
              }}
            >
              <ImageWithFallback
                src={SEOUL_MAP_IMAGE}
                alt="서울 생활권 지도"
                className="h-full w-full"
                imgClassName="object-cover opacity-90"
                priority
              />
              <SeoulSvg route={route} longRoute={(commuter?.commuteMinutes ?? 0) >= 60 && tab === "commute"} />
              {LOCATIONS.map((loc) => {
                const shown = visible.some((v) => v.id === loc.id);
                return (
                  <button
                    key={loc.id}
                    type="button"
                    aria-label={loc.name}
                    aria-pressed={selectedId === loc.id}
                    disabled={!shown}
                    onClick={() => shown && setSelectedId(loc.id)}
                    className={cn(
                      "absolute z-10 flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full",
                      shown ? "opacity-100" : "pointer-events-none opacity-15",
                    )}
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  >
                    <span
                      className={cn(
                        "rounded-full border-2 border-white shadow-sm",
                        selectedId === loc.id ? "size-3.5" : "size-2.5",
                        loc.kind === "academy"
                          ? "bg-[#0f4c6e]"
                          : loc.kind === "training"
                            ? "bg-[#0f766e]"
                            : "bg-[#c23b2a]",
                      )}
                    />
                    {shown && selectedId === loc.id && (
                      <span className="absolute left-full ml-1 hidden whitespace-nowrap rounded bg-[#16324a] px-1.5 py-0.5 text-[10px] text-white sm:block">
                        {loc.name}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="z-20 w-full border-t border-[#c5d0d8] bg-white/95 lg:w-[380px] lg:border-l lg:border-t-0">
          <p className="border-b border-[#d5e0e6] px-5 py-3 text-[11px] tracking-[0.2em] text-[#5a7384]">
            {tab === "schools" ? "학교 안내" : tab === "academy" ? "유성헌터교육원 - 대치본원 방문" : "통학 안내"}
          </p>
          <LocationSheet location={selected} />
        </aside>
      </div>
    </main>
  );
}

function SeoulSvg({
  route,
  longRoute,
}: {
  route: string[];
  longRoute: boolean;
}) {
  const points = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));
  const path = route
    .map((id) => points[id])
    .filter(Boolean)
    .map((l) => `${l.x},${l.y}`)
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
      <path
        d="M28 8 C40 4 58 6 70 10 C82 16 90 28 92 42 C93 54 88 62 84 70 C78 84 66 92 50 94 C34 93 22 84 16 70 C10 54 12 34 18 22 C20 16 24 10 28 8 Z"
        fill="#f7fbfc"
        fillOpacity="0.55"
        stroke="#9db0bd"
        strokeWidth="0.6"
      />
      <path
        d="M12 46 C28 42 42 48 58 46 C72 44 86 50 94 48"
        fill="none"
        stroke="#7ea7c2"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path d="M20 62 H78" fill="none" stroke="#c5d0d8" strokeWidth="0.4" />
      <path d="M48 18 V88" fill="none" stroke="#c5d0d8" strokeWidth="0.4" />
      {path && (
        <polyline
          points={path}
          fill="none"
          stroke={longRoute ? "#b45309" : "#0f6a8a"}
          strokeWidth={longRoute ? 1.4 : 0.9}
          strokeDasharray={longRoute ? "1.6 1" : "0"}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function LocationSheet({ location }: { location: MapLocation }) {
  const people = location.studentIds
    .map((id) => getCharacter(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const isHq = location.id === "yuseong-hq";

  return (
    <div className="flex h-full flex-col p-5">
      <h2 className="text-2xl font-medium leading-tight">{location.name}</h2>
      <p className="mt-1 text-sm text-[#16324a]">{location.blurb}</p>
      <p className="mt-1 text-sm text-[#4d6c7e]">{location.district}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#3d5666]">{location.detail}</p>
      {location.commuteToHqMin ? (
        <p className="mt-3 rounded-lg bg-[#eef5f8] px-3 py-2 text-sm">
          대치본원까지 약 {location.commuteToHqMin}분
          {location.commuteToHqMin >= 70 && (
            <span className="mt-1 block text-[12px] text-[#9a3412]">장거리 통학. 막차가 커리큘럼이다.</span>
          )}
        </p>
      ) : null}

      {people.length > 0 && (
        <div className="mt-4">
          <p className="text-[11px] tracking-[0.16em] text-[#5a7384]">재학생 / 상주</p>
          <ul className="mt-2 space-y-1">
            {people.map((p) => (
              <li key={p.id}>
                <Link href={`/characters/${p.id}`} className="text-sm underline underline-offset-4">
                  {p.name}
                  {p.grade ? ` ${p.grade}` : p.staffTitle ? ` · ${p.staffTitle}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isHq && location.floorNotes && <BuildingFloors floors={location.floorNotes} />}
    </div>
  );
}

function BuildingFloors({
  floors,
}: {
  floors: NonNullable<MapLocation["floorNotes"]>;
}) {
  const [active, setActive] = useState(floors[3]?.floor ?? floors[0].floor);
  const current = floors.find((f) => f.floor === active) ?? floors[0];

  return (
    <div className="mt-6">
      <p className="text-[11px] tracking-[0.16em] text-[#5a7384]">대치본원 단면도</p>
      <div className="mt-2 grid grid-cols-[5.5rem_1fr] gap-3">
        <ul>
          {floors.map((f) => (
            <li key={f.floor}>
              <button
                type="button"
                onClick={() => setActive(f.floor)}
                className={cn(
                  "flex min-h-10 w-full items-center border-b border-[#d5e0e6] px-2 text-left text-[13px]",
                  f.floor === active ? "bg-[#16324a] text-white" : "bg-[#f4f8fa]",
                )}
              >
                {f.floor}
              </button>
            </li>
          ))}
        </ul>
        <div className="border border-[#d5e0e6] bg-[#f7fafc] p-3">
          <p className="font-medium">{current.title}</p>
          <p className="mt-2 text-sm leading-relaxed">“{current.note}”</p>
        </div>
      </div>
    </div>
  );
}
