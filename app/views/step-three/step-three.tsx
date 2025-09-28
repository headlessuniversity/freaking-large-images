// Step 3: Images served from Contentful CDN
import { BaseStepViewBasic } from "../../components/BaseStepViewBasic";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepThree() {
  // Basic CDN - no optimization parameters for display, full quality for modal
  const images = getStepImagesWithModal();

  return <BaseStepViewBasic images={images} />;
}
