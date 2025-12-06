import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type Direction = "left" | "right";

const speedMap: Record<string, number> = {
  "very-slow": 50,
  slow: 35,
  normal: 22,
  fast: 14,
};

type MarqueeProps = {
  items: ReadonlyArray<string>;
  separator?: string;
  className?: string;
  textClassName?: string;
  uppercase?: boolean;
  direction?: Direction;
  speed?: keyof typeof speedMap;
};

export function Marquee({
  items,
  separator = "·",
  className,
  textClassName,
  uppercase = true,
  direction = "left",
  speed = "normal",
}: MarqueeProps) {
  const directionClass = direction === "left" ? "marquee-direction-left" : "marquee-direction-right";
  const duration = speedMap[speed] ?? speedMap.normal;
  const content = items.flatMap((item, index) => {
    const nodes = [
      <span
        key={`${item}-${index}`}
        className={cn(
          "inline-flex items-center whitespace-nowrap text-sm font-semibold tracking-[0.3em]",
          uppercase && "uppercase",
          textClassName,
        )}
      >
        {item}
      </span>,
    ];

    if (index < items.length - 1) {
      nodes.push(
        <span
          key={`separator-${item}-${index}`}
          aria-hidden="true"
          className={cn(
            "inline-flex items-center whitespace-nowrap text-sm font-semibold tracking-[0.3em] mx-8",
            uppercase && "uppercase",
            textClassName,
          )}
        >
          {separator}
        </span>,
      );
    }

    return nodes;
  });

  // Repeat content multiple times to fill the screen
  const repeatedContent = Array(20).fill(null).map((_, i) => (
    <span key={`repeat-${i}`}>
      {content}
      <span
        className={cn(
          "inline-flex items-center whitespace-nowrap text-sm font-semibold tracking-[0.3em]",
          uppercase && "uppercase",
          textClassName,
        )}
      >
        {separator}
      </span>
    </span>
  ));

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {[0, 1].map((index) => (
        <div
          key={index}
          className={cn("marquee-track", directionClass)}
          style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
          aria-hidden={index === 1}
        >
          {repeatedContent}
        </div>
      ))}
    </div>
  );
}

