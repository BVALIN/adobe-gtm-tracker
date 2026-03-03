import Link from "next/link";
import Header from "./components/Header";

const navItems = [
  {
    title: "Program Dashboard",
    description: "Program KPIs, solution rollups, and client financials",
    href: "/dashboard",
    active: true,
  },
  {
    title: "Value Tracker",
    description: "Model status and workflow progress across all clients",
    href: "/tracker",
    active: true,
  },
  {
    title: "Target Client List",
    description: "Individual client profiles and solution details",
    href: "/clients",
    active: true,
  },
  { title: "To Be Added", description: "", href: null, active: false },
  { title: "To Be Added", description: "", href: null, active: false },
  { title: "To Be Added", description: "", href: null, active: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#0A1628] mb-2 tracking-tight">
            Adobe GTM Program
          </h1>
          <p className="text-[#6B7280] text-base">
            Merkle × Adobe
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {navItems.map((item, i) =>
            item.active ? (
              <Link key={i} href={item.href!} className="group">
                <div className="h-full bg-[#FF6900] rounded-xl p-6 hover:bg-[#e55e00] transition-colors duration-200">
                  <h2 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ) : (
              <div
                key={i}
                className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl p-6 cursor-not-allowed"
              >
                <h2 className="text-[#6B7280] font-semibold text-lg">
                  {item.title}
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
