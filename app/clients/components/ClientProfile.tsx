import Link from "next/link";
import Header from "../../components/Header";

const workflowSteps = [
  "Model Design",
  "Model Template Creation",
  "Client Qualification",
  "Research & Benchmarks",
  "Internal Input & Review",
  "External Review",
  "Complete",
];

type Props = {
  name: string;
  industry: string;
  solution: string;
  currentStep: number;
  revenue: string;
  ebit: string;
  roi: string;
  status: string;
};

export default function ClientProfile({
  name,
  industry,
  solution,
  currentStep,
  revenue,
  ebit,
  roi,
  status,
}: Props) {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-5xl mx-auto px-8 py-10">
        {/* Top nav row */}
        <div className="flex justify-between items-center mb-10">
          <Link
            href="/clients"
            className="bg-[#0A1628] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#0A1628]/90 transition-colors"
          >
            ← Back to Client List
          </Link>
          <span className="text-[#6B7280] text-sm">
            Last Updated: March 3, 2025
          </span>
        </div>

        {/* Client header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#0A1628] mb-1">{name}</h1>
          <p className="text-[#6B7280]">
            {industry}&nbsp;&nbsp;·&nbsp;&nbsp;{solution}
          </p>
        </div>

        {/* Workflow progress */}
        <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-6 mb-6">
          <h2 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-6">
            Workflow Progress
          </h2>
          <div className="flex items-start">
            {workflowSteps.map((step, i) => {
              const stepNum = i + 1;
              const isCompleted = stepNum < currentStep;
              const isCurrent = stepNum === currentStep;
              const isLast = i === workflowSteps.length - 1;

              return (
                <div
                  key={step}
                  className={`flex items-start ${!isLast ? "flex-1" : ""}`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0
                        ${
                          isCompleted
                            ? "bg-[#FF6900] border-[#FF6900] text-white"
                            : isCurrent
                            ? "bg-[#FF6900] border-[#FF6900] text-white ring-4 ring-[#FF6900]/20"
                            : "bg-white border-[#E5E7EB] text-[#9CA3AF]"
                        }
                      `}
                    >
                      {isCompleted ? "✓" : stepNum}
                    </div>
                    <span
                      className={`text-xs mt-2 text-center leading-tight max-w-[72px]
                        ${
                          isCurrent
                            ? "text-[#FF6900] font-semibold"
                            : isCompleted
                            ? "text-[#6B7280]"
                            : "text-[#9CA3AF]"
                        }
                      `}
                    >
                      {step}
                    </span>
                  </div>

                  {!isLast && (
                    <div
                      className={`h-0.5 flex-1 mt-4 mx-1 ${
                        stepNum < currentStep
                          ? "bg-[#FF6900]"
                          : "bg-[#E5E7EB]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#F5F5F5] border border-[#E5E7EB] border-t-4 border-t-[#FF6900] rounded-xl p-5">
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-3">
              Incremental Revenue
            </p>
            <p className="text-2xl font-bold text-[#0A1628]">{revenue}</p>
          </div>
          <div className="bg-[#F5F5F5] border border-[#E5E7EB] border-t-4 border-t-[#FF6900] rounded-xl p-5">
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-3">
              Incremental EBIT
            </p>
            <p className="text-2xl font-bold text-[#0A1628]">{ebit}</p>
          </div>
          <div className="bg-[#F5F5F5] border border-[#E5E7EB] border-t-4 border-t-[#FF6900] rounded-xl p-5">
            <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-3">
              ROI
            </p>
            <p className="text-2xl font-bold text-[#FF6900]">{roi}</p>
          </div>
        </div>

        {/* Status notes */}
        <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-6">
          <h2 className="text-xs font-semibold text-[#0A1628] uppercase tracking-wider mb-3">
            Status Notes
          </h2>
          <p className="text-[#1A1A1A] leading-relaxed">{status}</p>
        </div>
      </div>
    </main>
  );
}
