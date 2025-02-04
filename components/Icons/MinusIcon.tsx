import React, { useRef } from "react";
import { cn } from "@/utils/cn";

interface MinusIconProps extends React.ComponentProps<"svg"> {}

export default function MinusIconProps({
  className,
  ref,
  ...props
}: MinusIconProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <svg
      ref={ref || svgRef}
      className={cn(
        "stroke-linecap-round stroke-linejoin-round h-6 w-6 stroke-current stroke-[1.5]",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
}
