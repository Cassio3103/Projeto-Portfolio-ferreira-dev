import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  as: Element = 'div',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (current) observer.unobserve(current);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <Element
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Element>
  );
}