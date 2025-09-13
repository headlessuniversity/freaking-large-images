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
    status: "in-progress",
    route: "/step-2",
  },
  {
    id: "step-3",
    number: 3,
    title: "CDN (Contentful)",
    shortTitle: "Step 3: CDN (Contentful)",
    description: "Serve images from Contentful CDN for global distribution",
    status: "in-progress",
    route: "/step-3",
  },
  {
    id: "step-4",
    number: 4,
    title: "Modern Formats",
    shortTitle: "Step 4: Modern Formats",
    description: "Use Contentful's format optimization (WebP, AVIF)",
    status: "in-progress",
    route: "/step-4",
  },
  {
    id: "step-5",
    number: 5,
    title: "Responsive Sizing",
    shortTitle: "Step 5: Responsive Sizing",
    description: "Dynamic image resizing with Contentful's API parameters",
    status: "in-progress",
    route: "/step-5",
  },
  {
    id: "step-6",
    number: 6,
    title: "Image Sprites with Smart Cropping",
    shortTitle: "Step 6: Image Sprites with Smart Cropping",
    description:
      "Combine cropping, stitching images together, and sprite technique for optimal thumbnails",
    status: "in-progress",
    route: "/step-6",
  },
];
