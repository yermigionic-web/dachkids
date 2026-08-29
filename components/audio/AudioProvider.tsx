"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const BGM_SRC = "/assets/audio/main_bgm.mp3";
const MUTE_KEY = "dk-bgm-muted";
const STARTED_KEY = "dk-bgm-started";
const FADE_MS = 750;
const TARGET_VOLUME = 0.52;

type AudioContextValue = {
  muted: boolean;
  started: boolean;
  startBgm: () => void;
  toggleMute: () => void;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio(BGM_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;

    const storedMute = window.localStorage.getItem(MUTE_KEY) === "1";
    setMuted(storedMute);
    audio.muted = storedMute;

    const storedStarted = window.localStorage.getItem(STARTED_KEY) === "1";
    setStarted(storedStarted);

    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    audio.volume = 0;
    const begin = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - begin) / FADE_MS);
      audio.volume = t * TARGET_VOLUME;
      if (t < 1) fadeRef.current = requestAnimationFrame(step);
    };
    fadeRef.current = requestAnimationFrame(step);
  }, []);

  const startBgm = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    window.localStorage.setItem(STARTED_KEY, "1");
    setStarted(true);
    if (!audio.paused) return;
    const play = audio.play();
    if (play) {
      play
        .then(() => fadeIn())
        .catch(() => {
          /* autoplay blocked after refresh — UI only */
        });
    }
  }, [fadeIn]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    const next = !muted;
    setMuted(next);
    window.localStorage.setItem(MUTE_KEY, next ? "1" : "0");
    if (audio) audio.muted = next;
  }, [muted]);

  const value = useMemo(
    () => ({ muted, started, startBgm, toggleMute }),
    [muted, started, startBgm, toggleMute],
  );

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return ctx;
}
