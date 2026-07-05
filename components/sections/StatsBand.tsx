import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/ui/StatCard";
import { company } from "@/lib/content/company";

export function StatsBand() {
  return (
    <section className="border-b border-line bg-white py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          {company.stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
