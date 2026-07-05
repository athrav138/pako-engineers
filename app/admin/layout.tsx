import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Settings, FileText } from "lucide-react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Public Website", href: "/", icon: FileText },
    { name: "Settings", href: "/admin", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white flex flex-col">
        <div className="p-6">
          <Link href="/" className="text-2xl font-display font-bold tracking-tight text-white">
            PAKO<span className="text-orange">.</span> ADMIN
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              <item.icon className="h-5 w-5 text-orange" />
              <span className="font-body font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-line flex items-center justify-between px-8">
          <h1 className="text-xl font-display font-semibold text-ink">Admin Portal</h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium text-muted">Website running</div>
            <div className="h-8 w-8 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
          </div>
        </header>
        <div className="p-8 flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
