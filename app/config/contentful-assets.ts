// Contentful asset URLs for steps 3-6
// These base URLs will be used with different optimization parameters in each step

export interface ContentfulAsset {
  id: string;
  baseUrl: string;
  alt: string;
  title: string;
  headerBgColor: string;
}

export const contentfulAssets: ContentfulAsset[] = [
  {
    id: "jezael",
    baseUrl:
      "https://images.ctfassets.net/14fez5s3hrmy/ysZqMA6Oy9HbaYKnQcXXp/25ac3869e3b830f887dcd9908015f131/jezael-melgoza-layMbSJ3YOE-unsplash.jpg",
    alt: "Jezael Melgoza Photography",
    title: "Jezael Melgoza Photo",
    headerBgColor: "bg-blue-500",
  },
  {
    id: "nasa",
    baseUrl:
      "https://images.ctfassets.net/14fez5s3hrmy/6TF4uKd8b72TBhNRWRBRzt/21a8deb85e80e432c43edd48ef5b1255/nasa-rTZW4f02zY8-unsplash.jpg",
    alt: "NASA Photography",
    title: "NASA Photo",
    headerBgColor: "bg-purple-500",
  },
  {
    id: "phc1",
    baseUrl:
      "https://images.ctfassets.net/14fez5s3hrmy/6z0Rzfl7NFPao5iFVLsoA5/c73aa5e41798c532c94ecbfd830c417f/phc-software-3nSnUNGTUqo-unsplash.jpg",
    alt: "PHC Software Photography 1",
    title: "PHC Software Photo 1",
    headerBgColor: "bg-green-500",
  },
  {
    id: "phc2",
    baseUrl:
      "https://images.ctfassets.net/14fez5s3hrmy/4axEyF0Az0QeLv0V3wICcn/01d608c503905997bf7032d739f67e53/phc-software-Q0ClVjV8ts0-unsplash.jpg",
    alt: "PHC Software Photography 2",
    title: "PHC Software Photo 2",
    headerBgColor: "bg-orange-500",
  },
];

// Helper function to get image data with optional Contentful API parameters
export function getStepImages(options?: { params?: string }): Array<{
  src: string;
  alt: string;
  title: string;
  headerBgColor: string;
}> {
  return contentfulAssets.map((asset) => {
    const src = asset.baseUrl + (options?.params || "");

    return {
      src,
      alt: asset.alt,
      title: asset.title,
      headerBgColor: asset.headerBgColor,
    };
  });
}

// Helper function to get image data with both optimized and modal (full-quality) URLs
export function getStepImagesWithModal(options?: { params?: string }): Array<{
  src: string;
  modalSrc: string;
  alt: string;
  title: string;
  headerBgColor: string;
}> {
  return contentfulAssets.map((asset) => {
    const src = asset.baseUrl + (options?.params || "");
    const modalSrc = asset.baseUrl; // Full quality - no optimization parameters

    return {
      src,
      modalSrc,
      alt: asset.alt,
      title: asset.title,
      headerBgColor: asset.headerBgColor,
    };
  });
}
