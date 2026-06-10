import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const arrowClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primaryColor hover:bg-primaryColor hover:text-white disabled:cursor-not-allowed [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40 cursor-pointer";

const SliderControls = ({ navId }) => {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        aria-label="Previous slide"
        className={`${arrowClass} swiper-${navId}-prev`}
      >
        <BsChevronLeft className="text-sm" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className={`${arrowClass} swiper-${navId}-next`}
      >
        <BsChevronRight className="text-sm" />
      </button>
    </div>
  );
};

export default SliderControls;
