"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import PermanentlyMoving from "@/components/work-sections/301";

export default function PermanentlyMovingPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-white", backgroundColor: "bg-black" }))

  return (
      <PermanentlyMoving />
  );
}
