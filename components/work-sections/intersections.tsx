import React, { useEffect, useRef } from "react";
import { Theme } from "../layout/layout";

type Hook = () => void

export default function useIntersection(callback: (theme?: Theme) => void, withTheme: Theme): [React.ReactNode, Hook] {
  const containerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const cb: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) callback(withTheme);
    else callback();
  };

  const useIntersectionObserver = function () {
    useEffect(() => {
      const observer = new IntersectionObserver(cb, {
        ...options,
      });
      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, []);
  };

  const box = (
    <div
      ref={containerRef}
      className="absolute invisible w-full left-0 right-0 bottom-0 top-[calc(100vh_-_50px)]"
    />
  );

  return [box, useIntersectionObserver];
}
