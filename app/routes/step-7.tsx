import type { Route } from "./+types/step-7";
import { StepSeven as StepSevenView } from "../views/step-seven/step-seven";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 7: Responsive Images - Freaking Large Images" },
    {
      name: "description",
      content:
        "Mobile-first responsive images using srcset - browser automatically selects optimal image size based on screen width",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepSeven({ loaderData }: Route.ComponentProps) {
  return <StepSevenView message={loaderData.message} />;
}
