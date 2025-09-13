// Step 3: Images served from Contentful CDN
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImages } from "../../config/contentful-assets";

export function StepThree({ message }: { message: string }) {
  const images = getStepImages(3);

  return (
    <BaseStepView
      stepNumber={3}
      title="CDN (Contentful)"
      description="Images served from Contentful CDN for global distribution"
      images={images}
      message={message}
    />
  );
}
