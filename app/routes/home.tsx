import type { Route } from "./+types/home";
import { Link } from "react-router";
import { stepConfigs } from "../config/steps";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freaking Large Images - Image Optimization Demo" },
    {
      name: "description",
      content: "Learn image optimization techniques step by step",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Freaking Large Images
        </h1>
      </div>

      {/* Steps Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stepConfigs.map((step) => (
            <div
              key={step.id}
              className={`
                rounded-lg p-6 border-2 transition-all
                ${
                  step.status === "ready"
                    ? "bg-gray-800 border-green-500 hover:border-green-400"
                    : step.status === "in-progress"
                      ? "bg-gray-800 border-orange-500 hover:border-orange-400"
                      : "bg-gray-800/50 border-gray-600 cursor-not-allowed"
                }
              `}
            >
              <Link to={step.route} className="block h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {step.shortTitle}
                  </h3>
                  <span
                    className={`text-sm font-medium ${
                      step.status === "ready"
                        ? "text-green-400"
                        : step.status === "in-progress"
                          ? "text-orange-400"
                          : "text-gray-500"
                    }`}
                  >
                    {step.status === "ready"
                      ? "READY"
                      : step.status === "in-progress"
                        ? "IN PROGRESS"
                        : "COMING SOON"}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    step.status === "ready" || step.status === "in-progress"
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  {step.description}
                </p>
                <div
                  className={`mt-4 text-sm font-medium ${
                    step.status === "ready"
                      ? "text-green-400"
                      : step.status === "in-progress"
                        ? "text-orange-400"
                        : "text-gray-500"
                  }`}
                >
                  View Demo →
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Test Route Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            🧪 Test Route
          </h2>
          <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Experiment with Contentful API parameters in real-time by adding them to the URL
          </p>
          <div className="text-center">
            <Link
              to="/test"
              className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Go to Test Route →
            </Link>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              Example: <code className="bg-gray-800 px-2 py-1 rounded">/test?params=?fm=webp&q=50&w=600</code>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
