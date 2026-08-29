import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[#f3f2ee] px-6 text-[#1c2330]">
      <div className="max-w-sm text-center">
        <p className="text-[11px] tracking-[0.28em] text-[#1c2330]/45">2040</p>
        <h1 className="mt-2 text-2xl font-medium">없는 페이지</h1>
        <p className="mt-2 text-sm text-[#1c2330]/55">시간표에 없는 교시입니다.</p>
        <Link href="/" className="mt-6 inline-flex min-h-11 items-center justify-center underline underline-offset-4">
          메인으로
        </Link>
      </div>
    </main>
  );
}
