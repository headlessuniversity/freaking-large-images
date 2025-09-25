// Step 5: Images served from Contentful CDN with combined optimizations
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFive({ message }: { message: string }) {
  // Combined optimizations: AVIF format + resizing + quality adjustment for display, full quality for modal
  const images = getStepImagesWithModal({ params: "?fm=avif&w=600&q=25" });

  return (
    <BaseStepView
      stepNumber={5}
      title="Combined Optimization"
      description="All optimizations combined - AVIF format, 600px width resizing, and 25% quality adjustment for maximum efficiency"
      images={images}
      message={message}
    />
  );
}
