import { Container } from "@/components/ui/Container";

const PROCESS_STEPS = [
  { id: "01", title: "Raw Material", desc: "Sourcing premium SS, Duplex & Alloy steels." },
  { id: "02", title: "Machining", desc: "CNC turning & milling to exact dimensions." },
  { id: "03", title: "Grinding", desc: "Cylindrical grinding for fine surface finish." },
  { id: "04", title: "Inspection", desc: "Rigorous dimensional and NDT testing." },
  { id: "05", title: "Assembly", desc: "Precise fitting of pump components." },
  { id: "06", title: "Dispatch", desc: "Safe export packaging and shipping." },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-white">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
            Manufacturing Process
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Background Line */}
          <div className="absolute left-0 top-6 h-[2px] w-full bg-line" />
          
          {/* Animated Progress Line */}
          <div className="absolute left-0 top-6 h-[2px] bg-gradient-to-r from-oxide via-oxide to-transparent w-full" />

          <div className="relative grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center motion-safe:opacity-0 motion-safe:animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-navy text-sm font-bold text-white shadow-sm transition-transform hover:scale-110 hover:bg-oxide">
                  {step.id}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
