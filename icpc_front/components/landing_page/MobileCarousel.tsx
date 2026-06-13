"use client";

import { Children, useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  /** Tailwind grid classes applied on sm+ (e.g. "grid-cols-3 lg:grid-cols-6 gap-4") */
  desktopGrid: string;
  /** Width of each card in the mobile carousel (default "w-[78%]") */
  cardWidth?: string;
  /** Auto-scroll interval in ms (default 2500) */
  interval?: number;
}

export default function MobileCarousel({
  children,
  desktopGrid,
  cardWidth = "w-[78%]",
  interval = 2500,
}: Props) {
  const items = Children.toArray(children);
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const advance = (next: number) => {
      indexRef.current = next;
      setActive(next);
      const card = container.children[next] as HTMLElement | undefined;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: "smooth",
        });
      }
    };

    const timer = setInterval(
      () => advance((indexRef.current + 1) % items.length),
      interval
    );

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const goTo = (idx: number) => {
    indexRef.current = idx;
    setActive(idx);
    const container = scrollRef.current;
    const card = container?.children[idx] as HTMLElement | undefined;
    if (card && container) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Mobile carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1"
        >
          {items.map((item, i) => (
            <div key={i} className={`${cardWidth} shrink-0 snap-start`}>
              {item}
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-4 bg-blue-500" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className={`hidden sm:grid ${desktopGrid}`}>{children}</div>
    </>
  );
}
