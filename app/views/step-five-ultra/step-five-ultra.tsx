// Step 5 Ultra: Ultimate optimization with preloading and fetch priority
import { BaseStepViewUltra } from "../../components/BaseStepViewUltra";
import { getStepImagesWithModal } from "../../config/contentful-assets";

export function StepFiveUltra() {
  // Ultimate optimization: AVIF format + resizing + quality + preloading + fetch priority
  const images = getStepImagesWithModal({ params: "?fm=avif&w=600&q=25" });

  return <BaseStepViewUltra images={images} />;
}
