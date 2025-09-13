// Import the images
import jezaelImage from "./jezael-melgoza-layMbSJ3YOE-unsplash.jpg";
import nasaImage from "./nasa-rTZW4f02zY8-unsplash.jpg";
import phcImage1 from "./phc-software-3nSnUNGTUqo-unsplash.jpg";
import phcImage2 from "./phc-software-Q0ClVjV8ts0-unsplash.jpg";

export function StepOne({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-gray-900 p-4">
      {/* Header */}
      <div className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          🖼️ Freaking Large Images: No Optimization
        </h1>
      </div>

      {/* Image Grid - 2x2 Layout */}
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto h-[calc(100vh-200px)]">
        {/* Top Left Quadrant */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-blue-500">
            <h3 className="font-semibold text-white">Jezael Melgoza Photo</h3>
          </div>
          <div className="h-full p-4">
            <img
              src={jezaelImage}
              alt="Jezael Melgoza Photography"
              className="w-full h-full object-cover rounded-md"
              loading="eager"
            />
          </div>
        </div>

        {/* Top Right Quadrant */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-purple-500">
            <h3 className="font-semibold text-white">NASA Photo</h3>
          </div>
          <div className="h-full p-4">
            <img
              src={nasaImage}
              alt="NASA Photography"
              className="w-full h-full object-cover rounded-md"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Left Quadrant */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-green-500">
            <h3 className="font-semibold text-white">PHC Software Photo 1</h3>
          </div>
          <div className="h-full p-4">
            <img
              src={phcImage1}
              alt="PHC Software Photography 1"
              className="w-full h-full object-cover rounded-md"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Right Quadrant */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-orange-500">
            <h3 className="font-semibold text-white">PHC Software Photo 2</h3>
          </div>
          <div className="h-full p-4">
            <img
              src={phcImage2}
              alt="PHC Software Photography 2"
              className="w-full h-full object-cover rounded-md"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
