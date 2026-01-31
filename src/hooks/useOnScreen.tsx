// useOnScreen.tsx - Version optimisée
import { useEffect, useRef, useState, useMemo } from "react";

export function useOnScreen(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, memoizedOptions);

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [memoizedOptions]);

  return [ref, isVisible];
}