import { RefObject, useEffect, useId, useRef } from 'react';

export type InfiniteScrollObserverProps = {
  rootRef?: RefObject<HTMLDivElement>;
  hasNextPage?: boolean;
  onLoadNextPage: () => Promise<void> | void;
};

/**
 * Infinite Scroll Observer
 *
 * Place this component at the end of a list that you need to have an infinite scroll functionality.
 * When user reaches the end of the list, `onLoadNextPage` will be called.
 */
export function InfiniteScrollObserver({
  hasNextPage,
  onLoadNextPage,
}: InfiniteScrollObserverProps) {
  const id = useId();

  const elementId = `infinite-scroll-observer-${id}`;
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef?.current) {
      return;
    }

    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 0,
    };

    const handler = (entries: IntersectionObserverEntry[]) => {
      const isIntersecting = entries.some((entry) => entry.isIntersecting);
      if (!isIntersecting || !hasNextPage) {
        return;
      }
      void onLoadNextPage();
    };

    const observer = new IntersectionObserver(handler, options);
    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, onLoadNextPage]);

  return <div id={elementId} ref={elementRef} />;
}
