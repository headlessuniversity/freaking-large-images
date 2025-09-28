// Step 8: Dynamic content from Contentful API with multilingual support
import { useState, useEffect } from "react";
import { BaseStepViewResponsive } from "../../components/BaseStepViewResponsive";
import { ImageCardSourceSet } from "../../components/ImageCardSourceSet";
import { ImageModal } from "../../components/ImageModal";
import {
  fetchContentfulAssets,
  getAvailableLocales,
  type DynamicImageData,
} from "../../config/contentful-api";

export function StepEight() {
  const [images, setImages] = useState<DynamicImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocale, setSelectedLocale] = useState("en-US");
  const [selectedImage, setSelectedImage] = useState<DynamicImageData | null>(
    null
  );

  const availableLocales = getAvailableLocales();

  // Fetch images when component mounts or locale changes
  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      try {
        const fetchedImages = await fetchContentfulAssets(selectedLocale);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Failed to load images:", error);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [selectedLocale]);

  const handleLocaleChange = (locale: string) => {
    setSelectedLocale(locale);
  };

  return (
    <main className="min-h-screen bg-gray-900 p-4">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🌐 Freaking Large Images: Dynamic Content from Contentful API
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
          Images, alt text, and descriptions fetched dynamically from Contentful
          API. Switch languages to see multilingual accessibility support - no
          hardcoded content!
        </p>
        <div className="mt-4 mb-6">
          <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            Step 8 (Bonus)
          </span>
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <label
            htmlFor="locale-select"
            className="block text-white text-sm font-medium mb-2"
          >
            Select Language / Locale:
          </label>
          <select
            id="locale-select"
            value={selectedLocale}
            onChange={(e) => handleLocaleChange(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {availableLocales.map((locale) => (
              <option key={locale.code} value={locale.code}>
                {locale.name} ({locale.code})
              </option>
            ))}
          </select>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <p className="text-gray-300 mt-2">
              Loading content from Contentful API...
            </p>
          </div>
        )}

        {/* API Info */}
        <div className="max-w-2xl mx-auto mb-8 p-4 bg-gray-800 rounded-lg text-left">
          <h3 className="text-white font-semibold mb-2">
            🔧 Technical Implementation:
          </h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>
              • <strong>Contentful Delivery API</strong> via fetch() - no SDK
              required
            </li>
            <li>
              • <strong>Responsive images</strong> with mobile-first srcset
            </li>
            <li>
              • <strong>Multilingual support</strong> - alt text and
              descriptions by locale
            </li>
            <li>
              • <strong>Graceful fallbacks</strong> - hardcoded data if API
              fails
            </li>
            <li>
              • <strong>WebP optimization</strong> with quality and size
              parameters
            </li>
          </ul>
        </div>
      </div>

      {/* Image Layout - 2x2 on desktop, 1 column on mobile */}
      {!loading && (
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={image.id} className="w-full sm:w-[calc(50%-0.5rem)]">
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
              {/* Show description if available */}
              {image.description && (
                <div className="mt-2 p-3 bg-gray-800 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    <strong>Description ({selectedLocale}):</strong>{" "}
                    {image.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Navigation */}
      <div className="text-center mt-8">
        <a
          href="/"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          ← Back to Steps Overview
        </a>
      </div>

      {/* Modal */}
      <ImageModal
        src={selectedImage?.modalSrc || ""}
        alt={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
