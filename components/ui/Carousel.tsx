import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import Elon from "@/components/ui/vimeo/Elon";
import Logan from "@/components/ui/vimeo/Logan";
import Confidence from "@/components/ui/vimeo/Confidence";
import Command from "@/components/ui/vimeo/Command";
import Crypto from "@/components/ui/vimeo/Crypto";
import Recipe from "@/components/ui/vimeo/Recipe";
import Stadiums from "@/components/ui/vimeo/Stadiums";
import Girls from "@/components/ui/vimeo/Girls";

type PropType = {
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container"> 
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Elon />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Logan />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Stadiums />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Command />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Confidence />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Crypto />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Girls />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number">
                <Recipe />
              </div>
            </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default Carousel
