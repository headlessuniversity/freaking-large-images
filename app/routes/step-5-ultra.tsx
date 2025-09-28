import type { Route } from "./+types/step-5-ultra";
import { StepFiveUltra as StepFiveUltraView } from "../views/step-five-ultra/step-five-ultra";
import { getStepImagesWithModal } from "../config/contentful-assets";

export const links: Route.LinksFunction = () => {
  // Get the optimized image URLs for preloading
  const images = getStepImagesWithModal({ params: "?fm=avif&w=600&q=25" });

  return [
    // Preload all 4 images with high priority since they're all above-the-fold
    {
      rel: "preload",
      href: images[0].src, // Jezael (top-left)
      as: "image",
      fetchPriority: "high",
    },
    {
      rel: "preload",
      href: images[1].src, // NASA (top-right)
      as: "image",
      fetchPriority: "high",
    },
    {
      rel: "preload",
      href: images[2].src, // PHC1 (bottom-left)
      as: "image",
      fetchPriority: "high",
    },
    {
      rel: "preload",
      href: images[3].src, // PHC2 (bottom-right)
      as: "image",
      fetchPriority: "high",
    },
  ];
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Step 5 Ultra: Ultimate Optimization - Freaking Large Images" },
    {
      name: "description",
      content:
        "The ultimate image optimization: AVIF format, resizing, quality adjustment, preloading, and fetch priority combined for maximum LCP performance and Core Web Vitals scores.",
    },
  ];
}

export default function StepFiveUltra() {
  return <StepFiveUltraView />;
}
