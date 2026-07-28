"use client";
import { Images } from "@/lib/images";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronDown, ChevronUp, Download, Factory, Wrench, ShieldCheck, HardHat, FileText, Settings, Droplet, Flame, ArrowRight, Cog, Check, Search, ScanLine, Ruler, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductData, IndustryDetail } from "@/lib/content/products/types";

// ═════ GALLERY ═════
export function ProductGallery({ images, name }: { images: string[], name: string }) {
  const [activeImg, setActiveImg] = useState(0);
  const activeImage = images[activeImg] ?? images[0] ?? Images.assets.pumpShaftsAndSleeves.src;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface shadow-sm group">
        <Image
          src={activeImage}
          alt={`${name} view ${activeImg + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-navy/5" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.1, pointerEvents: 'none' }} />
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
              <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ═════ DRAWINGS ═════
export function ProductDrawing({ product }: { product: ProductData }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Ruler className="text-oxide" size={24} />
        <h3 className="font-display text-xl font-bold text-navy">Engineering Drawing</h3>
      </div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-line bg-white flex flex-col items-center justify-center p-8 text-center group">
        {product.engineeringDrawing ? (
          <Image src={product.engineeringDrawing} alt="Engineering Drawing" fill className="object-contain p-4 opacity-50 group-hover:opacity-80 transition-opacity" />
        ) : (
          <div className="text-ink-muted flex flex-col items-center">
            <ScanLine size={48} className="mb-4 text-slate-300" />
            <p className="font-semibold text-navy">Detailed 2D/3D CAD Drawings Available</p>
            <p className="text-sm mt-2">Proprietary drawings are restricted. Please request access.</p>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
           <a href={`/request-quote?product=${product.slug}&requestType=cad`} className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2 rounded text-sm font-bold tracking-wider hover:bg-oxide transition-colors">
             <Download size={16} /> Request CAD File
           </a>
        </div>
      </div>
    </div>
  );
}

// ═════ FEATURES ═════
export function ProductFeatures({ features }: { features: ProductData["features"] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-8">
      {features.map((feature, i) => (
        <div key={i} className="rounded-xl border border-line bg-surface p-5">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 size={20} className="text-oxide" />
            <h4 className="font-bold text-navy">{feature.title}</h4>
          </div>
          <p className="text-sm text-ink-muted leading-relaxed pl-8">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

// ═════ SPECS ═════
export function ProductSpecs({ product }: { product: ProductData }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line shadow-sm mt-8">
      <table className="w-full text-left text-sm text-ink">
        <tbody className="divide-y divide-line">
          {product.specifications.map((spec, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
              <th className="w-1/3 px-6 py-4 font-semibold text-navy border-r border-line">{spec.label}</th>
              <td className="px-6 py-4 font-medium text-ink-muted">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ═════ MATERIALS ═════
export function ProductMaterials({ materials }: { materials: ProductData["detailedMaterials"] }) {
  return (
    <div className="space-y-4 mt-8">
      {materials.map((mat, i) => (
        <div key={i} className="rounded-xl border border-line bg-white p-6 shadow-sm hover:border-oxide/30 transition-colors">
          <h4 className="font-display text-lg font-bold text-navy mb-2">{mat.name}</h4>
          <p className="text-sm text-ink-muted mb-4">{mat.description}</p>
          <div className="flex items-start gap-2 bg-surface p-3 rounded-md">
            <Check size={16} className="text-success mt-0.5 shrink-0" />
            <p className="text-xs font-semibold text-navy"><span className="text-oxide uppercase tracking-widest mr-2">Recommended:</span> {mat.recommendedFor}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═════ WORKFLOW ═════
export function ProductWorkflow({ workflow }: { workflow: ProductData["manufacturingWorkflow"] }) {
  return (
    <div className="mt-8 space-y-6">
      {workflow.map((step, i) => (
        <div key={i} className="relative flex gap-6">
          {/* Timeline connector */}
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white font-bold font-mono text-sm shadow-sm z-10">
              {i + 1}
            </div>
            {i !== workflow.length - 1 && <div className="w-[2px] h-full bg-line my-2" />}
          </div>
          
          <div className="flex-1 pb-6 pt-1">
            <h4 className="text-lg font-bold text-navy mb-2">{step.step}</h4>
            <p className="text-sm text-ink-muted mb-4">{step.description}</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-navy bg-surface px-3 py-2 rounded-md border border-line">
                <Wrench size={14} className="text-oxide" />
                <span className="opacity-70">Machine:</span> {step.machinesUsed}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-navy bg-surface px-3 py-2 rounded-md border border-line">
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

// ═════ QUALITY ASSURANCE ═════
export function ProductQuality({ qa }: { qa: ProductData["qualityAssurance"] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {qa.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div className="mt-1 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-line">
              <CheckCircle2 size={16} className="text-oxide" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-1 text-sm">{item.title}</h4>
            <p className="text-xs text-ink-muted leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═════ APPLICATIONS ═════
export function ProductApplications({ apps }: { apps: IndustryDetail[] }) {
  const getIcon = (app: string) => {
    switch(app) {
      case "Oil & Gas": return <Flame className="text-oxide" size={32} />;
      case "Water & Wastewater": return <Droplet className="text-sky-500" size={32} />;
      case "Marine": return <HardHat className="text-navy" size={32} />;
      case "Power Generation": return <Settings className="text-orange-500" size={32} />;
      case "Chemical Processing": return <Factory className="text-emerald-500" size={32} />;
      case "Heavy Engineering": return <Hammer className="text-slate-600" size={32} />;
      default: return <Cog className="text-slate-500" size={32} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {apps.map(app => (
        <div key={app.name} className="flex flex-col p-6 bg-white border border-line rounded-xl shadow-sm hover:shadow-raised hover:border-oxide/30 transition-all group">
          <div className="mb-4 p-3 bg-surface w-fit rounded-lg group-hover:bg-white transition-colors border border-transparent group-hover:border-line">{getIcon(app.name)}</div>
          <h4 className="text-lg font-bold text-navy mb-2">{app.name}</h4>
          <p className="text-sm text-ink-muted leading-relaxed">{app.usage}</p>
        </div>
      ))}
    </div>
  );
}

// ═════ FAQ ═════
export function ProductFaq({ faqs }: { faqs: ProductData["faqs"] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4 mt-8">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-line rounded-xl overflow-hidden bg-white shadow-sm hover:border-oxide/30 transition-colors">
          <button 
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full px-6 py-4 flex items-center justify-between bg-surface font-bold text-navy text-left"
          >
            {faq.question}
            {openIdx === i ? <ChevronUp size={20} className="text-oxide shrink-0" /> : <ChevronDown size={20} className="text-slate-400 shrink-0" />}
          </button>
          <AnimatePresence>
            {openIdx === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden bg-white"
              >
                <div className="p-6 text-ink-muted leading-relaxed text-sm border-t border-line">
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
