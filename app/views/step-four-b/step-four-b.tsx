// Step 4B: Images served from Contentful CDN with dynamic resizing
import { BaseStepViewBasic } from "../../components/BaseStepViewBasic";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFourB() {
  // Dynamic resizing to 800px width for display, full quality for modal
  const images = getStepImagesWithModal({
    params: "?w=800",
  });

  return <BaseStepViewBasic images={images} />;
}
