import ClientProfile from "../components/ClientProfile";

export default function GapPage() {
  return (
    <ClientProfile
      name="GAP Inc."
      industry="Fashion/Apparel"
      solution="Experience Concierge for Retail (ECR)"
      currentStep={4}
      revenue="$6.1B"
      ebit="$424M"
      roi="694%"
      status="Research in progress. Pulling 10-K financials and industry benchmarks."
    />
  );
}
