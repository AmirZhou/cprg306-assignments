'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Link from 'next/link';
import WeekCard from './WeekCard';

gsap.registerPlugin(ScrollTrigger);

export default function WeekTimeline() {
  const timelineRef = useRef(null);

  useGSAP(() => {
    gsap.to(timelineRef.current, {
      x: () =>
        -(timelineRef.current.scrollWidth - timelineRef.current.offsetWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top top',
        end: '+=2000px',
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
  });

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
