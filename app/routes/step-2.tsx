import type { Route } from "./+types/step-2";
import { StepTwo as StepTwoView } from "../views/step-two/step-two";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 2: Public Folder - Freaking Large Images" },
    {
      name: "description",
      content:
        "Learn how moving images to the public directory improves performance by enabling direct serving and bypassing bundler processing for faster load times.",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function StepTwo({ loaderData }: Route.ComponentProps) {
  return <StepTwoView message={loaderData.message} />;
}
