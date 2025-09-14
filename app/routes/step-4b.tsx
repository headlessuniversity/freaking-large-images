import type { Route } from "./+types/step-4b";
import { StepFourB as StepFourBView } from "../views/step-four-b/step-four-b";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 4B: Image Resizing - Freaking Large Images" },
    {
      name: "description",
      content:
        "Resize images dynamically using Contentful's width and height parameters",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepFourB({ loaderData }: Route.ComponentProps) {
  return <StepFourBView message={loaderData.message} />;
}
