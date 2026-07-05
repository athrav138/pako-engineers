import { CheckCircle2, Clock3, Globe2, Mail } from "lucide-react";

export default async function AdminDashboardPage() {
  const stats = [
    {
      title: "Website Status",
      value: "Live",
      icon: Globe2,
      trend: "Public site available",
    },
    {
      title: "Backend",
      value: "Ready",
      icon: Clock3,
      trend: "API routes available",
    },
    {
      title: "Forms",
      value: "Ready",
      icon: CheckCircle2,
      trend: "Validated on submit",
    },
    {
      title: "Email Leads",
      value: "Open",
      icon: Mail,
      trend: "Captured by server actions",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-display font-bold text-ink">Dashboard Overview</h2>
        <p className="mt-2 text-muted">Website tools are ready for public enquiries and quote requests.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-card border border-line">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted">{stat.title}</p>
                <p className="text-3xl font-display font-bold text-ink mt-2">{stat.value}</p>
              </div>
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-navy/5 text-navy">
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-success font-medium">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-card border border-line overflow-hidden">
        <div className="px-6 py-5 border-b border-line">
          <h3 className="text-lg font-display font-semibold text-ink">Form Handling</h3>
        </div>
        <div className="p-6 text-center text-muted">
          <Mail className="mx-auto h-12 w-12 text-line mb-4" />
          <p>Contact and RFQ forms validate requests and send them through the backend.</p>
        </div>
      </div>
    </div>
  );
}
