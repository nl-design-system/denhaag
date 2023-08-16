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
const PAGINATION_CLASS_DYNAMIC = 'denhaag-fullwidth-slider__pagination--dynamic';
const BULLET_CLASS = 'denhaag-fullwidth-slider__pagination-bullet';
const ACTIVE_BULLET_CLASS = 'denhaag-fullwidth-slider__pagination-bullet--active';
const PORTRAIT_IMAGE_CLASS = 'denhaag-fullwidth-slider__slide-image--portrait';
const PREVIOUS_SLIDE_LABEL = 'Previous slide';
const NEXT_SLIDE_LABEL = 'Next slide';
const PAUSE_SLIDER_LABEL = 'Pause image gallery slider';
const PLAY_SLIDER_LABEL = 'Play image gallery slider';
const A11Y_SLIDER_INDICATOR_CLASS = 'denhaag-fullwidth-slider__a11y-slide-indicator';

const FullwidthSlider = () => {
  const sliders = document.querySelectorAll(`.${SWIPER_CLASS}`);
  if (sliders) {
    sliders.forEach((slider) => {
      // Selectors
      const getElements = (inputClass) => slider.querySelectorAll(`.${inputClass}`);
      const getOneElement = (inputClass) => slider.querySelector(`.${inputClass}`);

      const allSlides = getElements(SLIDE_CLASS);
      const slideCount = allSlides?.length;
      const playpause = getOneElement(PLAYPAUSE_CLASS);
      const swiperTitle = getOneElement(SWIPER_TITLE_CLASS);
      const a11YSliderIndicator = getOneElement(A11Y_SLIDER_INDICATOR_CLASS);
      const paginationEl = getOneElement(PAGINATION_CLASS);
      const portraitImages = getElements(PORTRAIT_IMAGE_CLASS);

      // Check user preferences before initializing swiper
      let prefersReduceMotion = false;

      if ('matchMedia' in window) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) prefersReduceMotion = true;
      }

      if (slider.classList.contains('denhaag-fullwidth-slider--prefers-reduced-motion')) {
        prefersReduceMotion = true;
      }

      const swiper = new Swiper(slider, {
        modules: [Navigation, Pagination, Autoplay, Keyboard, EffectCreative],
        loop: true,
        speed: prefersReduceMotion ? 0 : 800,
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

        const handlePlayPause = () => {
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
        };

        const handleReducedMotion = () => {
          swiper.slides?.forEach((slide) => slide.classList.add(REMOVE_SLIDE_ANIMATION_CLASS));
        };

        const handleImageOrientation = () => {
          Array.from(portraitImages)?.forEach((image) => {
            const imageSrc = image.querySelector('img').src;
            image.style.setProperty('--denhaag-fullwidth-slider-background-image-url', `url("${imageSrc}")`);
          });
        };

        const handleActiveSlideAnimation = () => {
          const activeSlide = getOneElement(ACTIVE_SLIDE_CLASS);
          if (!prefersReduceMotion) activeSlide.classList.remove(REMOVE_SLIDE_ANIMATION_CLASS);
        };

        const reverseActiveSlideAnimation = () => {
          swiper.slides.forEach((slide) => slide.classList.remove(REVERSE_DIRECTION_CLASS));
          const activeSlideIndex = swiper.activeIndex;
          const activeSlide = swiper.slides[activeSlideIndex];
          const slideJustLeft = swiper.slides[activeSlideIndex + 1];
          activeSlide.classList.add(REMOVE_SLIDE_ANIMATION_CLASS);
          slideJustLeft.classList.add(REVERSE_DIRECTION_CLASS);
        };

        const a11yToggleAllSlidesVisible = () => {
          swiper.slides.forEach((slide) => (slide.style.visibility = 'visible'));
        };

        const a11yUpdateActiveSlideVisibility = () => {
          swiper.slides.forEach((slide) => (slide.style.visibility = 'hidden'));
          swiper.visibleSlides.forEach((slide) => (slide.style.visibility = 'visible'));
        };

        const a11yUpdateActiveSlideTabIndex = () => {
          const slideTitles = getElements(SLIDE_TITLE_CLASS);
          if (slideTitles)
            slideTitles.forEach((el) => {
              el.tabIndex = -1;
              const href = el.querySelector('a');
              if (href) href.tabIndex = -1;
            });

          // Add tabindex to current active slide
          const activeSlideIndex = swiper.realIndex;
          const activeSlide = swiper.slides[activeSlideIndex];
          const activeSlideHref = activeSlide.querySelector(`.${SLIDE_TITLE_CLASS}`)?.querySelector('a');
          if (activeSlideHref) activeSlideHref.tabIndex = 0;
        };

        const a11yUpdateSlideCountScreenReader = () => {
          const string = `Currently showing slide ${swiper.realIndex + 1} of ${slideCount}`;
          if (paginationEl) paginationEl.setAttribute('aria-label', string);
          if (a11YSliderIndicator) {
            a11YSliderIndicator.textContent = string;
            setTimeout(() => {
              a11YSliderIndicator.textContent = '';
            }, 1000);
          }
        };

        // On init, remove slide animation from active slide (in view on load)
        const activeSlide = swiper.slides[swiper.activeIndex];
        activeSlide.classList.add(REMOVE_SLIDE_ANIMATION_CLASS);

        if (slideCount < 2) {
          if (playpause) playpause.classList.add(`${PLAYPAUSE_CLASS}--hide`);
          if (swiperTitle) swiperTitle.style['margin-block-end'] = 0;
        }

        if (slideCount > 5 && paginationEl) {
          paginationEl.classList.add(PAGINATION_CLASS_DYNAMIC);
        }

        if (playpause) handlePlayPause();
        if (prefersReduceMotion) handleReducedMotion();
        if (portraitImages) handleImageOrientation();

        // Reverse the slide animation when clicking previous slide
        swiper.on('slidePrevTransitionStart', () => {
          reverseActiveSlideAnimation();
        });

        // If going back to forwards navigation, reset animation
        swiper.on('slideNextTransitionStart', () => {
          handleActiveSlideAnimation();
        });

        swiper.on('slideChangeTransitionStart', () => {
          a11yToggleAllSlidesVisible();
          a11yUpdateActiveSlideTabIndex();
          a11yUpdateSlideCountScreenReader();
        });

        swiper.on('slideChangeTransitionEnd', () => {
          a11yUpdateActiveSlideVisibility();
        });

        // On init
        a11yUpdateActiveSlideVisibility();
        a11yUpdateActiveSlideTabIndex();
      }
    });
  }
};

export default FullwidthSlider;
