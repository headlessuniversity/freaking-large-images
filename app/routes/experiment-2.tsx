import { useSearchParams } from "react-router";

// Image 1: Jezael Melgoza - Contentful CDN with URL params
function JezaelImage({ queryString }: { queryString: string }) {
  return (
    <img 
      src={`https://images.ctfassets.net/14fez5s3hrmy/ysZqMA6Oy9HbaYKnQcXXp/25ac3869e3b830f887dcd9908015f131/jezael-melgoza-layMbSJ3YOE-unsplash.jpg${queryString ? `?${queryString}` : ''}`}
      alt="Jezael Melgoza Photography"
      className="w-full aspect-video object-cover rounded-md"
      width="600"
      height="337"
      loading="eager"
    />
  );
}

// Image 2: NASA - Contentful CDN with URL params
function NasaImage({ queryString }: { queryString: string }) {
  return (
    <img 
      src={`https://images.ctfassets.net/14fez5s3hrmy/6TF4uKd8b72TBhNRWRBRzt/21a8deb85e80e432c43edd48ef5b1255/nasa-rTZW4f02zY8-unsplash.jpg${queryString ? `?${queryString}` : ''}`}
      alt="NASA Photography"
      className="w-full aspect-video object-cover rounded-md"
      width="600"
      height="337"
      loading="eager"
    />
  );
}

// Image 3: PHC Software 1 - Contentful CDN with URL params
function PhcImage1({ queryString }: { queryString: string }) {
  return (
    <img 
      src={`https://images.ctfassets.net/14fez5s3hrmy/6z0Rzfl7NFPao5iFVLsoA5/c73aa5e41798c532c94ecbfd830c417f/phc-software-3nSnUNGTUqo-unsplash.jpg${queryString ? `?${queryString}` : ''}`}
      alt="PHC Software Photography 1"
      className="w-full aspect-video object-cover rounded-md"
      width="600"
      height="337"
      loading="eager"
    />
  );
}

// Image 4: PHC Software 2 - Contentful CDN with URL params
function PhcImage2({ queryString }: { queryString: string }) {
  return (
    <img 
      src={`https://images.ctfassets.net/14fez5s3hrmy/4axEyF0Az0QeLv0V3wICcn/01d608c503905997bf7032d739f67e53/phc-software-Q0ClVjV8ts0-unsplash.jpg${queryString ? `?${queryString}` : ''}`}
      alt="PHC Software Photography 2"
      className="w-full aspect-video object-cover rounded-md"
      width="600"
      height="337"
      loading="eager"
    />
  );
}

export default function Experiment2() {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  
  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <header className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Experiment 2: Contentful CDN Testing
        </h1>
      </header>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {/* Image 1 - Jezael Melgoza */}
        <div className="w-full sm:w-[calc(50%-0.5rem)]">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-fit">
            <div className="p-4 bg-blue-700">
              <h2 className="font-semibold text-white">Jezael Melgoza Photo</h2>
            </div>
            <div className="p-4">
              <JezaelImage queryString={queryString} />
            </div>
          </div>
        </div>

        {/* Image 2 - NASA */}
        <div className="w-full sm:w-[calc(50%-0.5rem)]">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-fit">
            <div className="p-4 bg-purple-700">
              <h2 className="font-semibold text-white">NASA Photo</h2>
            </div>
            <div className="p-4">
              <NasaImage queryString={queryString} />
            </div>
          </div>
        </div>

        {/* Image 3 - PHC Software 1 */}
        <div className="w-full sm:w-[calc(50%-0.5rem)]">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-fit">
            <div className="p-4 bg-green-700">
              <h2 className="font-semibold text-white">PHC Software Photo 1</h2>
            </div>
            <div className="p-4">
              <PhcImage1 queryString={queryString} />
            </div>
          </div>
        </div>

        {/* Image 4 - PHC Software 2 */}
        <div className="w-full sm:w-[calc(50%-0.5rem)]">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-fit">
            <div className="p-4 bg-orange-700">
              <h2 className="font-semibold text-white">PHC Software Photo 2</h2>
            </div>
            <div className="p-4">
              <PhcImage2 queryString={queryString} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

