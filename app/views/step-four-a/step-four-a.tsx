// Step 4A: Images served from Contentful CDN with WebP format conversion
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFourA({ message }: { message: string }) {
  // WebP format conversion for display, full quality for modal
  const images = getStepImagesWithModal({
    params: "?fm=webp",
  });

  return (
    <BaseStepView
      stepNumber="4A"
      title="File Type Conversion"
      description="Images automatically converted to WebP format using Contentful's format parameter - modern format with better compression than JPEG"
      images={images}
      message={message}
    />
  );
}
