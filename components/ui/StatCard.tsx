type StatCardProps = {
  value: string;
  label: string;
  tone?: "light" | "dark";
};

export function StatCard({ value, label, tone = "light" }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1 border-l-0 md:border-l md:border-white/15 md:first:border-l-0 md:px-8 md:first:pl-0">
      <span
        className={
          tone === "dark"
            ? "font-mono text-4xl font-bold text-white md:text-5xl"
            : "font-mono text-4xl font-bold text-navy md:text-5xl"
        }
      >
        {value}
      </span>
      <span
        className={
          tone === "dark"
            ? "text-sm text-white/70"
            : "text-sm text-muted"
        }
      >
        {label}
      </span>
    </div>
  );
}
