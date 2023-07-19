import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Keyboard, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

import { PLAY_ICON_HTML, PAUSE_ICON_HTML } from '../stories/icons.stories.mdx';

const SWIPER_CLASS = 'denhaag-fullwidth-slider';
const SWIPER_TITLE_CLASS = 'denhaag-fullwidth-slider__top-title';
const SLIDE_CLASS = 'denhaag-fullwidth-slider__slide';
const ACTIVE_SLIDE_CLASS = 'denhaag-fullwidth-slider__slide--active';
const REMOVE_SLIDE_ANIMATION_CLASS = 'denhaag-fullwidth-slider__remove-animation';
const REVERSE_DIRECTION_CLASS = 'denhaag-fullwidth-slider__reverse-slide-direction';
const SLIDE_TITLE_CLASS = 'denhaag-fullwidth-slider__card-content__title';
const PLAYPAUSE_CLASS = 'denhaag-fullwidth-slider__controls-playpause';
const NEXT_SLIDE_CLASS = 'denhaag-fullwidth-slider__next-slide';
const PREV_SLIDE_CLASS = 'denhaag-fullwidth-slider__prev-slide';
const PAGINATION_CLASS = 'denhaag-fullwidth-slider__pagination';
const BULLET_CLASS = 'denhaag-fullwidth-slider__pagination-bullet';
const ACTIVE_BULLET_CLASS = 'denhaag-fullwidth-slider__pagination-bullet--active';
const PREVIOUS_SLIDE_LABEL = 'Previous slide';
const NEXT_SLIDE_LABEL = 'Next slide';
const PAUSE_SLIDER_LABEL = 'Pause slider';
const PLAY_SLIDER_LABEL = 'Play slider';

const FullwidthSlider = () => {
  const sliders = document.querySelectorAll(`.${SWIPER_CLASS}`);
  if (sliders) {
    sliders.forEach((slider) => {
      const slideCount = slider.querySelectorAll(`.${SLIDE_CLASS}`)?.length;
      // Wrapping this in a try catch statement allows us to read errors easier in storybook
      // Not neccesary to add try catch statement in gutenberg block
      try {
        const swiper = new Swiper(slider, {
          modules: [Navigation, Pagination, Autoplay, Keyboard, EffectCreative],
          loop: true,
          speed: 800,
          spaceBetween: 0,
          slidesPerView: 1,
          grabCursor: false,
          slideClass: SLIDE_CLASS,
          slideActiveClass: ACTIVE_SLIDE_CLASS,
          lazy: true,
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          autoplay: {
            delay: 7000,
          },
          a11y: {
            prevSlideMessage: PREVIOUS_SLIDE_LABEL,
            nextSlideMessage: NEXT_SLIDE_LABEL,
          },
          navigation: {
            nextEl: `.${NEXT_SLIDE_CLASS}`,
            prevEl: `.${PREV_SLIDE_CLASS}`,
          },
          pagination: {
            el: `.${PAGINATION_CLASS}`,
            bulletClass: BULLET_CLASS,
            bulletActiveClass: ACTIVE_BULLET_CLASS,
            dynamicBullets: slideCount > 5 ? true : false,
            dynamicMainBullets: 3,
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

        if (swiper) {
          swiper.autoplay?.stop();
          const playpause = swiper.el.querySelector(`.${PLAYPAUSE_CLASS}`);
          const swiperTitle = slider.querySelector(`.${SWIPER_TITLE_CLASS}`);

          if (slideCount < 2) {
            playpause.classList.add(`${PLAYPAUSE_CLASS}--hide`);
            if (swiperTitle) swiperTitle.style['margin-block-end'] = 0;
          }

          playpause.addEventListener('click', () => {
            const { running, start, stop } = swiper.autoplay;

            if (!running) {
              start();
              playpause.innerHTML = PAUSE_ICON_HTML;
              playpause.setAttribute('aria-label', PAUSE_SLIDER_LABEL);
            }
            if (running) {
              stop();
              playpause.innerHTML = PLAY_ICON_HTML;
              playpause.setAttribute('aria-label', PLAY_SLIDER_LABEL);
            }
          });

          // On init, remove slide animation from active slide (in view on load)
          const activeSlide = swiper.slides[swiper.activeIndex];
          activeSlide.classList.add(REMOVE_SLIDE_ANIMATION_CLASS);

          // Reverse the slide animation when clicking previous slide
          swiper.on('slidePrevTransitionStart', () => {
            swiper.slides.forEach((slide) => slide.classList.remove(REVERSE_DIRECTION_CLASS));

            const activeSlideIndex = swiper.activeIndex;
            const activeSlide = swiper.slides[activeSlideIndex];
            const slideJustLeft = swiper.slides[activeSlideIndex + 1];
            activeSlide.classList.add(REMOVE_SLIDE_ANIMATION_CLASS);
            slideJustLeft.classList.add(REVERSE_DIRECTION_CLASS);
          });

          // If going back to forwards navigation, reset animation
          swiper.on('slideNextTransitionStart', () => {
            const activeSlide = swiper.slidesEl.querySelector(`.${ACTIVE_SLIDE_CLASS}`);
            activeSlide.classList.remove(REMOVE_SLIDE_ANIMATION_CLASS);
          });

          swiper.on('slideChangeTransitionStart', () => {
            // Remove tabindex from all inactive slides
            const slideTitles = document.querySelectorAll(`.${SLIDE_TITLE_CLASS}`);

            if (slideTitles)
              slideTitles.forEach((el) => {
                const href = el.querySelector('a');
                el.tabIndex = -1;
                if (href) href.tabIndex = -1;
              });

            // Add tabindex to current active slide
            const activeSlideIndex = swiper.activeIndex;
            const activeSlide = swiper.slides[activeSlideIndex];
            const activeSlideHref = activeSlide.querySelector(`.${SLIDE_TITLE_CLASS}`)?.querySelector('a');
            if (activeSlideHref) {
              activeSlideHref.tabIndex = 0;
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export default FullwidthSlider;
