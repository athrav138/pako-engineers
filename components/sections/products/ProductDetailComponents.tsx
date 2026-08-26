"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cog,
  Droplet,
  Factory,
  Flame,
  Hammer,
  HardHat,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Images } from "@/lib/images";
import { IndustryDetail, ProductData } from "@/lib/content/products/types";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [activeImg, setActiveImg] = useState(0);
  const activeImage = images[activeImg] ?? images[0] ?? Images.assets.pumpShaftsAndSleeves.src;

  return (
    <div className="space-y-4">
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
        <Image
          src={activeImage}
          alt={`${name} view ${activeImg + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 bg-navy/5"
          style={{
            backgroundImage: "radial-gradient(#111827 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.1,
          }}
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                i === activeImg ? "border-oxide" : "border-line opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 8vw, 25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductFeatures({ features }: { features: ProductData["features"] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {features.map((feature, i) => (
        <div key={i} className="rounded-xl border border-line bg-surface p-5">
          <div className="mb-2 flex items-center gap-3">
            <CheckCircle2 size={20} className="text-oxide" />
            <h4 className="font-bold text-navy">{feature.title}</h4>
          </div>
          <p className="pl-8 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export function ProductSpecs({ product }: { product: ProductData }) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-line shadow-sm">
      <table className="w-full text-left text-sm text-ink">
        <tbody className="divide-y divide-line">
          {product.specifications.map((spec, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
              <th className="w-1/3 border-r border-line px-6 py-4 font-semibold text-navy">
                {spec.label}
              </th>
              <td className="px-6 py-4 font-medium text-ink-muted">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProductWorkflow({ workflow }: { workflow: ProductData["manufacturingWorkflow"] }) {
  return (
    <div className="mt-8 space-y-6">
      {workflow.map((step, i) => (
        <div key={i} className="relative flex gap-6">
          <div className="flex flex-col items-center">
            <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-white shadow-sm">
              {i + 1}
            </div>
            {i !== workflow.length - 1 && <div className="my-2 h-full w-[2px] bg-line" />}
          </div>

          <div className="flex-1 pb-6 pt-1">
            <h4 className="mb-2 text-lg font-bold text-navy">{step.step}</h4>
            <p className="mb-4 text-sm text-ink-muted">{step.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 text-xs font-medium text-navy">
                <Wrench size={14} className="text-oxide" />
                <span className="opacity-70">Machine:</span> {step.machinesUsed}
              </div>
              <div className="flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 text-xs font-medium text-navy">
                <ShieldCheck size={14} className="text-success" />
                <span className="opacity-70">Check:</span> {step.inspection}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductQuality({ qa }: { qa: ProductData["qualityAssurance"] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {qa.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div className="mt-1 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface">
              <CheckCircle2 size={16} className="text-oxide" />
            </div>
          </div>
          <div>
            <h4 className="mb-1 text-sm font-bold text-navy">{item.title}</h4>
            <p className="text-xs leading-relaxed text-ink-muted">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductApplications({ apps }: { apps: IndustryDetail[] }) {
  const getIcon = (app: string) => {
    switch (app) {
      case "Oil & Gas":
        return <Flame className="text-oxide" size={32} />;
      case "Water & Wastewater":
        return <Droplet className="text-sky-500" size={32} />;
      case "Marine":
        return <HardHat className="text-navy" size={32} />;
      case "Power Generation":
        return <Settings className="text-orange-500" size={32} />;
      case "Chemical Processing":
        return <Factory className="text-emerald-500" size={32} />;
      case "Heavy Engineering":
        return <Hammer className="text-slate-600" size={32} />;
      default:
        return <Cog className="text-slate-500" size={32} />;
    }
  };

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {apps.map((app) => (
        <div
          key={app.name}
          className="group flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-all hover:border-oxide/30 hover:shadow-raised"
        >
          <div className="mb-4 w-fit rounded-lg border border-transparent bg-surface p-3 transition-colors group-hover:border-line group-hover:bg-white">
            {getIcon(app.name)}
          </div>
          <h4 className="mb-2 text-lg font-bold text-navy">{app.name}</h4>
          <p className="text-sm leading-relaxed text-ink-muted">{app.usage}</p>
        </div>
      ))}
    </div>
  );
}

export function ProductFaq({ faqs }: { faqs: ProductData["faqs"] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-8 space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-colors hover:border-oxide/30"
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="flex w-full items-center justify-between bg-surface px-6 py-4 text-left font-bold text-navy"
          >
            {faq.question}
            {openIdx === i ? (
              <ChevronUp size={20} className="shrink-0 text-oxide" />
            ) : (
              <ChevronDown size={20} className="shrink-0 text-slate-400" />
            )}
          </button>
          <AnimatePresence>
            {openIdx === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden bg-white"
              >
                <div className="border-t border-line p-6 text-sm leading-relaxed text-ink-muted">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
