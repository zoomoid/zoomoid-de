"use client";
import Hero from "@/components/hero"
import { useAppDispatch } from "./hooks";
import { setTheme } from "@/components/layout/layoutSlice";

export default function Page() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-white", backgroundColor: "bg-black" }))

  return (
    <Hero />
  );
}
