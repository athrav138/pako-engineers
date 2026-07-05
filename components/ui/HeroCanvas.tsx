export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center pointer-events-none">
      <div
        aria-hidden="true"
        className="relative h-[520px] w-[220px] rotate-[28deg] rounded-full"
      >
        <div className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#525866_0%,#f4f7fb_32%,#99a1b2_52%,#2c3038_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.45)]" />
        <div className="absolute left-1/2 top-[14%] h-24 w-44 -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#181b22_0%,#6b7280_28%,#d7dde8_48%,#3b414d_76%,#111318_100%)] shadow-2xl" />
        <div className="absolute left-1/2 bottom-[15%] h-24 w-44 -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#15181d_0%,#626b78_30%,#eef2f7_50%,#3b414d_78%,#101216_100%)] shadow-2xl" />
        {[18, 30, 42, 54, 66, 78].map((top) => (
          <div
            key={top}
            className="absolute left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-black/45"
            style={{ top: `${top}%` }}
          />
        ))}
        <div className="absolute -right-16 top-10 h-32 w-32 rounded-full border border-white/15 bg-white/5 blur-sm" />
        <div className="absolute -left-20 bottom-20 h-44 w-44 rounded-full border border-oxide/25 bg-oxide/10 blur-sm" />
      </div>
    </div>
  );
}
