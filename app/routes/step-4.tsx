import type { Route } from "./+types/step-4";
import { StepFour as StepFourView } from "../views/step-four/step-four";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 4: Modern Formats - Freaking Large Images" },
    {
      name: "description",
      content: "Using Contentful's format optimization (WebP, AVIF)",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepFour({ loaderData }: Route.ComponentProps) {
  return <StepFourView message={loaderData.message} />;
}
