// Step 4C: Images served from Contentful CDN with quality optimization
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFourC({ message }: { message: string }) {
  // Quality optimization to 60% for display, full quality for modal
  const images = getStepImagesWithModal({
    params: "?q=60",
  });

  return (
    <BaseStepView
      stepNumber="4C"
      title="Quality Adjustment"
      description="Images compressed to 60% quality using Contentful's quality parameter - reduces file size while maintaining visual quality"
      images={images}
      message={message}
    />
  );
}
