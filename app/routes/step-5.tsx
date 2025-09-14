import type { Route } from "./+types/step-5";
import { StepFive as StepFiveView } from "../views/step-five/step-five";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 5: Combined Optimization - Freaking Large Images" },
    {
      name: "description",
      content:
        "All optimizations combined - WebP format, resizing, and quality adjustment for maximum efficiency",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepFive({ loaderData }: Route.ComponentProps) {
  return <StepFiveView message={loaderData.message} />;
}
