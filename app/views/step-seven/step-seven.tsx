// Step 7: Responsive images using srcset with mobile-first approach
import { BaseStepViewResponsive } from "../../components/BaseStepViewResponsive";
import { getResponsiveImages } from "../../config/contentful-assets";

export function StepSeven() {
  // Get responsive images with mobile-first srcset
  const images = getResponsiveImages();

  return <BaseStepViewResponsive images={images} />;
}
