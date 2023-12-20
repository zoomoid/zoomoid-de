"use client";

import React, {
  useEffect,
  useRef,
  type PropsWithChildren,
  type HTMLProps,
  type ReactNode,
  type CSSProperties,
} from "react";

type AnimationContainerProps = {
  animationName: string;
  animationDuration?: string;
  animationDelay?: string;
  animationTimingFunction?: string;
  animationIterationCount?: string | number;
  animationFillMode?: string;
  detachAnimationClassAfter?: boolean;
};

export function AnimationContainer({
  animationName,
  animationDuration = "1s",
  animationDelay = "0s",
  animationIterationCount = "1",
  animationFillMode = "both",
  animationTimingFunction = "ease",
  detachAnimationClassAfter = false,
  threshold = 0,
  rootMargin = "0",
  children,
  ...props
}: PropsWithChildren<
  AnimationContainerProps & HTMLProps<HTMLDivElement> & IntersectionObserverInit
>) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elementRef.current?.classList.add(animationName);
          } else {
            if (detachAnimationClassAfter)
              elementRef.current?.classList.remove(animationName);
          }
        });
      },
      {
        threshold,
      }
    );

    // Start observing the target element
    observer.observe(elementRef.current!);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [animationName]);

  return (
    <div ref={elementRef} {...props}>
      {children}
      <style jsx>{`
        .${animationName} {
          animation-name: ${animationName};
          animation-duration: ${animationDuration};
          animation-delay: ${animationDelay};
          animation-timing-function: ${animationTimingFunction};
          animation-iteration-count: ${animationIterationCount};
          animation-fill-mode: ${animationFillMode};
        }
      `}</style>
    </div>
  );
}

type StaggeringAnimationContainer = {
  interval?: string;
  initialDelay?: string;
  initialStyle?: CSSProperties
};

export function StaggeringAnimationContainer({
  animationName,
  detachAnimationClassAfter = false,
  interval = "250ms",
  initialDelay = "0s",
  initialStyle = {},
  children,
  className,
  ...props
}: StaggeringAnimationContainer &
  AnimationContainerProps &
  IntersectionObserverInit &
  HTMLProps<HTMLDivElement> & {
    children: ReactNode | ReactNode[];
  }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} {...props} className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimationContainer
          {...props}
          animationName={animationName}
          detachAnimationClassAfter={detachAnimationClassAfter}
          animationFillMode="both"
          animationDelay={`calc(${index} * ${interval} + ${initialDelay})`}
          style={initialStyle}
          key={index}
        >
          {child}
        </AnimationContainer>
      ))}
    </div>
  );
}
