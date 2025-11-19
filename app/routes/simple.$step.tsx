import { type LoaderFunctionArgs } from "react-router";
import { readFileSync } from "fs";
import { join } from "path";

export async function loader({ params }: LoaderFunctionArgs) {
  const { step } = params;
  
  // Only allow specific step values for security
  const allowedSteps = ["step-1", "step-6"];
  
  if (!step || !allowedSteps.includes(step)) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    // Read the HTML file from the public directory
    const filePath = join(process.cwd(), "public", "simple", `${step}.html`);
    const html = readFileSync(filePath, "utf-8");

    // Return the HTML with optimized headers
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600, must-revalidate", // Cache for 1 hour
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error(`Error reading HTML file for ${step}:`, error);
    throw new Response("Not Found", { status: 404 });
  }
}

