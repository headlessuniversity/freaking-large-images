import { BaseStepView } from "../../components/BaseStepView";
import { contentfulAssets } from "../../config/contentful-assets";

/*
Step 6: Image Sprites with Client-Side Cropping

This step demonstrates using a single sprite image containing all 4 images stitched together horizontally.
The sprite URL contains all images in 16:9 ratio from left to right: Jezael → NASA → PHC1 → PHC2.
Instead of downloading 4 separate images, we download 1 sprite and use CSS background-position 
to crop out the individual images on the client side.

Benefits:
- Single HTTP request instead of 4 separate requests
- Better caching (one image cached and reused)
- Reduced network overhead and connection costs
- Client-side image manipulation demonstration
*/

const SPRITE_BASE_URL =
  "https://images.ctfassets.net/14fez5s3hrmy/5UptPk5DBo8H3Unrimhu6s/aa6e260ab7f15fc806558e4cea52731b/allFourImages.jpg";

// Contentful optimization parameters for the sprite image
const SPRITE_QUERY_PARAMS = "?fm=webp&q=50&h=1080";

const SPRITE_URL = SPRITE_BASE_URL + SPRITE_QUERY_PARAMS;

export function StepSix({ message }: { message: string }) {
  const spriteImages = [
    {
      spriteUrl: SPRITE_URL,
      spritePosition: 0, // First image (0-25%)
      alt: "Jezael Melgoza Photography",
      title: "Jezael Melgoza Photo",
      headerBgColor: "bg-blue-500",
      modalSrc: contentfulAssets[0].baseUrl, // Map to individual Contentful asset
    },
    {
      spriteUrl: SPRITE_URL,
      spritePosition: 1, // Second image (25-50%)
      alt: "NASA Photography",
      title: "NASA Photo",
      headerBgColor: "bg-purple-500",
      modalSrc: contentfulAssets[1].baseUrl, // Map to individual Contentful asset
    },
    {
      spriteUrl: SPRITE_URL,
      spritePosition: 2, // Third image (50-75%)
      alt: "PHC Software Photography 1",
      title: "PHC Software Photo 1",
      headerBgColor: "bg-green-500",
      modalSrc: contentfulAssets[2].baseUrl, // Map to individual Contentful asset
    },
    {
      spriteUrl: SPRITE_URL,
      spritePosition: 3, // Fourth image (75-100%)
      alt: "PHC Software Photography 2",
      title: "PHC Software Photo 2",
      headerBgColor: "bg-orange-500",
      modalSrc: contentfulAssets[3].baseUrl, // Map to individual Contentful asset
    },
  ];

  return (
    <BaseStepView
      stepNumber={6}
      title="Image Sprites with Client-Side Cropping"
      description="Single sprite image downloaded once, then cropped client-side using CSS background-position to show individual images - reduces HTTP requests from 4 to 1"
      spriteImages={spriteImages}
      message={message}
    />
  );
}
