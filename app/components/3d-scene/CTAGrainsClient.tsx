"use client";

import dynamic from "next/dynamic";

const CTAGrains = dynamic(() => import("./CTAGrains"), { ssr: false });

export default function CTAGrainsClient() {
  return <CTAGrains />;
}
