"use client";

import React, {
  useEffect,
  useRef,
  type HTMLProps,
  type ReactNode,
  type CSSProperties,
} from "react";

export type AnimationProps = {
  animationName: string;
  animationDuration?: string;
  animationDelay?: string;
  animationTimingFunction?: string;
  animationIterationCount?: string | number;
  animationFillMode?: string;
};

export type AnimationControlProps = {
  detachAnimationClassAfter?: boolean;
  finished?: boolean;
};

export type StaggeringProps = {
  interval?: string;
};

export type InitialStateProps = {
  initialDelay?: string;
  initialStyle?: CSSProperties;
};

export type AnimationContainerProps = AnimationProps &
  AnimationControlProps &
  HTMLProps<HTMLDivElement> &
  IntersectionObserverInit;

export type StaggeringGroupProps = StaggeringProps &
  InitialStateProps &
  AnimationContainerProps &
  IntersectionObserverInit &
  HTMLProps<HTMLDivElement>;

export type StaggeringContainerProps = StaggeringProps &
  InitialStateProps &
  AnimationContainerProps &
  IntersectionObserverInit &
  HTMLProps<HTMLDivElement> & {
    children: ReactNode | ReactNode[];
  };

export function AnimationElement({
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
  finished,
  ...props
}: AnimationContainerProps & {
  children: ReactNode | ReactNode[];
}) {
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
  }, [animationName, detachAnimationClassAfter, threshold]);

  useEffect(() => {
    if (finished) {
      elementRef.current?.classList.add(animationName);
    }
  }, [animationName, finished]);

  return (
    <div ref={elementRef} {...props}>
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
      {children}
    </div>
  );
}

export function StaggeringGroup({
  animationName,
  animationDuration = "1s",
  animationDelay = "0s",
  animationIterationCount = "1",
  animationFillMode = "both",
  animationTimingFunction = "ease",
  detachAnimationClassAfter = false,
  interval = "250ms",
  initialDelay = "0s",
  initialStyle = {},
  children,
  threshold,
  className,
  finished,
  ...props
}: StaggeringGroupProps & {
  children: ReactNode | ReactNode[];
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  const groupClassName = animationName + "-group";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elementRef.current?.classList.add(groupClassName);
          } else {
            if (detachAnimationClassAfter)
              elementRef.current?.classList.remove(groupClassName);
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
  }, [groupClassName, detachAnimationClassAfter, threshold]);

  useEffect(() => {
    if (finished) {
      elementRef.current?.classList.add(groupClassName);
    }
  }, [groupClassName, finished]);

  return (
    <div ref={elementRef} {...props} className={className}>
      <style jsx>{`
        .${groupClassName} > div {
          animation-name: ${animationName};
          animation-duration: ${animationDuration};
          animation-timing-function: ${animationTimingFunction};
          animation-iteration-count: ${animationIterationCount};
          animation-fill-mode: ${animationFillMode};
        }
      `}</style>
      {React.Children.map(children, (child, index) => (
        <div
          {...props}
          style={{
            ...initialStyle,
            animationDelay: `calc(${index} * ${interval} + ${initialDelay})`,
          }}
          key={index}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function StaggeringSet({
  animationName,
  detachAnimationClassAfter = false,
  interval = "250ms",
  initialDelay = "0s",
  initialStyle = {},
  children,
  className,
  finished,
  ...props
}: StaggeringContainerProps & {
  children: ReactNode | ReactNode[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} {...props} className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimationElement
          {...props}
          animationName={animationName}
          detachAnimationClassAfter
          animationFillMode="both"
          animationDelay={`calc(${index} * ${interval} + ${initialDelay})`}
          style={initialStyle}
          finished
          key={index}
        >
          {child}
        </AnimationElement>
      ))}
    </div>
  );
}
