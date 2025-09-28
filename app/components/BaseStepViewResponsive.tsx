import { ImageCardSourceSet } from "./ImageCardSourceSet";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

interface ResponsiveStepImage {
  src: string; // Fallback image source
  srcset: string; // Responsive srcset attribute
  sizes: string; // Sizes attribute for responsive images
  alt: string;
  title: string;
  headerBgColor: string;
  modalSrc?: string; // Optional high-quality URL for modal
}

interface BaseStepViewResponsiveProps {
  images: ResponsiveStepImage[];
}

export function BaseStepViewResponsive({
  images,
}: BaseStepViewResponsiveProps) {
  const [selectedImage, setSelectedImage] =
    useState<ResponsiveStepImage | null>(null);

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
              <ImageCardSourceSet
                src={image.src}
                srcset={image.srcset}
                sizes={image.sizes}
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
        src={selectedImage?.modalSrc || selectedImage?.src || ""}
        alt={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
