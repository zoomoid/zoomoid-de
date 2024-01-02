"use client";

import { SetAction, ThemeContext, initialState } from "@/context/theme.context";
import {
  ReactNode,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";

type ThemeableScaffoldingProps = PropsWithChildren<{
  navigation?: ReactNode;
  footer?: ReactNode;
}>;

export default function ThemeableScaffolding({
  navigation,
  footer,
  children,
}: ThemeableScaffoldingProps) {
  const {
    state: { backgroundColorClass: backgroundColor, textColorClass: textColor },
  } = useContext(ThemeContext);

  return (
    <div
      className={`${backgroundColor} ${textColor} flex flex-col min-h-screen relative transition-colors duration-1000`}
    >
      {navigation}
      <div className="flex-grow pt-32">{children}</div>
      {footer}
    </div>
  );
}

export type ThemeChangerProps = Partial<Omit<SetAction, "type">>;

export function ThemeChanger({
  backgroundColorClass,
  textColorClass,
  navigationImageFilter,
}: ThemeChangerProps) {
  const { dispatch } = useContext(ThemeContext);

  useEffect(() => {
    dispatch({
      type: "set",
      backgroundColorClass:
        backgroundColorClass ?? initialState.backgroundColorClass,
      textColorClass: textColorClass ?? initialState.textColorClass,
      navigationImageFilter:
        navigationImageFilter ?? initialState.navigationImageFilter,
    });
  });

  return <></>;
}
