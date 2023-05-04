"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import Voyager from "@/components/work-sections/voyager";

export default function VoyagerPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-white", backgroundColor: "bg-black" }))

  return (
    <Voyager />
  );
}
