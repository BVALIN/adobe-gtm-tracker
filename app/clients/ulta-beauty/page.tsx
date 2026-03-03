import ClientProfile from "../components/ClientProfile";

export default function UltaBeautyPage() {
  return (
    <ClientProfile
      name="Ulta Beauty"
      industry="Beauty"
      solution="Experience Concierge for Retail (ECR)"
      currentStep={5}
      revenue="$2.4B"
      ebit="$271M"
      roi="399%"
      status="Model in internal review. Assumptions being validated with SME inputs and investment costs."
    />
  );
}
