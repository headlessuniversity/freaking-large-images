import type { Route } from "./+types/step-5";
import { StepFive as StepFiveView } from "../views/step-five/step-five";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 5: Responsive Sizing - Freaking Large Images" },
    {
      name: "description",
      content: "Dynamic image resizing with Contentful's API parameters",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepFive({ loaderData }: Route.ComponentProps) {
  return <StepFiveView message={loaderData.message} />;
}
