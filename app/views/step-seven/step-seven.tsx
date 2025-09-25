// Step 7: Responsive images using srcset with mobile-first approach
import { BaseStepView } from "../../components/BaseStepView";
import { getResponsiveImages } from "../../config/contentful-assets";

export function StepSeven({ message }: { message: string }) {
  // Get responsive images with mobile-first srcset
  const images = getResponsiveImages();

  return (
    <BaseStepView
      stepNumber={7}
      title="Responsive Images"
      description="Mobile-first responsive images using srcset - browser automatically selects optimal image size (480px/768px/1200px) based on screen width. WebP format with quality optimization included."
      images={images}
      message={message}
    />
  );
}
