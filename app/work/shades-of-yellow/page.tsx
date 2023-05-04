"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import ShadesOfYellow from "@/components/work-sections/shades-of-yellow";

export default function Page() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-black", backgroundColor: "bg-white" }))

  return (
    <ShadesOfYellow />
  );
}
