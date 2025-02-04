import React, { useRef } from "react";
import { cn } from "@/utils/cn";

// QA: what's the difference between React.ComponentProps and React.ComponentPropsWithoutRef? and React.ComponentPropsWithRef?
// [Deepseek reply]:
// ComponentPropsWithRef includes ref prop, ComponentPropsWithoutRef excludes it
// Since React 19 handles ref as regular prop, ComponentProps<'svg'> is sufficient
interface PlusIconProps extends React.ComponentProps<"svg"> {}

export default function PlusIcon({ className, ref, ...props }: PlusIconProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // [Deepseek note]:
  // For GSAP animations, you can use either:
  // 1. Internal ref (svgRef) if animating within the component
  // 2. Passed ref (ref prop) if parent component will control animations

  return (
    <svg
      ref={ref || svgRef} // use passed ref if available
      className={cn(
        "stroke-linecap-round stroke-linejoin-round h-6 w-6 stroke-current stroke-[1.5]",
        className,
      )}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

// how this works?
// Deepseek note: Helps with React DevTools debugging
PlusIcon.displayName = "PlusIcon";
