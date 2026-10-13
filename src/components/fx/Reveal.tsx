import { CSSProperties, ElementType, ReactNode, useRef } from "react";
import { useInView } from "./hooks";

type Variant = "up" | "down" | "left" | "right" | "scale" | "blur";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

// Fades its children in (with a small motion) the first time they scroll
// into view. Motion is disabled by CSS for prefers-reduced-motion.
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal={variant}
      className={`${className} ${inView ? "is-visible" : ""}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

// Splits a string into words that blur and rise in one after another.
export function SplitWords({
  text,
  className = "",
  baseDelay = 0,
  step = 70,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  step?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="split-word"
          style={{ animationDelay: `${baseDelay + i * step}ms` }}
        >
          {word}
          {" "}
        </span>
      ))}
    </span>
  );
}
