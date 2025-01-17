import WeekCard from './WeekCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function WeekTimeline() {
  const positions = ['items-center', 'items-end', 'items-start']; // Full class names for vertical alignment
  return (
    <div className="overflow-hidden h-[700px] border flex py-24">
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
