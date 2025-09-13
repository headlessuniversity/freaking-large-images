import type { Route } from "./+types/$";

export function loader({ request }: Route.LoaderArgs) {
  // For common browser requests, return appropriate responses
  const url = new URL(request.url);

  if (url.pathname === "/robots.txt") {
    return new Response("User-agent: *\nDisallow:", {
      headers: { "Content-Type": "text/plain" },
    });
  }

  if (url.pathname.includes("/.well-known/")) {
    return new Response("Not found", { status: 404 });
  }

  // For any other unmatched routes, return 404
  return new Response("Not found", { status: 404 });
}

export default function CatchAll() {
  return null; // This component won't render since we handle everything in the loader
}
