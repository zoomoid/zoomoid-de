"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import EigenraeumeExtended from "@/components/work-sections/eigenraeume-extended";

export default function EigenraeumeExtendedEditionPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-black", backgroundColor: "bg-white" }))

  return (
    <EigenraeumeExtended />
  )
}