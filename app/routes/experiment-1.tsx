function JezaelImage() {
  return (
    <img
      src="/images/jezael-melgoza-layMbSJ3YOE-unsplash.jpg"
      alt="Jezael Melgoza Photography"
      className="w-full aspect-video object-cover rounded-md"
    />
  );
}

function NasaImage() {
  return (
    <img
      src="/images/nasa-rTZW4f02zY8-unsplash.jpg"
      alt="NASA Photography"
      className="w-full aspect-video object-cover rounded-md"
    />
  );
}

function PhcImage1() {
  return (
    <img
      src="/images/phc-software-3nSnUNGTUqo-unsplash.jpg"
      alt="PHC Software Photography 1"
      className="w-full aspect-video object-cover rounded-md"
    />
  );
}

// Image 4: PHC Software 2 - Baseline from public folder
function PhcImage2() {
  return (
    <img
      src="/images/phc-software-Q0ClVjV8ts0-unsplash.jpg"
      alt="PHC Software Photography 2"
      className="w-full aspect-video object-cover rounded-md"
    />
  );
}

export default function Experiment1() {
  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <header className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Experiment 1: Baseline (Public Folder)
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
              <JezaelImage />
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
              <NasaImage />
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
              <PhcImage1 />
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
              <PhcImage2 />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
