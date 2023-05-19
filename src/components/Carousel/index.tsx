"use client";
import { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const divCarousel = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (divCarousel.current)
      divCarousel.current.scrollLeft += divCarousel.current.offsetWidth;
  };

  const previusSlide = () => {
    if (divCarousel.current)
      divCarousel.current.scrollLeft -= divCarousel.current.offsetWidth;
  };

  return (
    <section className="flex justify-center items-center mx-auto my-0 gap-4 px-1">
      <button
        className="hidden md:block p-1 hover:text-white hover:bg-blue-400 hover:bg-opacity-90 hover:duration-300 hover:rounded-full"
        onClick={previusSlide}
      >
        <AiOutlineLeft size={32} />
      </button>
      <div
        className="flex px-2 sm:px-0 gap-4 overflow-x-auto max-w-[1280px] mx-auto my-0 scroll-smooth scrollbar-hide"
        ref={divCarousel}
      >
        {children}
      </div>
      <button
        className="hidden md:block p-1 hover:text-white hover:bg-blue-400 hover:bg-opacity-90 hover:duration-300 hover:rounded-full"
        onClick={nextSlide}
      >
        <AiOutlineLeft size={32} className="rotate-180" />
      </button>
    </section>
  );
};
