import type { Route } from "./+types/step-4a";
import { StepFourA as StepFourAView } from "../views/step-four-a/step-four-a";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 4A: File Type Conversion - Freaking Large Images" },
    {
      name: "description",
      content:
        "Convert images to modern formats (WebP) using Contentful's format parameter",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepFourA({ loaderData }: Route.ComponentProps) {
  return <StepFourAView message={loaderData.message} />;
}
