import type { Route } from "./+types/step-6";
import { StepSix as StepSixView } from "../views/step-six/step-six";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Step 6: Image Sprites with Smart Cropping - Freaking Large Images",
    },
    {
      name: "description",
      content:
        "Combine cropping, stitching images together, and sprite technique for optimal thumbnails",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepSix({ loaderData }: Route.ComponentProps) {
  return <StepSixView message={loaderData.message} />;
}
