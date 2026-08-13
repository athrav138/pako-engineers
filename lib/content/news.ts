import { Images } from "@/lib/images";

export const newsItems = [
  {
    id: 1,
    title: "Pako Engineers expands CNC turning capacity with new 10m heavy-duty lathe.",
    category: "Company Update",
    date: "Aug 15, 2026",
    excerpt:
      "To meet the growing demand from global pump manufacturers, we have successfully expanded our CNC lathe fleet capable of turning shafts up to 1500mm in diameter and 8,000mm in length.",
    image: Images.assets.largePumpRotorAssemblyThumb.src,
  },
  {
    id: 2,
    title: "Achieving Zero-Defect Manufacturing in Super Duplex Machining",
    category: "Technical Article",
    date: "Jul 22, 2026",
    excerpt:
      "Machining super duplex stainless steel presents unique challenges. Learn how our engineering team optimizes tooling and feeds to maintain tight tolerances.",
    image: Images.assets.legacyLatheInspectionThumb.src,
  },
  {
    id: 3,
    title: "Pako Engineers awarded 'Best Exporter 2026' by Engineering Council",
    category: "Awards",
    date: "Jun 10, 2026",
    excerpt:
      "We are proud to announce that Pako Engineers has been recognized for its outstanding contribution to India's engineering export growth.",
    image: Images.assets.verticalPumpAssemblyThumb.src,
  },
] as const;
