import type { Route } from "./+types/step-6";
import { StepSix as StepSixView } from "../views/step-six/step-six";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Step 6: Image Sprites with Smart Cropping - Freaking Large Images",
    },
    {
      name: "description",
      content:
        "Advanced image sprites technique: combine multiple images into one file and use CSS background-position for client-side cropping. Reduces HTTP requests from 4 to 1.",
    },
  ];
}

export default function StepSix() {
  return <StepSixView />;
}
