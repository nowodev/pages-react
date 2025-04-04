import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const FolksCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      className="max-w-3xl mx-auto"
      style={{
        "--slide-spacing": "1.5rem",
        "--slide-size": "31%",
        "--slide-height": "19rem",
      }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-[calc(var(--slide-spacing))]">
          {slides.map((slide, index) => (
            <div
              className="transform translate-x-0 py-1 translate-y-0 translate-z-0 flex-none w-[var(--slide-size)] min-w-0 pl-[var(--slide-spacing)]"
              key={index}
            >
              <div className="p-4 border border-gray-200 rounded-lg shadow">
                <img src={slide.image} alt={slide.name} />
                <p className="text-lg">{slide.name}</p>
                <p className="text-base font-light">{slide.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid justify-end gap-4.5 mt-7">
        <div className="grid grid-cols-2 gap-2.5 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default FolksCarousel;
