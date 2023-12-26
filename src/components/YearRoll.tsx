"use client";

import { useEffect, useRef } from "react";

type YearRollProps = {
  millenias?: number[];
  centuries?: number[];
  decades?: number[];
  years?: number[];
  duration?: string;
  direction?: "normal" | "reverse";
  once?: boolean,
} & IntersectionObserverInit;

export function YearRoll({
  direction = "normal",
  duration = "2s",
  millenias = [2000],
  centuries = [0],
  decades = [10, 20],
  years = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  rootMargin,
  root,
  threshold,
  once = false,
}: YearRollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationClass = "is-animating";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elementRef.current?.classList.add(animationClass);
          }
          else if(!once) {
            elementRef.current?.classList.remove(animationClass);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    // Start observing the target element
    observer.observe(elementRef.current!);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [animationClass, once, root, rootMargin, threshold]);


  type transformer = (inject: string) => string
  let transformFrom: transformer, transformTo: transformer
  if (direction === "reverse") {
    transformFrom = (i) => `translateY(calc(-1 * var(--${i}) * 1em))`
    transformTo = () => `translateY(0%)`
  } else {
    transformFrom = () => `translateY(0%)`
    transformTo = (i) => `translateY(calc(-1 * var(--${i}) * 1em))`
  }

  return (
    <>
      <div
        className="roll font-sans inline-flex items-baseline"
        ref={elementRef}
      >
        <div>
          {millenias.map((m, i) => (
            <span key={`millenium-${i}`}>{Math.floor(m / 1000) % 10}</span>
          ))}
        </div>
        <div>
          {centuries.map((c, i) => (
            <span key={`century-${i}`}>{Math.floor(c / 100) % 10}</span>
          ))}
        </div>
        <div className="decades">
          {decades.map((c, i) => (
            <span key={`decade-${i}`}>{Math.floor(c / 10) % 10}</span>
          ))}
        </div>
        <div className="years">
          {years.map((c, i) => (
            <span key={`year-${i}`}>{Math.floor(c) % 10}</span>
          ))}
        </div>
        <style scoped jsx>{`
          .roll {
            --years: ${years.length - 1};
            --decades: ${decades.length - 1};
          }
          .roll > .decades {
            transform: ${transformFrom("decades")}
          }
          .roll > .years {
            transform: ${transformFrom("years")}
          }
          .roll.${animationClass} > .decades {
            transform: ${transformTo("decades")}
          }
          .roll.${animationClass} > .years {
            transform: ${transformTo("years")}
          }
        `}</style>
        <style jsx>{`
          .roll {
            font-size: 1em;
            height: 1em;
            mask-image: linear-gradient(transparent 0%, black 10%, black 90%, transparent 100%);
          }
          .roll div {
            width: 0.6em;
            display: block;
            line-height: 0;
            transform:
            transition-property: transform;
            transition-duration: calc(${duration});
          }
          .roll div span {
            display: block;
            width: 0.6em;
            height: 1em;
            text-align: center;
            line-height: 1;
          }
          .roll div {
            animation-fill-mode: both;
          }
        `}</style>
      </div>
    </>
  );
}
