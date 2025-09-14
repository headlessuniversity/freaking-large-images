// Test route: Dynamic Contentful API parameter testing
import { BaseStepView } from "../components/BaseStepView";
import { getStepImages } from "../config/contentful-assets";
import { useSearchParams } from "react-router";

export default function Test() {
  const [searchParams] = useSearchParams();
  
  // Get params from URL query string (e.g., /test?params=?fm=webp&q=50&w=600)
  const urlParams = searchParams.get("params") || "";
  
  // Use the URL params directly with getStepImages
  const images = getStepImages({ params: urlParams });

  // Create a display-friendly version of the params
  const displayParams = urlParams || "(no parameters - basic CDN)";
  
  return (
    <BaseStepView
      stepNumber={0}
      title="Test Route"
      description={`Testing Contentful API parameters: ${displayParams}`}
      images={images}
    />
  );
}
