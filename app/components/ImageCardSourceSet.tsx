import { useEffect } from "react";

interface ImageCardSourceSetProps {
  src: string; // Fallback image source
  srcset: string; // Responsive srcset attribute
  sizes: string; // Sizes attribute for responsive images
  alt: string;
  title: string;
  headerBgColor: string;
  modalSrc?: string; // Optional high-quality URL for modal
  onClick?: () => void;
}

export function ImageCardSourceSet({
  src,
  srcset,
  sizes,
  alt,
  title,
  headerBgColor,
  modalSrc,
  onClick,
}: ImageCardSourceSetProps) {
  // Preload modal image after 2 seconds
  useEffect(() => {
    if (modalSrc) {
      const timer = setTimeout(() => {
        const img = new Image();
        img.src = modalSrc;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [modalSrc]);

  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow h-fit"
      onClick={onClick}
    >
      <div className={`p-4 ${headerBgColor}`}>
        <h2 className="font-semibold text-white">{title}</h2>
      </div>
      <div className="p-4">
        <img
          src={src}
          srcSet={srcset}
          sizes={sizes}
          alt={alt}
          className="w-full aspect-video object-cover rounded-md"
          loading="eager"
        />
      </div>
    </div>
  );
}
