import type { Route } from "./+types/step-3";
import { StepThree as StepThreeView } from "../views/step-three/step-three";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 3: CDN (Contentful) - Freaking Large Images" },
    {
      name: "description",
      content: "Images served from Contentful CDN for global distribution",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepThree({ loaderData }: Route.ComponentProps) {
  return <StepThreeView message={loaderData.message} />;
}
