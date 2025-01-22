'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import WeekCard from './WeekCard';

gsap.registerPlugin(ScrollTrigger);

export default function WeekTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const element = timelineRef.current;
    gsap.to(element, {
      x: () => -(element.scrollWidth - element.offsetWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        markers: true,
        start: 'top 0',
        end: '+=2000px',
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
  }, []);

  const positions = ['items-center', 'items-end', 'items-start']; // Full class names for vertical alignment

  return (
    <div className="h-[700px] border flex py-24" ref={timelineRef}>
      {Array.from({ length: 5 }).map((_, index) => (
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
