export function YSigil() {
  return (
    <div className="sort-sigil-hover relative mx-auto mb-6 size-[8.5rem]" aria-hidden>
      <div className="pointer-events-none absolute inset-[-22%] rounded-full bg-[#e8c872]/25 blur-2xl" />
      <svg viewBox="0 0 100 100" className="sort-ring absolute inset-0">
        <circle
          cx="50"
          cy="50"
          r="46.5"
          fill="none"
          stroke="#e8c872"
          strokeWidth="0.55"
          strokeDasharray="1.6 2.8"
          opacity="0.55"
        />
      </svg>
      <svg viewBox="0 0 100 100" className="relative z-[1] h-full w-full drop-shadow-[0_10px_18px_rgb(0_0_0_/_0.55)]">
        <defs>
          <radialGradient id="ys-core" cx="34%" cy="26%" r="78%">
            <stop offset="0%" stopColor="#fff6d4" />
            <stop offset="32%" stopColor="#e8c872" />
            <stop offset="68%" stopColor="#8a6a2a" />
            <stop offset="100%" stopColor="#2a1d0c" />
          </radialGradient>
          <linearGradient id="ys-bevel" x1="0.15" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="26%" stopColor="#f4e2a8" />
            <stop offset="52%" stopColor="#6b4e18" />
            <stop offset="78%" stopColor="#e8c872" />
            <stop offset="100%" stopColor="#c9a24a" />
          </linearGradient>
          <linearGradient id="ys-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff4c8" />
            <stop offset="50%" stopColor="#8a6a2a" />
            <stop offset="100%" stopColor="#e8c872" />
          </linearGradient>
          <filter id="ys-emboss" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.7" result="blur" />
            <feSpecularLighting
              in="blur"
              surfaceScale="3.4"
              specularConstant="1.2"
              specularExponent="18"
              lightingColor="#ffffff"
              result="spec"
            >
              <fePointLight x="-16" y="-24" z="64" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="specCut" />
            <feComposite in="SourceGraphic" in2="specCut" operator="arithmetic" k1="0" k2="1" k3="0.9" k4="0" />
          </filter>
        </defs>

        <polygon points="50,10 86,78 14,78" fill="none" stroke="#e8c872" strokeWidth="0.35" opacity="0.28" />
        <circle cx="50" cy="52" r="34" fill="none" stroke="#e8c872" strokeWidth="0.3" opacity="0.2" />

        <g filter="url(#ys-emboss)" fill="url(#ys-bevel)" stroke="url(#ys-edge)" strokeWidth="1.1" strokeLinejoin="round">
          <path d="M18 16 L36.5 16 L50 41 L63.5 16 L82 16 L56.8 58.5 L56.8 84 L43.2 84 L43.2 58.5 Z" />
        </g>
        <path
          d="M24.5 20.5 L37.5 20.5 L50 44.5 L62.5 20.5 L75.5 20.5 L53.6 58.2 L53.6 79.5 L46.4 79.5 L46.4 58.2 Z"
          fill="url(#ys-core)"
          opacity="0.55"
        />
        <path
          d="M29 21.5 L50 47 L71 21.5"
          fill="none"
          stroke="#fff6d4"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path d="M50 46 L50 80" fill="none" stroke="#fff6d4" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

        <circle cx="18" cy="16" r="3.1" fill="url(#ys-bevel)" stroke="#2a1d0c" strokeWidth="0.6" />
        <circle cx="82" cy="16" r="3.1" fill="url(#ys-bevel)" stroke="#2a1d0c" strokeWidth="0.6" />
        <circle cx="50" cy="84" r="3.4" fill="url(#ys-bevel)" stroke="#2a1d0c" strokeWidth="0.6" />
        <circle cx="50" cy="49" r="4.6" fill="url(#ys-core)" stroke="url(#ys-edge)" strokeWidth="0.9" />
        <circle cx="50" cy="49" r="1.7" fill="#2a1d0c" />

        <ellipse cx="40" cy="28" rx="10" ry="4.5" fill="#fff" opacity="0.18" />
      </svg>
    </div>
  );
}
