// Step 2: Images served directly from public directory
import { BaseStepView } from "../../components/BaseStepView";

export function StepTwo({ message }: { message: string }) {
  const images = [
    {
      src: "/images/step-2/jezael-melgoza-layMbSJ3YOE-unsplash.jpg",
      alt: "Jezael Melgoza Photography",
      title: "Jezael Melgoza Photo",
      headerBgColor: "bg-blue-500",
    },
    {
      src: "/images/step-2/nasa-rTZW4f02zY8-unsplash.jpg",
      alt: "NASA Photography",
      title: "NASA Photo",
      headerBgColor: "bg-purple-500",
    },
    {
      src: "/images/step-2/phc-software-3nSnUNGTUqo-unsplash.jpg",
      alt: "PHC Software Photography 1",
      title: "PHC Software Photo 1",
      headerBgColor: "bg-green-500",
    },
    {
      src: "/images/step-2/phc-software-Q0ClVjV8ts0-unsplash.jpg",
      alt: "PHC Software Photography 2",
      title: "PHC Software Photo 2",
      headerBgColor: "bg-orange-500",
    },
  ];

  return (
    <BaseStepView
      stepNumber={2}
      title="Public Folder"
      description="Images served directly from public directory - bypasses bundler processing for faster serving"
      images={images}
      message={message}
    />
  );
}
