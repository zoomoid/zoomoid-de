"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import LifeIsAboutMakingMemories from "@/components/work-sections/life-is-about-making-memories";

export default function LifeIsAboutMakingMemoriesPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-white", backgroundColor: "bg-black" }))

  return (
    <LifeIsAboutMakingMemories />
  );
}
