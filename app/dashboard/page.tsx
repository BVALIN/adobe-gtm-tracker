import Link from "next/link";
import Header from "../components/Header";

const kpis = [
  { label: "Total Incremental Revenue", value: "$14.8B" },
  { label: "Total Incremental EBIT", value: "$944M" },
  { label: "Solutions", value: "2" },
  { label: "Clients Modeled", value: "4" },
];

const ecrClients = [
  {
    name: "Kroger",
    industry: "Grocery",
    step: "Internal Input & Review",
    revenue: "$4.2B",
    ebit: "$155M",
    roi: "252%",
  },
  {
    name: "Ulta Beauty",
    industry: "Beauty",
    step: "Internal Input & Review",
    revenue: "$2.4B",
    ebit: "$271M",
    roi: "399%",
  },
  {
    name: "Dick's Sporting Goods",
    industry: "Sporting Goods",
    step: "Research in Progress",
    revenue: "$2.1B",
    ebit: "$94M",
    roi: "156%",
  },
  {
    name: "GAP Inc.",
    industry: "Fashion/Apparel",
    step: "Research in Progress",
    revenue: "$6.1B",
    ebit: "$424M",
    roi: "694%",
  },
];

const stepStyle: Record<string, string> = {
  "Internal Input & Review":
    "bg-amber-50 text-amber-700 border border-amber-200",
  "Research in Progress":
    "bg-blue-50 text-blue-700 border border-blue-200",
};

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Top nav row */}
        <div className="flex justify-between items-center mb-10">
          <Link
            href="/"
            className="bg-[#0A1628] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#0A1628]/90 transition-colors"
          >
            ← Back to Home
          </Link>
          <span className="text-[#6B7280] text-sm">
            Last Updated: March 3, 2025
          </span>
        </div>

        <h2 className="text-2xl font-bold text-[#0A1628] mb-6">
          Program Dashboard
        </h2>

        {/* Program KPI cards */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-5 border-t-4 border-t-[#FF6900]"
            >
              <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-3">
                {kpi.label}
              </p>
              <p className="text-3xl font-bold text-[#0A1628]">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Solution 1: ECR */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#FF6900] text-xs font-bold uppercase tracking-widest">
              Solution 1
            </span>
            <div className="w-px h-4 bg-[#E5E7EB]" />
            <h3 className="text-[#0A1628] font-semibold text-lg">
              Experience Concierge for Retail
            </h3>
            <span className="text-[#6B7280] text-sm font-medium">ECR</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ecrClients.map((client) => (
              <div
                key={client.name}
                className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-5"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-[#1A1A1A] font-semibold">
                      {client.name}
                    </h4>
                    <p className="text-[#6B7280] text-sm mt-0.5">
                      {client.industry}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-md whitespace-nowrap ${
                      stepStyle[client.step] ??
                      "bg-gray-100 text-gray-500 border border-gray-200"
                    }`}
                  >
                    {client.step}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E5E7EB]">
                  <div>
                    <p className="text-[#6B7280] text-xs mb-1">Incr. Revenue</p>
                    <p className="text-[#1A1A1A] font-semibold text-sm">
                      {client.revenue}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-xs mb-1">Incr. EBIT</p>
                    <p className="text-[#1A1A1A] font-semibold text-sm">
                      {client.ebit}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-xs mb-1">ROI</p>
                    <p className="text-[#FF6900] font-bold text-sm">
                      {client.roi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution 2: Modern CRM */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#FF6900] text-xs font-bold uppercase tracking-widest">
              Solution 2
            </span>
            <div className="w-px h-4 bg-[#E5E7EB]" />
            <h3 className="text-[#0A1628] font-semibold text-lg">
              Modern CRM
            </h3>
          </div>

          <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="w-2 h-2 rounded-full bg-[#6B7280] mx-auto mb-3" />
              <p className="text-[#1A1A1A] font-medium">In Development</p>
              <p className="text-[#6B7280] text-sm mt-1">
                No clients modeled yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
