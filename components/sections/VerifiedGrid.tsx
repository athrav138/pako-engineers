import { Container } from "@/components/ui/Container";

export function VerifiedGrid({
  items,
  columns = "md:grid-cols-3",
}: {
  items: readonly string[];
  columns?: string;
}) {
  return (
    <Container>
      <div className={`grid gap-4 ${columns}`}>
        {items.map((item) => (
          <div key={item} className="rounded-lg border border-line bg-white p-5 shadow-card">
            <p className="text-sm font-medium leading-relaxed text-ink">{item}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
