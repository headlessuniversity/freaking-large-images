import type { Route } from "./+types/step-8";
import { StepEight as StepEightView } from "../views/step-eight/step-eight";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Step 8: Dynamic Content from Contentful API - Freaking Large Images",
    },
    {
      name: "description",
      content:
        "Fetch images, alt text, and descriptions dynamically from Contentful API - supports multilingual accessibility and eliminates hardcoded content",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepEight({ loaderData }: Route.ComponentProps) {
  return <StepEightView message={loaderData.message} />;
}
