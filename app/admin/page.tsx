"use client";

import { Users, FileText, Package, Briefcase, Activity, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  const STATS = [
    { label: "Total Website Visitors", value: "12,450", change: "+14.2%", icon: Users },
    { label: "New RFQs (This Month)", value: "34", change: "+5.1%", icon: FileText },
    { label: "Active Products", value: "245", change: "0%", icon: Package },
    { label: "Job Applications", value: "18", change: "+12%", icon: Briefcase },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-navy">Dashboard Overview</h2>
        <p className="text-sm text-ink-muted mt-1">Website overview for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={i} className="rounded-xl border border-line bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="text-ink-muted" size={20} />
              <span className={`text-xs font-semibold ${stat.change.startsWith('+') ? 'text-success' : 'text-ink-muted'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-display font-bold text-navy mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts and Pipeline (Placeholder UI for Linear/Vercel style) */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 rounded-xl border border-line bg-white p-6 shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-navy">Website Traffic & RFQ Conversions</h3>
            <select className="text-sm border border-line rounded p-1">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 flex items-center justify-center bg-surface/50 rounded border border-dashed border-line">
            <div className="text-center text-ink-muted">
              <Activity size={32} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">Analytics Chart Integration Ready</p>
              <p className="text-xs mt-1">Connect Google Analytics 4 / Microsoft Clarity</p>
            </div>
          </div>
        </div>

        {/* Recent Activity / Pipeline */}
        <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
          <h3 className="font-bold text-navy mb-6">Recent RFQ Leads</h3>
          <div className="space-y-4">
            {[
              { company: "Global Pumps Inc.", status: "NEW", time: "2 hours ago" },
              { company: "Marine Systems Corp", status: "CONTACTED", time: "5 hours ago" },
              { company: "AgriFlow", status: "QUOTED", time: "1 day ago" },
              { company: "PetroTech Industries", status: "QUALIFIED", time: "2 days ago" },
            ].map((lead, i) => (
              <div key={i} className="flex items-center justify-between border-b border-line pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-semibold text-sm text-navy">{lead.company}</p>
                  <p className="text-xs text-ink-muted">{lead.time}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                  lead.status === 'NEW' ? 'bg-orange/10 text-orange' : 
                  lead.status === 'QUOTED' ? 'bg-success/10 text-success' : 
                  'bg-navy/10 text-navy'
                }`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-oxide hover:underline">
            View All Leads <TrendingUp size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
