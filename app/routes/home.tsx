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
      </div>
    </main>
  );
}
