"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import Eigenraeume from "@/components/work-sections/eigenraeume-standard";

export default function EigenraeumeStandardEditionPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-white", backgroundColor: "bg-black" }))

  return (
    <Eigenraeume />
  )
}