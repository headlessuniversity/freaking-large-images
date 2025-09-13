import type { Route } from "./+types/step-1";
import { StepOne as StepOneView } from "../views/step-one/step-one";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 1: No Optimization - Freaking Large Images" },
    {
      name: "description",
      content: "Baseline demonstration with no image optimization",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepOne({ loaderData }: Route.ComponentProps) {
  return <StepOneView message={loaderData.message} />;
}
