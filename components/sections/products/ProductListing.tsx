"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Filter, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/content/products";

export function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const visibleProducts = products.filter((product) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;
    return [product.name, product.category, product.materials, product.summary]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={20} />
              <input 
                type="text" 
                placeholder="Search products by name, material, or application..." 
                className="h-12 w-full rounded-md border border-line bg-surface pl-12 pr-4 text-sm focus:border-oxide focus:outline-none focus:ring-1 focus:ring-oxide"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="h-12 hidden md:inline-flex" href="/capabilities">
              <Filter size={18} className="mr-2" />
              Capabilities
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-ink-muted">Sort By:</span>
            <select className="h-12 rounded-md border border-line bg-white px-4 text-sm focus:border-oxide focus:outline-none">
              <option>Profile Order</option>
              <option>Product Line</option>
              <option>Material</option>
            </select>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-raised"
            >
              <div className="relative aspect-square overflow-hidden bg-white group-hover:bg-slate-50 transition-colors flex items-center justify-center p-4">
                {product.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-navy/5" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.1 }} />
                )}
                
                {/* Overlay actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-navy/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy hover:bg-oxide hover:text-white transition-colors" title="Quick View">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-oxide">
                  <span>{product.category}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm text-ink-muted">
                  Materials: <span className="font-medium text-ink">{product.materials}</span>
                </p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-2">
                  {product.summary}
                </p>
                <div className="mt-auto flex gap-3">
                  <Button href={`/products/${product.slug}`} variant="outline" size="sm" className="flex-1 justify-center">
                    Details
                  </Button>
                  <Button href={`/request-quote?product=${encodeURIComponent(product.name)}`} size="sm" className="flex-1 justify-center">
                    RFQ
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleProducts.length === 0 && (
          <p className="mt-10 rounded-lg border border-line bg-surface p-6 text-center text-sm text-ink-muted">
            No product line matched your search. Try searching for shaft, sleeve, pump, lock nut, Thordon or gear.
          </p>
        )}
      </Container>
    </section>
  );
}
