"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, ChevronRight, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

const JOBS = [
  { id: 1, title: "CNC Programmer (5-Axis)", department: "Production", location: "Mumbai, India", type: "Full Time", exp: "5+ Years" },
  { id: 2, title: "Quality Inspector", department: "Quality Assurance", location: "Mumbai, India", type: "Full Time", exp: "3+ Years" },
  { id: 3, title: "Mechanical Design Engineer", department: "Engineering", location: "Pune, India", type: "Full Time", exp: "2-4 Years" },
  { id: 4, title: "Export Sales Manager", department: "Sales", location: "Remote / Mumbai", type: "Full Time", exp: "7+ Years" }
];

export function JobPortal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const filteredJobs = JOBS.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="bg-background-light py-20 lg:py-32" id="open-positions">
      <Container>
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 text-ink-muted">Join our team of engineers and innovators shaping the future of precision manufacturing.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-line bg-white py-3 pl-10 pr-4 text-sm focus:border-oxide focus:outline-none focus:ring-1 focus:ring-oxide"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-raised">
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-ink-muted">
                  <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                  <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                  <span className="bg-surface px-2 py-1 rounded text-xs font-semibold uppercase">{job.type}</span>
                  <span className="bg-surface px-2 py-1 rounded text-xs font-semibold uppercase">{job.exp}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(job.id)}
                className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-md bg-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-oxide"
              >
                Apply Now
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-center text-ink-muted py-12">No open positions found matching your search.</p>
          )}
        </div>

        {/* Modal for Application Form (Simplified) */}
        <AnimatePresence>
          {selectedJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"
              >
                <button onClick={() => setSelectedJob(null)} className="absolute right-4 top-4 text-ink-muted hover:text-navy">
                  <X size={24} />
                </button>
                <h3 className="font-display text-2xl font-bold text-navy mb-6">Application Form</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted!"); setSelectedJob(null); }}>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1">Full Name</label>
                    <input type="text" required className="w-full rounded-md border border-line p-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1">Email</label>
                    <input type="email" required className="w-full rounded-md border border-line p-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy block mb-1">Resume (PDF)</label>
                    <input type="file" required className="w-full rounded-md border border-line p-2 text-sm" accept=".pdf" />
                  </div>
                  <button type="submit" className="w-full rounded-md bg-navy py-3 text-white font-medium hover:bg-oxide mt-4">Submit Application</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
