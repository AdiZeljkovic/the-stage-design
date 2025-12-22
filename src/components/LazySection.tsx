import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  fallback?: ReactNode;
}

const LazySection = ({
  children,
  className,
  rootMargin = "100px",
  fallback,
}: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={sectionRef} className={cn(className)}>
      {isVisible ? children : fallback || <div className="min-h-[200px]" />}
    </div>
  );
};

export default LazySection;
