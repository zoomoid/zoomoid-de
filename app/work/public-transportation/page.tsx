"use client";
import { useAppDispatch } from "@/app/hooks";
import { setTheme } from "@/components/layout/layoutSlice";
import PublicTransportation from "@/components/work-sections/PublicTransportation";

export default function PublicTransportationPage() {
  const dispatch = useAppDispatch()
  dispatch(setTheme({ textColor: "text-white", backgroundColor: "bg-black" }))

  return (
    <PublicTransportation />
  );
}
