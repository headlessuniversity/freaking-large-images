import type { Route } from "./+types/step-3";
import { StepThree as StepThreeView } from "../views/step-three/step-three";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 3: CDN (Contentful) - Freaking Large Images" },
    {
      name: "description",
      content:
        "Discover how Content Delivery Networks (CDN) like Contentful provide global image distribution, reducing latency and improving load times worldwide.",
    },
  ];
}

export default function StepThree() {
  return <StepThreeView />;
}
