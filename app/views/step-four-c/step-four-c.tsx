// Step 4C: Images served from Contentful CDN with quality optimization
import { BaseStepViewBasic } from "../../components/BaseStepViewBasic";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFourC() {
  // Quality optimization to 60% for display, full quality for modal
  const images = getStepImagesWithModal({
    params: "?q=60",
  });

  return <BaseStepViewBasic images={images} />;
}
