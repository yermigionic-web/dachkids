"use client";

import { AudioProvider } from "./AudioProvider";

export function AudioRoot({ children }: { children: React.ReactNode }) {
  return <AudioProvider>{children}</AudioProvider>;
}
