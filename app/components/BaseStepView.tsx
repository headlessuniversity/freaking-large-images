import { ImageCard } from "./ImageCard";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

interface StepImage {
  src: string;
  alt: string;
  title: string;
  headerBgColor: string;
}

interface BaseStepViewProps {
  stepNumber: number;
  title: string;
  description?: string;
  images: StepImage[];
  message?: string;
}

export function BaseStepView({
  stepNumber,
  title,
  description,
  images,
  message,
}: BaseStepViewProps) {
  const [selectedImage, setSelectedImage] = useState<StepImage | null>(null);

  return (
    <main className="min-h-screen bg-gray-900 p-4">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🖼️ Freaking Large Images: {title}
        </h1>
        {description && (
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="mt-4">
          <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Step {stepNumber}
          </span>
        </div>
      </div>

      {/* Image Grid - 2x2 Layout */}
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto h-[calc(100vh-250px)]">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            title={image.title}
            headerBgColor={image.headerBgColor}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="text-center mt-8">
        <a
          href="/home"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          ← Back to Steps Overview
        </a>
      </div>

      {/* Modal */}
      <ImageModal
        src={selectedImage?.src || ""}
        alt={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
