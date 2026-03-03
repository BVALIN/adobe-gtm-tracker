import ClientProfile from "../components/ClientProfile";

export default function KrogerPage() {
  return (
    <ClientProfile
      name="Kroger"
      industry="Grocery"
      solution="Experience Concierge for Retail (ECR)"
      currentStep={5}
      revenue="$4.2B"
      ebit="$155M"
      roi="252%"
      status="Model in internal review. Assumptions being validated with SME inputs and investment costs."
    />
  );
}
