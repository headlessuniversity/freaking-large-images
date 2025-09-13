interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  headerBgColor: string;
  onClick?: () => void;
}

export function ImageCard({
  src,
  alt,
  title,
  headerBgColor,
  onClick,
}: ImageCardProps) {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <div className={`p-4 ${headerBgColor}`}>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="h-full p-4">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-md"
          loading="eager"
        />
      </div>
    </div>
  );
}

