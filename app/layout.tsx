import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { AudioRoot } from "@/components/audio/AudioRoot";
import "./globals.css";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-kr",
  display: "swap",
});

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif-kr",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "대치헌터키즈",
    template: "%s · 대치헌터키즈",
  },
  description: "2040 서울. 각성은 랜덤, 시간표는 확정. 학생용 세계관 포털.",
};

export const viewport: Viewport = {
  themeColor: "#f3f2ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="antialiased">
        <AudioRoot>{children}</AudioRoot>
      </body>
    </html>
  );
}
