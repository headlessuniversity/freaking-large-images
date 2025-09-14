import type { Route } from "./+types/step-4c";
import { StepFourC as StepFourCView } from "../views/step-four-c/step-four-c";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 4C: Quality Adjustment - Freaking Large Images" },
    {
      name: "description",
      content: "Optimize file size using Contentful's quality parameter",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepFourC({ loaderData }: Route.ComponentProps) {
  return <StepFourCView message={loaderData.message} />;
}
