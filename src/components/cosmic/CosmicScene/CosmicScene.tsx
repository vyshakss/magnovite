import { useRef } from "react";
import { useCosmicScene } from "./CosmicScene.hooks";

export function CosmicScene() {
  const hostRef = useRef<HTMLDivElement>(null);
  useCosmicScene(hostRef);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 [&>canvas]:h-full [&>canvas]:w-full"
    />
  );
}
