// Import the images
import jezaelImage from "./jezael-melgoza-layMbSJ3YOE-unsplash.jpg";
import nasaImage from "./nasa-rTZW4f02zY8-unsplash.jpg";
import phcImage1 from "./phc-software-3nSnUNGTUqo-unsplash.jpg";
import phcImage2 from "./phc-software-Q0ClVjV8ts0-unsplash.jpg";

import { BaseStepView } from "../../components/BaseStepView";

export function StepFive({ message }: { message: string }) {
  const images = [
    {
      src: jezaelImage,
      alt: "Jezael Melgoza Photography",
      title: "Jezael Melgoza Photo",
      headerBgColor: "bg-blue-500",
    },
    {
      src: nasaImage,
      alt: "NASA Photography",
      title: "NASA Photo",
      headerBgColor: "bg-purple-500",
    },
    {
      src: phcImage1,
      alt: "PHC Software Photography 1",
      title: "PHC Software Photo 1",
      headerBgColor: "bg-green-500",
    },
    {
      src: phcImage2,
      alt: "PHC Software Photography 2",
      title: "PHC Software Photo 2",
      headerBgColor: "bg-orange-500",
    },
  ];

  return (
    <BaseStepView
      stepNumber={5}
      title="Responsive Sizing"
      description="Dynamic image resizing with Contentful's API parameters - currently using same approach as Step 1 for baseline"
      images={images}
      message={message}
    />
  );
}
