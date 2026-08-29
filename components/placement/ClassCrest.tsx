import type { ClassId } from "@/data/classes";

type CrestColors = {
  from: string;
  to: string;
  glow: string;
  gold: string;
};

const METAL: Record<ClassId, { hi: string; mid: string; lo: string; edge: string }> = {
  ZENITH: { hi: "#f6e7b4", mid: "#e8c872", lo: "#3a5f9a", edge: "#7cb0ff" },
  VECTOR: { hi: "#f0ddb4", mid: "#d4b483", lo: "#0b5c56", edge: "#5eead4" },
  AXIS: { hi: "#f3e6c4", mid: "#e7d5a3", lo: "#4c1d95", edge: "#c4b5fd" },
  ORBIT: { hi: "#ffe2b0", mid: "#f0d48a", lo: "#9a3412", edge: "#fdba74" },
  NOVA: { hi: "#ffffff", mid: "#f8f1d4", lo: "#1e3a5f", edge: "#93c5fd" },
};

export function ClassCrest({ classId, colors }: { classId: ClassId; colors: CrestColors }) {
  const metal = METAL[classId];
  const uid = classId.toLowerCase();

  return (
    <div className="relative mx-auto mb-4 size-[7.5rem]" aria-hidden>
      <div
        className="pointer-events-none absolute inset-[-18%] rounded-full opacity-70 blur-md"
        style={{ background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)` }}
      />
      <svg viewBox="0 0 100 100" className="sort-ring absolute inset-0">
        <circle cx="50" cy="50" r="47.5" fill="none" stroke={colors.gold} strokeWidth="0.7" strokeDasharray="2.2 3.4" opacity="0.85" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const inner = i % 2 === 0 ? 43 : 44.5;
          return (
            <line
              key={i}
              x1={50 + Math.cos(a) * inner}
              y1={50 + Math.sin(a) * inner}
              x2={50 + Math.cos(a) * 48.5}
              y2={50 + Math.sin(a) * 48.5}
              stroke={metal.edge}
              strokeWidth={i % 6 === 0 ? 1.4 : 0.6}
              opacity={i % 6 === 0 ? 0.95 : 0.45}
            />
          );
        })}
      </svg>
      <svg viewBox="0 0 100 100" className="sort-ring-rev absolute inset-0">
        <circle cx="50" cy="50" r="40.5" fill="none" stroke={metal.edge} strokeWidth="0.45" strokeDasharray="1 2.5" opacity="0.55" />
      </svg>
      <svg viewBox="0 0 100 100" className="sort-crest-spin relative z-[1] h-full w-full drop-shadow-[0_8px_18px_rgb(0_0_0_/_0.45)]">
        <defs>
          <radialGradient id={`${uid}-plate`} cx="34%" cy="28%" r="78%">
            <stop offset="0%" stopColor={metal.hi} />
            <stop offset="38%" stopColor={metal.mid} />
            <stop offset="72%" stopColor={metal.lo} />
            <stop offset="100%" stopColor={colors.from} />
          </radialGradient>
          <linearGradient id={`${uid}-bevel`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.85" />
            <stop offset="28%" stopColor={metal.hi} />
            <stop offset="52%" stopColor={metal.lo} />
            <stop offset="78%" stopColor={metal.mid} />
            <stop offset="100%" stopColor={metal.edge} />
          </linearGradient>
          <linearGradient id={`${uid}-glyph`} x1="0.2" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="32%" stopColor={metal.hi} />
            <stop offset="58%" stopColor={metal.mid} />
            <stop offset="100%" stopColor={metal.lo} />
          </linearGradient>
          <filter id={`${uid}-emboss`} x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
            <feSpecularLighting
              in="blur"
              surfaceScale="3.2"
              specularConstant="1.15"
              specularExponent="20"
              lightingColor="#ffffff"
              result="spec"
            >
              <fePointLight x="-18" y="-28" z="70" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="specCut" />
            <feComposite in="SourceGraphic" in2="specCut" operator="arithmetic" k1="0" k2="1" k3="0.85" k4="0" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="36.5" fill={`url(#${uid}-plate)`} stroke={`url(#${uid}-bevel)`} strokeWidth="2.6" filter={`url(#${uid}-emboss)`} />
        <ellipse cx="40" cy="36" rx="16" ry="8" fill="#fff" opacity="0.22" />
        <circle cx="50" cy="50" r="36.5" fill="none" stroke={colors.gold} strokeWidth="0.35" opacity="0.55" />
        <Glyph classId={classId} fill={`url(#${uid}-glyph)`} stroke={metal.lo} />
      </svg>
    </div>
  );
}

function Glyph({ classId, fill, stroke }: { classId: ClassId; fill: string; stroke: string }) {
  if (classId === "ZENITH") {
    return (
      <g fill={fill} stroke={stroke} strokeWidth="0.7" strokeLinejoin="round">
        <path d="M50 16 L57 43.5 L84 50 L57 56.5 L50 84 L43 56.5 L16 50 L43 43.5 Z" />
        <path d="M50 34 L54 50 L50 66 L46 50 Z" opacity="0.55" />
      </g>
    );
  }
  if (classId === "VECTOR") {
    return (
      <g fill={fill} stroke={stroke} strokeWidth="0.8" strokeLinejoin="round" strokeLinecap="round">
        <path d="M24 50 L58 28 L58 40 L78 40 L78 60 L58 60 L58 72 Z" />
        <path d="M22 44 H36 M22 56 H36" fill="none" strokeWidth="1.6" />
      </g>
    );
  }
  if (classId === "AXIS") {
    return (
      <g fill="none" stroke={fill} strokeWidth="3.2" strokeLinecap="round">
        <line x1="50" y1="20" x2="50" y2="80" />
        <line x1="20" y1="50" x2="80" y2="50" />
        <circle cx="50" cy="50" r="8.5" fill={fill} stroke={stroke} strokeWidth="1.1" />
        <circle cx="50" cy="50" r="3.2" fill={stroke} />
        <path d="M26 26 L32 32 M74 26 L68 32 M26 74 L32 68 M74 74 L68 68" strokeWidth="2" />
      </g>
    );
  }
  if (classId === "ORBIT") {
    return (
      <g fill="none" stroke={fill} strokeWidth="2.1">
        <ellipse cx="50" cy="50" rx="30" ry="12" transform="rotate(-28 50 50)" />
        <ellipse cx="50" cy="50" rx="26" ry="10" transform="rotate(38 50 50)" />
        <circle cx="50" cy="50" r="8.5" fill={fill} stroke={stroke} strokeWidth="1" />
        <circle cx="76" cy="38" r="3.1" fill={fill} stroke="none" />
        <circle cx="28" cy="62" r="2.2" fill={fill} stroke="none" opacity="0.8" />
      </g>
    );
  }
  return (
    <g fill={fill} stroke={stroke} strokeWidth="0.65" strokeLinejoin="round">
      <path d="M50 18 L54 40 L76 28 L60 50 L82 54 L60 58 L76 72 L54 60 L50 82 L46 60 L24 72 L40 58 L18 54 L40 50 L24 28 L46 40 Z" />
      <circle cx="50" cy="50" r="7" />
    </g>
  );
}
