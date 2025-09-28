import type { Route } from "./+types/step-4b";
import { StepFourB as StepFourBView } from "../views/step-four-b/step-four-b";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 4B: Image Resizing - Freaking Large Images" },
    {
      name: "description",
      content:
        "Master dynamic image resizing using Contentful's width and height parameters. Serve appropriately sized images to reduce bandwidth and improve loading speed.",
    },
  ];
}

export default function StepFourB() {
  return <StepFourBView />;
}
