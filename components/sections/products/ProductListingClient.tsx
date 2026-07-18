"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, Settings } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductData, ProductCategory, ApplicationIndustry } from "@/lib/content/products/types";

type ProductListingClientProps = {
  initialProducts: ProductData[];
};

const CATEGORIES: ProductCategory[] = [
  "Pump Shafts", "Sleeves & Bushes", "Pump Components", 
  "Couplings", "Lock Nuts", "Bearings & Rings", "Gears"
];

const INDUSTRIES: ApplicationIndustry[] = [
  "Oil & Gas", "Marine", "Water & Wastewater", "Chemical Processing", "Power Generation", "OEMs"
];

export function ProductListingClient({ initialProducts }: ProductListingClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All">("All");
  const [selectedIndustry, setSelectedIndustry] = useState<ApplicationIndustry | "All">("All");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesIndustry = selectedIndustry === "All" || product.applications.includes(selectedIndustry);
      
      return matchesSearch && matchesCategory && matchesIndustry;
    });
  }, [initialProducts, searchQuery, selectedCategory, selectedIndustry]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        {/* Filter Controls */}
        <div className="mb-12 flex flex-col gap-6 rounded-xl border border-line bg-surface p-6 md:flex-row md:items-center md:justify-between shadow-sm">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-ink-muted" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border border-line bg-white py-2.5 pl-10 pr-3 text-sm text-navy focus:border-oxide focus:outline-none focus:ring-1 focus:ring-oxide"
              placeholder="Search products by name or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Category Dropdown */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-ink-muted" />
              <select
                className="rounded-lg border border-line bg-white py-2.5 pl-3 pr-8 text-sm text-navy focus:border-oxide focus:outline-none focus:ring-1 focus:ring-oxide appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | "All")}
                aria-label="Filter by Category"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Industry Dropdown */}
            <div className="flex items-center gap-2">
              <Settings size={16} className="text-ink-muted" />
              <select
                className="rounded-lg border border-line bg-white py-2.5 pl-3 pr-8 text-sm text-navy focus:border-oxide focus:outline-none focus:ring-1 focus:ring-oxide appearance-none"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value as ApplicationIndustry | "All")}
                aria-label="Filter by Industry"
              >
                <option value="All">All Industries</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={product.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm hover:shadow-raised hover:border-oxide/30 transition-all"
                >
                  <Link href={`/products/${product.slug}`} className="relative aspect-[4/3] overflow-hidden bg-surface flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block rounded-sm bg-navy/90 backdrop-blur px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="mb-2 font-display text-xl font-bold text-navy group-hover:text-oxide transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="mb-6 text-sm text-ink-muted leading-relaxed line-clamp-3">
                      {product.summary}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:text-oxide"
                      >
                        View Details <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-display text-2xl font-bold text-navy mb-3">No products found</h3>
            <p className="text-ink-muted">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSelectedIndustry("All"); }}
              className="mt-6 inline-flex text-oxide hover:text-[#E64A19] font-bold uppercase text-sm tracking-wider"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
