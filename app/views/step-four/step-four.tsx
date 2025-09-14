// Step 4: Images served from Contentful CDN with WebP format
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImages } from "../../config/contentful-assets";

export function StepFour({ message }: { message: string }) {
  // WebP format optimization
  const images = getStepImages({
    params: "?fm=webp",
  });

  return (
    <BaseStepView
      stepNumber={4}
      title="Modern Formats"
      description="Images automatically converted to WebP format - faster loading"
      images={images}
      message={message}
    />
  );
}
