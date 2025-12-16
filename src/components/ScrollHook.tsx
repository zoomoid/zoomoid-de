"use client";

import { useEffect } from "react";

export default function ScrollHook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <></>;
}
