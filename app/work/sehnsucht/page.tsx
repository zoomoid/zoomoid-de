"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import Sehnsucht from "@/components/work-sections/sehnsucht";

export default function SehnsuchtPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-black", backgroundColor: "bg-white" }))

  return (
    <Sehnsucht />
  );
}
