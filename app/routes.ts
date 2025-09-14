import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("step-1", "routes/step-1.tsx"),
  route("step-2", "routes/step-2.tsx"),
  route("step-3", "routes/step-3.tsx"),
  route("step-4", "routes/step-4.tsx"),
  route("step-5", "routes/step-5.tsx"),
  route("step-6", "routes/step-6.tsx"),
  route("test", "routes/test.tsx"),
  route("*", "routes/$.tsx"), // Catch-all route for unmatched paths
] satisfies RouteConfig;
