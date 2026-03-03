import Link from "next/link";
import Header from "../components/Header";

const rows = [
  {
    num: "1",
    solution: "ECR",
    client: "Kroger",
    industry: "Grocery",
    step: "Internal Input & Review",
    revenue: "$4.2B",
    ebit: "$155M",
    roi: "252%",
  },
  {
    num: "1",
    solution: "ECR",
    client: "Ulta Beauty",
    industry: "Beauty",
    step: "Internal Input & Review",
    revenue: "$2.4B",
    ebit: "$271M",
    roi: "399%",
  },
  {
    num: "1",
    solution: "ECR",
    client: "Dick's Sporting Goods",
    industry: "Sporting Goods",
    step: "Research in Progress",
    revenue: "$2.1B",
    ebit: "$94M",
    roi: "156%",
  },
  {
    num: "1",
    solution: "ECR",
    client: "GAP Inc.",
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
  "Template in Progress":
    "bg-gray-100 text-gray-500 border border-gray-200",
};

export default function Tracker() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-8 py-10">
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
          Value Tracker
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628]">
                <th className="text-left text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider w-10">
                  #
                </th>
                <th className="text-left text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider">
                  Solution
                </th>
                <th className="text-left text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider">
                  Client
                </th>
                <th className="text-left text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider">
                  Industry
                </th>
                <th className="text-left text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider">
                  Current Step
                </th>
                <th className="text-right text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider">
                  Incr. Revenue
                </th>
                <th className="text-right text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider">
                  Incr. EBIT
                </th>
                <th className="text-right text-white/70 font-medium px-4 py-3 text-xs uppercase tracking-wider">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ECR client rows */}
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#E5E7EB] hover:bg-[#F5F5F5] transition-colors"
                >
                  <td className="px-4 py-3.5 text-[#6B7280]">{row.num}</td>
                  <td className="px-4 py-3.5 text-[#1A1A1A] font-medium">
                    {row.solution}
                  </td>
                  <td className="px-4 py-3.5 text-[#1A1A1A] font-semibold">
                    {row.client}
                  </td>
                  <td className="px-4 py-3.5 text-[#6B7280]">{row.industry}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-md ${
                        stepStyle[row.step] ??
                        "bg-gray-100 text-gray-500 border border-gray-200"
                      }`}
                    >
                      {row.step}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right text-[#1A1A1A] font-medium">
                    {row.revenue}
                  </td>
                  <td className="px-4 py-3.5 text-right text-[#1A1A1A] font-medium">
                    {row.ebit}
                  </td>
                  <td className="px-4 py-3.5 text-right text-[#FF6900] font-bold">
                    {row.roi}
                  </td>
                </tr>
              ))}

              {/* ECR Subtotal row */}
              <tr className="border-b border-[#E5E7EB] bg-[#F5F5F5]">
                <td className="px-4 py-3.5" />
                <td className="px-4 py-3.5 text-[#FF6900] text-xs font-bold uppercase tracking-widest">
                  ECR Subtotal
                </td>
                <td className="px-4 py-3.5" />
                <td className="px-4 py-3.5" />
                <td className="px-4 py-3.5" />
                <td className="px-4 py-3.5 text-right text-[#1A1A1A] font-bold">
                  $14.8B
                </td>
                <td className="px-4 py-3.5 text-right text-[#1A1A1A] font-bold">
                  $944M
                </td>
                <td className="px-4 py-3.5" />
              </tr>

              {/* Modern CRM row */}
              <tr className="border-b border-[#E5E7EB]">
                <td className="px-4 py-3.5 text-[#6B7280]">2</td>
                <td className="px-4 py-3.5 text-[#1A1A1A] font-medium">
                  Modern CRM
                </td>
                <td className="px-4 py-3.5 text-[#6B7280]">—</td>
                <td className="px-4 py-3.5 text-[#6B7280]">—</td>
                <td className="px-4 py-3.5">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-500 border border-gray-200">
                    Template in Progress
                  </span>
                </td>
                <td className="px-4 py-3.5 text-right text-[#6B7280]">—</td>
                <td className="px-4 py-3.5 text-right text-[#6B7280]">—</td>
                <td className="px-4 py-3.5 text-right text-[#6B7280]">—</td>
              </tr>

              {/* Program Total row */}
              <tr className="bg-[#0A1628]">
                <td className="px-4 py-4" />
                <td className="px-4 py-4 text-white text-xs font-bold uppercase tracking-widest">
                  Program Total
                </td>
                <td className="px-4 py-4" />
                <td className="px-4 py-4" />
                <td className="px-4 py-4" />
                <td className="px-4 py-4 text-right text-white font-bold text-base">
                  $14.8B
                </td>
                <td className="px-4 py-4 text-right text-white font-bold text-base">
                  $944M
                </td>
                <td className="px-4 py-4" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
