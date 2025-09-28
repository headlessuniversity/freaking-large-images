import type { Route } from "./+types/step-7";
import { StepSeven as StepSevenView } from "../views/step-seven/step-seven";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 7: Responsive Images - Freaking Large Images" },
    {
      name: "description",
      content:
        "Implement mobile-first responsive images using srcset and sizes attributes. Let browsers automatically select the optimal image size based on device screen width and pixel density.",
    },
  ];
}

export default function StepSeven() {
  return <StepSevenView />;
}
