import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  aspectRatio,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={imgRef}
      className={cn(
        "overflow-hidden bg-muted/30",
        aspectRatio,
        className
      )}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...props}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
