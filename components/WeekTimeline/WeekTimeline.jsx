'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import WeekCard from './WeekCard';

gsap.registerPlugin(ScrollTrigger);

export default function WeekTimeline() {
  const timelineRef = useRef(null);
  const scrollAnimationRef = useRef(null); // Ref to store the GSAP animation instance

  // useEffect(() => {
  //   const element = timelineRef.current;

  //   scrollAnimationRef.current = gsap.to(element, {
  //     x: () => -(element.scrollWidth - element.offsetWidth),
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: element,
  //       start: 'top top',
  //       end: '+=2000px',
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: true,
  //     },
  //   });

  //   // Cleanup tween on unmount
  //   return () => {
  //     console.log('Unmounting WeekTimeline');
  //     console.log(scrollAnimationRef.current);
  //     scrollAnimationRef.current.revert(); // Kill the animation instance
  //     console.log(scrollAnimationRef.current);
  //   };
  // }, []);

  const positions = ['items-center', 'items-end', 'items-start']; // Full class names for vertical alignment

  return (
    <div className="h-[700px] border flex py-24" ref={timelineRef}>
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`flex ${getVerticalPositionClass(
            index,
            positions
          )} justify-center h-full`}
        >
          <Link href={`/week-${index + 1}`}>
            <WeekCard
              imgUrl={`/images/sait-img-${index}.jpg`}
              weekNumber={index}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

function getVerticalPositionClass(index, positions) {
  return positions[index % positions.length];
}
