import { PropsWithChildren } from "react";

type ThemeTextColor = string
type ThemeBackgroundColor = string

export type Release = {
  theme: [ThemeTextColor, ThemeBackgroundColor];
  title: string;
  cover: {
    url: string
  };
  anchor: string
  date: string;
  about: string;
  listen: {
    title: string;
    url: string;
  }[]
}
