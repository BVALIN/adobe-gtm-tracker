import Link from "next/link";
import Header from "../components/Header";

const clients = [
  {
    name: "Kroger",
    industry: "Grocery",
    step: "Internal Input & Review",
    href: "/clients/kroger",
  },
  {
    name: "Ulta Beauty",
    industry: "Beauty",
    step: "Internal Input & Review",
    href: "/clients/ulta-beauty",
  },
  {
    name: "Dick's Sporting Goods",
    industry: "Sporting Goods",
    step: "Research in Progress",
    href: "/clients/dicks-sporting-goods",
  },
  {
    name: "GAP Inc.",
    industry: "Fashion/Apparel",
    step: "Research in Progress",
    href: "/clients/gap",
  },
];

const stepStyle: Record<string, string> = {
  "Internal Input & Review":
    "bg-amber-50 text-amber-700 border border-amber-200",
  "Research in Progress":
    "bg-blue-50 text-blue-700 border border-blue-200",
};

export default function ClientList() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-5xl mx-auto px-8 py-10">
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

        <h2 className="text-2xl font-bold text-[#0A1628] mb-2">
          Target Client List
        </h2>
        <p className="text-[#6B7280] text-sm mb-8">
          Experience Concierge for Retail (ECR) — Solution 1
        </p>

        <div className="grid grid-cols-2 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-6"
            >
              <div className="mb-4">
                <h3 className="text-[#0A1628] font-bold text-xl mb-1">
                  {client.name}
                </h3>
                <p className="text-[#6B7280] text-sm">{client.industry}</p>
              </div>

              <p className="text-[#6B7280] text-xs mb-3">
                Solution:{" "}
                <span className="text-[#1A1A1A] font-medium">
                  Experience Concierge for Retail (ECR)
                </span>
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                <span
                  className={`text-xs px-2.5 py-1 rounded-md ${
                    stepStyle[client.step] ??
                    "bg-gray-100 text-gray-500 border border-gray-200"
                  }`}
                >
                  {client.step}
                </span>
                <Link
                  href={client.href}
                  className="bg-[#0A1628] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#0A1628]/90 transition-colors"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
