import { useState } from "react";

export function useJsEnabled() {
  const [enabled] = useState(() => typeof window !== "undefined");
  return enabled;
}
