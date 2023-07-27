import clsx from 'clsx';
import type { TouchEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

type Props = {
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
};

export const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const imgRef = useRef<HTMLImageElement>(null);
  const intervalRef = useRef<any>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    intervalRef.current = setInterval(
      () =>
        currentIndex === images.length - 1
          ? setCurrentIndex(0)
          : setCurrentIndex(currentIndex + 1),
      5000,
    );
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) {
      if (currentIndex === 0) {
        setCurrentIndex(images.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
    if (isLeftSwipe) {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 w-11/12 mx-auto md:w-full">
      <img
        ref={imgRef}
        className="rounded-md border border-stone-200"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
      />
      <div className="flex gap-3">
        {images.map((image, i) => (
          <button
            key={i}
            className={clsx(
              `h-2 w-2 md:h-3 md:w-3 rounded-full bg-stone-200`,
              image.id === currentIndex && `bg-yellow-600`,
            )}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};