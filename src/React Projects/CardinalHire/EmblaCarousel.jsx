import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import resume from "./resume-lg.png";

function EmblaCarousel(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full px-4 mx-auto sm:px-6 lg:px-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y">
          {slides.map((slide, index) => (
            <div
              className="flex-none w-full min-w-0 pl-4 transform translate-x-0 translate-y-0 translate-z-0"
              key={index}
            >
              <Slide number={index + 1} slide={slide} />
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
}

function Slide({ number, slide }) {
  return (
    <div className="flex items-center p-16 bg-blue-100 border shadow-inner select-none rounded-3xl justifybetween gap-x-30">
      <img src={slide.image} alt="Resume" className="w-auto h-44" />
      <div className="flex flex-col max-w-2xl gap-y-4">
        <div className="flex items-center space-x-3">
          <p className="flex items-center justify-center text-3xl font-semibold text-blue-500 border-2 rounded-full min-w-14 min-h-14">
            #{number}
          </p>
          <h1 className="text-4xl font-medium">{slide.title}</h1>
        </div>
        <p className="text-xl leading-8">{slide.description}</p>
      </div>
    </div>
  );
}

export default EmblaCarousel;
