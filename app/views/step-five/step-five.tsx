// Step 5: Images served from Contentful CDN with AVIF format and quality optimization
import { BaseStepView } from "../../components/BaseStepView";
import { getStepImages } from "../../config/contentful-assets";

export function StepFive({ message }: { message: string }) {
  // AVIF format with quality and width optimization
  const images = getStepImages({ params: "?fm=avif&q=25&w=800" });

  return (
    <BaseStepView
      stepNumber={5}
      title="Responsive Sizing"
      description="Images optimized with AVIF format and quality settings - smaller file sizes with better compression"
      images={images}
      message={message}
    />
  );
}
