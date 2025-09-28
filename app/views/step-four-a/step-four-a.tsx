// Step 4A: Images served from Contentful CDN with WebP format conversion
import { BaseStepViewBasic } from "../../components/BaseStepViewBasic";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFourA() {
  // WebP format conversion for display, full quality for modal
  const images = getStepImagesWithModal({
    params: "?fm=webp",
  });

  return <BaseStepViewBasic images={images} />;
}
