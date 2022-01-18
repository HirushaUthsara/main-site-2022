import {useState, useEffect} from "react";

export default function useWindowPath() {
  const [windowPath, setWindowPath] = useState({
    path: undefined,
    url: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handlePath() {
        setWindowPath({
          path: window.location.pathname,
          url: window.location.href,
        });
      }

      window.addEventListener("onhashchange", handlePath);
      handlePath();
      return () => window.removeEventListener("onhashchange", handlePath);
    }
  }, []);
  return windowPath;
}
