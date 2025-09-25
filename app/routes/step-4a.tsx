import type { Route } from "./+types/step-4a";
import { StepFourA as StepFourAView } from "../views/step-four-a/step-four-a";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 4A: File Type Conversion - Freaking Large Images" },
    {
      name: "description",
      content:
        "Learn how to convert images to modern WebP format using Contentful's format parameter. WebP provides superior compression and quality compared to JPEG and PNG.",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepFourA({ loaderData }: Route.ComponentProps) {
  return <StepFourAView message={loaderData.message} />;
}
