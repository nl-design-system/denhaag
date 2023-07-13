import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

import { PLAY_ICON_HTML, PAUSE_ICON_HTML } from '../stories/icons.stories.mdx';

const SWIPER_CLASS = 'denhaag-fullwidth-slider';
const SLIDE_CLASS = 'denhaag-fullwidth-slider__slide';
const ACTIVE_SLIDE_CLASS = 'denhaag-fullwidth-slider__slide--active';
const PLAYPAUSE_CLASS = 'denhaag-fullwidth-slider__controls-playpause';
const NEXT_SLIDE_CLASS = 'denhaag-fullwidth-slider__next-slide';
const PREV_SLIDE_CLASS = 'denhaag-fullwidth-slider__prev-slide';
const PAGINATION_CLASS = 'denhaag-fullwidth-slider__pagination';
const BULLET_CLASS = 'denhaag-fullwidth-slider__pagination-bullet';
const ACTIVE_BULLET_CLASS = 'denhaag-fullwidth-slider__pagination-bullet--active';

const FullwidthSlider = () => {
  // Wrapping this in a try catch statement allows us to read errors easier in storybook

  try {
    const swiper = new Swiper(`.${SWIPER_CLASS}`, {
      modules: [Navigation, Pagination, Autoplay, EffectCreative],
      loop: true,
      speed: 1000,
      spaceBetween: 0,
      slidesPerView: 1,
      grabCursor: false,
      slideClass: SLIDE_CLASS,
      slideActiveClass: ACTIVE_SLIDE_CLASS,
      autoplay: {
        delay: 3000,
      },
      a11y: {
        prevSlideMessage: 'Vorige afbeelding in de carousel',
        nextSlideMessage: 'Volgende afbeelding in de carousel',
      },
      navigation: {
        nextEl: `.${NEXT_SLIDE_CLASS}`,
        prevEl: `.${PREV_SLIDE_CLASS}`,
      },
      pagination: {
        el: `.${PAGINATION_CLASS}`,
        bulletClass: BULLET_CLASS,
        bulletActiveClass: ACTIVE_BULLET_CLASS,
        dynamicBullets: true,
        dynamicMainBullets: 5,
      },
      effect: 'creative',
      creativeEffect: {
        prev: {
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 1],
        },
      },
    });

    if (swiper?.el) {
      const playpause = swiper.el.querySelector(`.${PLAYPAUSE_CLASS}`);
      playpause.addEventListener('click', () => {
        const { running, start, stop } = swiper.autoplay;

        if (!running) {
          start();
          playpause.innerHTML = PAUSE_ICON_HTML;
        }
        if (running) {
          stop();
          playpause.innerHTML = PLAY_ICON_HTML;
        }
      });
    }

    swiper.on('slidePrevTransitionStart', () => {
      swiper.slides.forEach((slide) => slide.classList.remove('denhaag-fullwidth-slider__reverse-slide-direction'));
      const activeSlideIndex = swiper.activeIndex;
      const activeSlide = swiper.slides[activeSlideIndex];
      const slideJustLeft = swiper.slides[activeSlideIndex + 1];
      activeSlide.classList.add('denhaag-fullwidth-slider__remove-animation');
      slideJustLeft.classList.add('denhaag-fullwidth-slider__reverse-slide-direction');
    });

    swiper.on('slideNextTransitionStart', () => {
      const activeSlide = swiper.slidesEl.querySelector(`.${ACTIVE_SLIDE_CLASS}`);
      activeSlide.classList.remove('denhaag-fullwidth-slider__remove-animation');
    });
  } catch (error) {
    console.log(error);
  }
};

export default FullwidthSlider;
