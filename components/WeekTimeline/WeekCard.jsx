'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function WeekCard({ imgUrl, weekNumber }) {
  const trianglesRef = useRef(Array(4).fill(null)); // Pre-initialize the array with 4 slots
  const timeline = useRef(null);
  const textTimeline = useRef(null);

  const cardRef = useRef(null); // Ref for the card's background
  const textRef = useRef(null); // Ref for the text-center element

  const opacities = [0.15, 0.25, 0.35, 0.15]; // Define the initial opacities

  useGSAP(
    () => {
      // Set initial opacity values on mount
      trianglesRef.current.forEach((triangle, index) => {
        if (triangle) {
          gsap.set(triangle, { opacity: opacities[index] });
        }
      });
    },
    { scope: cardRef }
  );

  const createTimeline = () => {
    const tl = gsap.timeline({ paused: true });

    tl.to(trianglesRef.current, {
      opacity: (i) => (i === 0 ? 1 : 0),
      duration: 0,
    })
      .to(
        trianglesRef.current,
        {
          opacity: (i) => (i === 1 ? 1 : 0),
          duration: 0,
        },
        '+=0.03'
      ) // 30ms
      .to(
        trianglesRef.current,
        {
          opacity: 0,
          duration: 0,
        },
        '+=0.03'
      )
      .to(
        trianglesRef.current,
        {
          opacity: (i) => (i === 2 || i === 3 ? 1 : 0),
          duration: 0,
        },
        '+=0.03'
      )
      .to(
        trianglesRef.current,
        {
          opacity: (i) => (i === 2 ? 0 : 1),
          duration: 0,
        },
        '+=0.03'
      )
      .to(
        trianglesRef.current,
        {
          opacity: 0,
          duration: 0,
        },
        '+=0.03'
      )
      .to(
        trianglesRef.current,
        {
          //phase 2
          opacity: 0.8, // Instantly go to 0.8 opacity
          duration: 0, // No time for the instant change
          stagger: 0.05, // Staggered start times
        },
        '+=0.25'
      )
      .to(
        trianglesRef.current,
        {
          opacity: (i) => opacities[i],
          duration: 0.5,
          stagger: 0.08,
        },
        '<'
      );

    return tl;
  };

  const { contextSafe } = useGSAP();

  const createTextTimeline = () => {
    const tl = gsap.timeline({ paused: true });

    tl.to(textRef.current, {
      backgroundColor: '#193c58',
      color: '#ffffff',
      duration: 0.2,
    });

    return tl;
  };

  const handleMouseEnter = contextSafe(() => {
    if (!timeline.current) {
      timeline.current = createTimeline();
    }

    if (!textTimeline.current) {
      textTimeline.current = createTextTimeline();
    }

    timeline.current?.restart(); // Restart the timeline from the beginning
    textTimeline.current?.restart();

    gsap.to(cardRef.current, { filter: 'none', duration: 0.2 });
  });

  const handleMouseLeave = contextSafe(() => {
    // Reset triangles to their initial opacities
    trianglesRef.current.forEach((triangle, index) => {
      if (triangle) {
        gsap.set(triangle, { opacity: opacities[index] });
      }
    });

    // Reapply grayscale to the background
    gsap.to(cardRef.current, {
      filter: 'grayscale(100%)',
      duration: 0.2,
    });

    gsap.to(textRef.current, {
      backgroundColor: '#E3DDDD',
      color: '#000000',
      duration: 0.2,
    });
  });

  return (
    <div className="flex flex-col gap-1">
      <div
        className="clip-parallelogram h-40 aspect-[5/1.732]"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)', // Initial grayscale
          transition: 'filter 0.2s ease-in-out', // Smooth transition for hover
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              trianglesRef.current[index] = el; // Assign DOM element to ref
            }}
            className={`h-40 aspect-[2/1.732] absolute top-0`}
            style={{
              clipPath:
                index % 2 === 0
                  ? 'polygon(0% 0%, 100% 0%, 50% 100%)'
                  : 'polygon(0% 100%, 50% 0%, 100% 100%)',
              left: `${index * 20}%`,
              opacity: opacities[index], // Default opacity
              backgroundColor: 'white',
            }}
          ></div>
        ))}
      </div>
      <div className="text-center mt-4 w-72 h-12 bg-[#E3DDDD]" ref={textRef}>
        <h3 className="text-lg font-semibold">Week {weekNumber + 1}</h3>
        {/* <p className="text-sm text-gray-500">Jan 1 - Jan 7</p> */}
      </div>
    </div>
  );
}
