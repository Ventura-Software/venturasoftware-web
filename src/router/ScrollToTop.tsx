import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Must jump instantly (not smooth) and before the new page's useInView
// observers attach, otherwise sections scrolled past count as already revealed.
export function useScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
}
