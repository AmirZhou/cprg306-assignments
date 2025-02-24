import React, { useRef } from "react";
import { cn } from "@/utils/cn";

// QA: what's the difference between React.ComponentProps and React.ComponentPropsWithoutRef? and React.ComponentPropsWithRef?
// [Deepseek reply]:
// ComponentPropsWithRef includes ref prop, ComponentPropsWithoutRef excludes it
// Since React 19 handles ref as regular prop, ComponentProps<'svg'> is sufficient
interface CrossIconProps extends React.ComponentProps<"svg"> {}

export default function CrossIcon({
  className,
  ref,
  ...props
}: CrossIconProps) {
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
      <path
        id="XMLID_732_"
        d="M70.7,64.3c1.8,1.8,1.8,4.6,0,6.4c-0.9,0.9-2,1.3-3.2,1.3c-1.2,0-2.3-0.4-3.2-1.3L46,52.4L27.7,70.7
	c-0.9,0.9-2,1.3-3.2,1.3s-2.3-0.4-3.2-1.3c-1.8-1.8-1.8-4.6,0-6.4L39.6,46L21.3,27.7c-1.8-1.8-1.8-4.6,0-6.4c1.8-1.8,4.6-1.8,6.4,0
	L46,39.6l18.3-18.3c1.8-1.8,4.6-1.8,6.4,0c1.8,1.8,1.8,4.6,0,6.4L52.4,46L70.7,64.3z"
      />
    </svg>
  );
}

// how this works?
// Deepseek note: Helps with React DevTools debugging
CrossIcon.displayName = "CrossIcon";
