import { useState, useEffect } from "react";

export function useHashRouter(defaultRoute = "button") {
  const [route, setRoute] = useState(
    () => window.location.hash.slice(1) || defaultRoute
  );

  useEffect(() => {
    const handler = () =>
      setRoute(window.location.hash.slice(1) || defaultRoute);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [defaultRoute]);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return { route, navigate };
}
