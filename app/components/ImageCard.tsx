import { useEffect } from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  headerBgColor: string;
  modalSrc?: string; // Optional high-quality URL for modal
  onClick?: () => void;
}

interface SpriteImageCardProps {
  spriteUrl: string;
  spritePosition: number; // 0, 1, 2, or 3 for the four images
  alt: string;
  title: string;
  headerBgColor: string;
  modalSrc?: string; // Optional high-quality URL for modal
  onClick?: () => void;
}

export function ImageCard({
  src,
  alt,
  title,
  headerBgColor,
  modalSrc,
  onClick,
}: ImageCardProps) {
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
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="p-4">
        <img
          src={src}
          alt={alt}
          className="w-full aspect-video object-cover rounded-md"
          loading="eager"
        />
      </div>
    </div>
  );
}

export function SpriteImageCard({
  spriteUrl,
  spritePosition,
  alt,
  title,
  headerBgColor,
  modalSrc,
  onClick,
}: SpriteImageCardProps) {
  // Calculate background position based on sprite position
  // Position 0: 0%, Position 1: 33.33%, Position 2: 66.66%, Position 3: 100%
  const backgroundPositionX = spritePosition * 33.33;

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
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="p-4">
        <div
          className="w-full aspect-video rounded-md overflow-hidden" // Force 16:9 aspect ratio
          style={{
            backgroundImage: `url(${spriteUrl})`,
            backgroundSize: "400% 100%", // 4 images wide, fill container height
            backgroundPosition: `${backgroundPositionX}% center`,
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label={alt}
        />
      </div>
    </div>
  );
}
