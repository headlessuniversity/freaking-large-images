export interface StepConfig {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  status: "ready" | "in-progress" | "coming-soon";
  route: string;
}

export const stepConfigs: StepConfig[] = [
  {
    id: "step-1",
    number: 1,
    title: "No Optimization",
    shortTitle: "Step 1: Baseline (No Optimization)",
    description: "Large images served from app directory - slowest approach",
    status: "ready",
    route: "/step-1",
  },
  {
    id: "step-2",
    number: 2,
    title: "Public Folder",
    shortTitle: "Step 2: Public Folder",
    description: "Move images to public directory for direct serving",
    status: "ready",
    route: "/step-2",
  },
  {
    id: "step-3",
    number: 3,
    title: "CDN (Contentful)",
    shortTitle: "Step 3: CDN (Contentful)",
    description: "Serve images from Contentful CDN for global distribution",
    status: "ready",
    route: "/step-3",
  },
  {
    id: "step-4a",
    number: 4,
    title: "File Type Conversion",
    shortTitle: "Step 4A: File Type Conversion",
    description:
      "Convert images to modern formats (WebP) using Contentful's format parameter",
    status: "ready",
    route: "/step-4a",
  },
  {
    id: "step-4b",
    number: 4,
    title: "Image Resizing",
    shortTitle: "Step 4B: Image Resizing",
    description:
      "Resize images dynamically using Contentful's width and height parameters",
    status: "ready",
    route: "/step-4b",
  },
  {
    id: "step-4c",
    number: 4,
    title: "Quality Adjustment",
    shortTitle: "Step 4C: Quality Adjustment",
    description: "Optimize file size using Contentful's quality parameter",
    status: "ready",
    route: "/step-4c",
  },
  {
    id: "step-5",
    number: 5,
    title: "Combined Optimization",
    shortTitle: "Step 5: Combined Optimization",
    description:
      "All optimizations combined - WebP format, resizing, and quality adjustment for maximum efficiency",
    status: "ready",
    route: "/step-5",
  },
  {
    id: "step-6",
    number: 6,
    title: "Image Sprites with Client-Side Cropping",
    shortTitle: "Step 6: Image Sprites with Client-Side Cropping",
    description:
      "Single sprite image downloaded once, then cropped client-side using CSS background-position - reduces HTTP requests from 4 to 1",
    status: "ready",
    route: "/step-6",
  },
];
