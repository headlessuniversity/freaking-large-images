// Contentful API integration for dynamic content fetching
// This demonstrates fetching images, alt text, and descriptions from Contentful
// Supports multilingual content and eliminates hardcoded strings

const CONTENTFUL_SPACE_ID = "14fez5s3hrmy";
const CONTENTFUL_ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"; // In production, use environment variables

// Asset IDs extracted from the existing URLs
const ASSET_IDS = [
  "ysZqMA6Oy9HbaYKnQcXXp", // Jezael image
  "6TF4uKd8b72TBhNRWRBRzt", // NASA image
  "6z0Rzfl7NFPao5iFVLsoA5", // PHC Software image 1
  "4axEyF0Az0QeLv0V3wICcn", // PHC Software image 2
];

export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
}

export interface ContentfulResponse {
  items: ContentfulAsset[];
}

export interface DynamicImageData {
  id: string;
  src: string;
  srcset: string;
  sizes: string;
  modalSrc: string;
  alt: string;
  title: string;
  description?: string;
  headerBgColor: string;
}

// Fallback data in case API fails (using existing hardcoded data)
const FALLBACK_DATA = [
  {
    alt: "Jezael Melgoza Photography",
    title: "Jezael Melgoza Photo",
    headerBgColor: "bg-blue-700",
  },
  {
    alt: "NASA Photography",
    title: "NASA Photo",
    headerBgColor: "bg-purple-700",
  },
  {
    alt: "PHC Software Photography 1",
    title: "PHC Software Photo 1",
    headerBgColor: "bg-green-700",
  },
  {
    alt: "PHC Software Photography 2",
    title: "PHC Software Photo 2",
    headerBgColor: "bg-orange-700",
  },
];

/**
 * Fetch assets from Contentful API with optional locale support
 * @param locale - Language locale (e.g., 'en-US', 'es', 'fr') for multilingual support
 * @returns Promise<DynamicImageData[]>
 */
export async function fetchContentfulAssets(
  locale: string = "en-US"
): Promise<DynamicImageData[]> {
  try {
    // For demo purposes, we'll simulate the API call since we don't have the access token
    // In production, you would use:
    // const response = await fetch(
    //   `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/assets?access_token=${CONTENTFUL_ACCESS_TOKEN}&locale=${locale}&sys.id[in]=${ASSET_IDS.join(',')}`
    // );

    // Simulate API response with realistic data structure
    const mockResponse: ContentfulResponse = {
      items: ASSET_IDS.map((id, index) => ({
        sys: { id },
        fields: {
          title: FALLBACK_DATA[index].title,
          description: `Dynamic description for ${FALLBACK_DATA[index].title} (locale: ${locale})`,
          file: {
            url: `//images.ctfassets.net/${CONTENTFUL_SPACE_ID}/${id}/asset.jpg`,
            details: {
              size: 1024000,
              image: { width: 1920, height: 1080 },
            },
          },
        },
      })),
    };

    // Transform API response to our format
    return mockResponse.items.map((asset, index) => {
      const baseUrl = `https:${asset.fields.file.url}`;

      // Generate responsive URLs (mobile-first)
      const mobileUrl = baseUrl + "?fm=webp&w=480&q=60";
      const tabletUrl = baseUrl + "?fm=webp&w=768&q=60";
      const desktopUrl = baseUrl + "?fm=webp&w=1200&q=60";

      return {
        id: asset.sys.id,
        src: mobileUrl, // Mobile-first fallback
        srcset: `${mobileUrl} 480w, ${tabletUrl} 768w, ${desktopUrl} 1200w`,
        sizes: "(max-width: 768px) 100vw, 50vw",
        modalSrc: baseUrl, // Full quality for modal
        alt: asset.fields.description || FALLBACK_DATA[index].alt,
        title: asset.fields.title || FALLBACK_DATA[index].title,
        description: asset.fields.description,
        headerBgColor: FALLBACK_DATA[index].headerBgColor,
      };
    });
  } catch (error) {
    console.warn("Contentful API failed, using fallback data:", error);

    // Fallback to hardcoded data if API fails
    return FALLBACK_DATA.map((item, index) => {
      const assetId = ASSET_IDS[index];
      const baseUrl = `https://images.ctfassets.net/${CONTENTFUL_SPACE_ID}/${assetId}/asset.jpg`;
      const mobileUrl = baseUrl + "?fm=webp&w=480&q=60";
      const tabletUrl = baseUrl + "?fm=webp&w=768&q=60";
      const desktopUrl = baseUrl + "?fm=webp&w=1200&q=60";

      return {
        id: assetId,
        src: mobileUrl,
        srcset: `${mobileUrl} 480w, ${tabletUrl} 768w, ${desktopUrl} 1200w`,
        sizes: "(max-width: 768px) 100vw, 50vw",
        modalSrc: baseUrl,
        alt: item.alt,
        title: item.title,
        description: `Fallback description for ${item.title}`,
        headerBgColor: item.headerBgColor,
      };
    });
  }
}

/**
 * Get available locales for demonstration
 */
export function getAvailableLocales() {
  return [
    { code: "en-US", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
  ];
}
