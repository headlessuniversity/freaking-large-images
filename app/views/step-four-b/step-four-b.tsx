// Step 4B: Images served from Contentful CDN with dynamic resizing
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFourB({ message }: { message: string }) {
  // Dynamic resizing to 800px width for display, full quality for modal
  const images = getStepImagesWithModal({
    params: "?w=800",
  });

  return (
    <BaseStepView
      stepNumber="4B"
      title="Image Resizing"
      description="Images dynamically resized to 800px width using Contentful's width parameter - reduces file size by serving appropriately sized images"
      images={images}
      message={message}
    />
  );
}
