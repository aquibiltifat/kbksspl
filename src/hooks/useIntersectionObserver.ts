import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useIntersectionObserver({
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    triggerOnce = true,
}: UseIntersectionObserverProps = {}): [RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                root,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, triggerOnce]);

    return [ref, isVisible];
}
