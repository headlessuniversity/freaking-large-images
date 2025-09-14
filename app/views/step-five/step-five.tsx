// Step 5: Images served from Contentful CDN with combined optimizations
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFive({ message }: { message: string }) {
  // Combined optimizations: WebP format + resizing + quality adjustment for display, full quality for modal
  const images = getStepImagesWithModal({ params: "?fm=webp&w=800&q=60" });

  return (
    <BaseStepView
      stepNumber={5}
      title="Combined Optimization"
      description="All optimizations combined - WebP format, 800px width resizing, and 60% quality adjustment for maximum efficiency"
      images={images}
      message={message}
    />
  );
}
