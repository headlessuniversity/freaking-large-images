// Step 5: Images served from Contentful CDN with combined optimizations
import { BaseStepViewBasic } from "../../components/BaseStepViewBasic";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFive() {
  // Combined optimizations: AVIF format + resizing + quality adjustment for display, full quality for modal
  const images = getStepImagesWithModal({ params: "?fm=avif&w=600&q=25" });

  return <BaseStepViewBasic images={images} />;
}
