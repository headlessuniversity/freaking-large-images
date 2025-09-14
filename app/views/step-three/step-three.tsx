// Step 3: Images served from Contentful CDN
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepThree({ message }: { message: string }) {
  // Basic CDN - no optimization parameters for display, full quality for modal
  const images = getStepImagesWithModal();

  return (
    <BaseStepView
      stepNumber={3}
      title="CDN (Contentful)"
      description="Images served from Contentful CDN for global distribution"
      images={images}
      message={message}
    />
  );
}
