import { useEffect, useRef } from 'react';

type UseInfiniteScrollProps = {
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
};

export function useInfiniteScroll({
  onIntersect,
  enabled = true,
  threshold = 1,
}: UseInfiniteScrollProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const observer = new window.IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          onIntersect();
          if (observerRef.current) {
            obs.unobserve(observerRef.current); // 중복 방지
          }
        }
      },
      { threshold }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [enabled, onIntersect, threshold]);

  return observerRef;
}
