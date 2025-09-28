import { useEffect } from "react";

interface ImageCardUltraProps {
  src: string;
  alt: string;
  title: string;
  headerBgColor: string;
  modalSrc?: string; // Optional high-quality URL for modal
  onClick?: () => void;
  priority?: "high" | "low" | "auto"; // New prop for fetch priority
}

export function ImageCardUltra({
  src,
  alt,
  title,
  headerBgColor,
  modalSrc,
  onClick,
  priority = "auto",
}: ImageCardUltraProps) {
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
          alt={alt}
          className="w-full aspect-video object-cover rounded-md"
          loading="eager"
          fetchPriority={priority} // This is the key addition for LCP optimization!
        />
      </div>
    </div>
  );
}
