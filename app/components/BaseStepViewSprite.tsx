import { SpriteImageCard } from "./SpriteImageCard";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

interface SpriteStepImage {
  spriteUrl: string;
  spritePosition: number; // 0, 1, 2, or 3 for the four images
  alt: string;
  title: string;
  headerBgColor: string;
  modalSrc?: string; // Optional high-quality URL for modal
}

interface BaseStepViewSpriteProps {
  images: SpriteStepImage[];
}

export function BaseStepViewSprite({ images }: BaseStepViewSpriteProps) {
  const [selectedImage, setSelectedImage] = useState<SpriteStepImage | null>(
    null
  );

  return (
    <main className="min-h-screen bg-gray-900 p-4">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🖼️ Freaking Large Images
        </h1>
      </div>

      {/* Image Layout - 2x2 on desktop, 1 column on mobile */}
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {images.map((image, index) => {
          const cardClasses = "w-full sm:w-[calc(50%-0.5rem)]"; // Full width on mobile, half width on desktop

          return (
            <div key={index} className={cardClasses}>
              <SpriteImageCard
                spriteUrl={image.spriteUrl}
                spritePosition={image.spritePosition}
                alt={image.alt}
                title={image.title}
                headerBgColor={image.headerBgColor}
                modalSrc={image.modalSrc}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          );
        })}
      </div>

      {/* Modal - Shows high-quality modalSrc if available, otherwise falls back to display image */}
      <ImageModal
        src={selectedImage?.modalSrc || ""}
        alt={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
