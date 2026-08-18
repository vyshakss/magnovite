export type ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Basic console reporting for runtime errors. Keep non-invasive and safe
  // for environments where advanced editor hooks are not present.
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error("Runtime error:", message, { stack, ...context });

  (
    window as unknown as {
      __reportRuntimeError?: (payload: Record<string, unknown>) => void;
    }
  ).__reportRuntimeError?.({
    message,
    ...(stack ? { stack } : {}),
    filename: window.location.pathname,
  });
}
