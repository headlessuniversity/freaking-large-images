import type { Route } from "./+types/step-1";
import { StepOne as StepOneView } from "../views/step-one/step-one";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 1: No Optimization - Freaking Large Images" },
    {
      name: "description",
      content:
        "Baseline demonstration with no image optimization. See how large unoptimized images impact page load times and performance before applying optimization techniques.",
    },
  ];
}

export default function StepOne() {
  return <StepOneView />;
}
