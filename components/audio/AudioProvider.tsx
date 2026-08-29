"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import { withBase } from "@/lib/basePath";

const BGM_SRC = withBase("/assets/audio/main_bgm.mp3");
const MUTE_KEY = "dk-bgm-muted";
const STARTED_KEY = "dk-bgm-started";
const FADE_MS = 750;
const TARGET_VOLUME = 0.52;

type AudioContextValue = {
  muted: boolean;
  started: boolean;
  playing: boolean;
  startBgm: () => void;
  toggleMute: () => void;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = TARGET_VOLUME;

    const storedMute = window.localStorage.getItem(MUTE_KEY) === "1";
    setMuted(storedMute);
    audio.muted = storedMute;

    const storedStarted = window.localStorage.getItem(STARTED_KEY) === "1";
    setStarted(storedStarted);

    const syncPlaying = () => setPlaying(!audio.paused);
    audio.addEventListener("play", syncPlaying);
    audio.addEventListener("pause", syncPlaying);

    return () => {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
      audio.removeEventListener("play", syncPlaying);
      audio.removeEventListener("pause", syncPlaying);
    };
  }, []);

  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) cancelAnimationFrame(fadeRef.current);
    const begin = performance.now();
    const from = Math.max(audio.volume, 0.08);
    const step = (now: number) => {
      const t = Math.min(1, (now - begin) / FADE_MS);
      audio.volume = from + (TARGET_VOLUME - from) * t;
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
    audio.volume = Math.max(audio.volume, 0.08);
    const play = audio.play();
    if (play) {
      play
        .then(() => fadeIn())
        .catch(() => {
          setPlaying(false);
        });
    }
  }, [fadeIn]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    const isPlaying = Boolean(audio && !audio.paused);

    if (!isPlaying) {
      setMuted(false);
      window.localStorage.setItem(MUTE_KEY, "0");
      if (audio) audio.muted = false;
      startBgm();
      return;
    }

    const next = !muted;
    setMuted(next);
    window.localStorage.setItem(MUTE_KEY, next ? "1" : "0");
    if (audio) audio.muted = next;
  }, [muted, startBgm]);

  const value = useMemo(
    () => ({ muted, started, playing, startBgm, toggleMute }),
    [muted, started, playing, startBgm, toggleMute],
  );

  return (
    <AudioCtx.Provider value={value}>
      <audio ref={audioRef} src={BGM_SRC} loop preload="auto" className="hidden" />
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return ctx;
}
