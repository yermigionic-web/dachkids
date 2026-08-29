"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-dvh place-items-center bg-[#e7edf2] px-6 text-[#1e2a36]">
      <div className="max-w-sm text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#6b7784]">FILE ERROR</p>
        <h1 className="mt-2 text-2xl font-medium">기록을 열지 못했습니다</h1>
        <p className="mt-2 text-sm text-[#5b6773]">배포 직후라면 새로고침 한 번이면 됩니다.</p>
        <button
          type="button"
          onClick={() => {
            reset();
            window.location.reload();
          }}
          className="mt-6 min-h-11 border border-[#8a96a3] bg-white px-4 text-sm"
        >
          다시 열기
        </button>
      </div>
    </main>
  );
}
