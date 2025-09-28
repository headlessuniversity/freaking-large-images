import type { Route } from "./+types/step-4c";
import { StepFourC as StepFourCView } from "../views/step-four-c/step-four-c";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 4C: Quality Adjustment - Freaking Large Images" },
    {
      name: "description",
      content:
        "Optimize image file sizes using Contentful's quality parameter. Learn how to balance visual quality with file size for optimal web performance.",
    },
  ];
}

export default function StepFourC() {
  return <StepFourCView />;
}
