// Test route: Dynamic Contentful API parameter testing
import { BaseStepView } from "../components/BaseStepView";
import { getStepImages } from "../config/contentful-assets";
import { useSearchParams } from "react-router";

export default function Test() {
  const [searchParams] = useSearchParams();

  // Convert URL search params directly to Contentful query string
  const params = searchParams.toString();
  const contentfulParams = params ? `?${params}` : "";

  // Use the URL params directly with getStepImages
  const images = getStepImages({ params: contentfulParams });

  // Create a display-friendly version of the params
  const displayParams = contentfulParams || "(no parameters - basic CDN)";

  return (
    <BaseStepView
      stepNumber={0}
      title="Test Route"
      description={`Testing Contentful API parameters: ${displayParams}`}
      images={images}
    />
  );
}
