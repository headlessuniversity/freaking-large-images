import type { Route } from "./+types/step-2";
import { StepTwo as StepTwoView } from "../views/step-two/step-two";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 2: Public Folder - Freaking Large Images" },
    {
      name: "description",
      content: "Images served from public directory for direct serving",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepTwo({ loaderData }: Route.ComponentProps) {
  return <StepTwoView message={loaderData.message} />;
}
