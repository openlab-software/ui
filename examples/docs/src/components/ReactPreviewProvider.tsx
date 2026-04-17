import { OpenLabUIProvider } from "@openlab-ui/react";
import { useState, useEffect } from "react";

export function ReactPreviewProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(localStorage.getItem("openlab-dark") === "true");
    sync();
    const root = document.getElementById("theme-root");
    if (!root) return;
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return <OpenLabUIProvider dark={dark}>{children}</OpenLabUIProvider>;
}
