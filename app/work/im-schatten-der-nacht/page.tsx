"use client";
import ImSchattenDerNacht from "@/components/work-sections/ImSchattenDerNacht";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";

export default function ImSchattenDerNachtPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-white", backgroundColor: "bg-black" }))

  return (
    <ImSchattenDerNacht />
  )
}