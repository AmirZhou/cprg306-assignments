import React, { useRef } from "react";
import { cn } from "@/utils/cn";

interface SortAlphabaticIconProps extends React.ComponentProps<"svg"> {
  isAcsending: boolean;
}

export default function SortAlphabaticIcon({
  className,
  ref,
  isAcsending,
  ...props
}: SortAlphabaticIconProps) {
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
      viewBox="0 0 32 32"
      {...props}
    >
      {isAcsending ? (
        <path d="M 8.1875 5 L 7.96875 5.65625 L 6.03125 11 L 6 11 L 6 11.0625 L 5.0625 13.65625 L 5 13.8125 L 5 15 L 7 15 L 7 14.15625 L 7.40625 13 L 10.59375 13 L 11 14.15625 L 11 15 L 13 15 L 13 13.8125 L 12.9375 13.65625 L 12 11.0625 L 12 11 L 11.96875 11 L 10.03125 5.65625 L 9.8125 5 Z M 22 5 L 22 23.6875 L 19.40625 21.09375 L 18 22.5 L 22.28125 26.8125 L 23 27.5 L 23.71875 26.8125 L 28 22.5 L 26.59375 21.09375 L 24 23.6875 L 24 5 Z M 9 8.65625 L 9.84375 11 L 8.15625 11 Z M 5 17 L 5 19 L 10.5625 19 L 5.28125 24.28125 L 5 24.59375 L 5 27 L 13 27 L 13 25 L 7.4375 25 L 12.71875 19.71875 L 13 19.40625 L 13 17 Z" />
      ) : (
        <path d="M 5 5 L 5 7 L 10.5625 7 L 5.28125 12.28125 L 5 12.59375 L 5 15 L 13 15 L 13 13 L 7.4375 13 L 12.71875 7.71875 L 13 7.40625 L 13 5 Z M 22 5 L 22 23.6875 L 19.40625 21.09375 L 18 22.5 L 22.28125 26.8125 L 23 27.5 L 23.71875 26.8125 L 28 22.5 L 26.59375 21.09375 L 24 23.6875 L 24 5 Z M 8.1875 17 L 7.96875 17.65625 L 6.03125 23 L 6 23 L 6 23.0625 L 5.0625 25.65625 L 5 25.8125 L 5 27 L 7 27 L 7 26.15625 L 7.40625 25 L 10.59375 25 L 11 26.15625 L 11 27 L 13 27 L 13 25.8125 L 12.9375 25.65625 L 12 23.0625 L 12 23 L 11.96875 23 L 10.03125 17.65625 L 9.8125 17 Z M 9 20.65625 L 9.84375 23 L 8.15625 23 Z" />
      )}
    </svg>
  );
}
