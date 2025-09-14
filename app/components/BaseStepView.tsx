import { ImageCard, SpriteImageCard } from "./ImageCard";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

interface StepImage {
  src: string;
  alt: string;
  title: string;
  headerBgColor: string;
}

interface SpriteStepImage {
  spriteUrl: string;
  spritePosition: number;
  alt: string;
  title: string;
  headerBgColor: string;
}

interface BaseStepViewProps {
  stepNumber: number;
  title: string;
  description?: string;
  images?: StepImage[];
  spriteImages?: SpriteStepImage[];
  message?: string;
}

export function BaseStepView({
  stepNumber,
  title,
  description,
  images,
  spriteImages,
  message,
}: BaseStepViewProps) {
  const [selectedImage, setSelectedImage] = useState<
    StepImage | SpriteStepImage | null
  >(null);

  // Use either regular images or sprite images
  const displayImages = images || spriteImages || [];
  const isSprite = !!spriteImages;

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

      {/* Image Layout - 2x2 on desktop, 1 column on mobile */}
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {displayImages.map((image, index) => {
          const cardClasses = "w-full sm:w-[calc(50%-0.5rem)]"; // Full width on mobile, half width on desktop

          if (isSprite && "spriteUrl" in image) {
            return (
              <div key={index} className={cardClasses}>
                <SpriteImageCard
                  spriteUrl={image.spriteUrl}
                  spritePosition={image.spritePosition}
                  alt={image.alt}
                  title={image.title}
                  headerBgColor={image.headerBgColor}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            );
          } else if ("src" in image) {
            return (
              <div key={index} className={cardClasses}>
                <ImageCard
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  headerBgColor={image.headerBgColor}
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Navigation */}
      <div className="text-center mt-8">
        <a
          href="/"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          ← Back to Steps Overview
        </a>
      </div>

      {/* Modal - Note: Modal will show sprite URL for sprite images, which shows the full sprite */}
      <ImageModal
        src={
          selectedImage && "src" in selectedImage
            ? selectedImage.src
            : selectedImage && "spriteUrl" in selectedImage
              ? selectedImage.spriteUrl
              : ""
        }
        alt={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
