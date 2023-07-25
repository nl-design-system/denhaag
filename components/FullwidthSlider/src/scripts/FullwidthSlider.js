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
const PAUSE_SLIDER_LABEL = 'Pause slider';
const PLAY_SLIDER_LABEL = 'Play slider';

const FullwidthSlider = () => {
  const sliders = document.querySelectorAll(`.${SWIPER_CLASS}`);
  if (sliders) {
    sliders.forEach((slider) => {
      const slideCount = slider.querySelectorAll(`.${SLIDE_CLASS}`)?.length;
      let prefersReduceMotion = false;

      if ('matchMedia' in window) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) prefersReduceMotion = true;
      }

      // Only for storybook
      if (slider.classList.contains('denhaag-fullwidth-slider--prefers-reduced-motion')) {
        prefersReduceMotion = true;
      }

      const prevEffect = !prefersReduceMotion ? ['-20%', 0, -1] : ['0%', 0, -1];
      const nextEffect = !prefersReduceMotion ? ['100%', 0, 1] : ['0%', 0, -1];

      try {
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
              translate: prevEffect,
            },
            next: {
              translate: nextEffect,
            },
          },
        });

        if (swiper) {
          swiper.autoplay?.stop();
          const playpause = swiper.el.querySelector(`.${PLAYPAUSE_CLASS}`);
          const swiperTitle = slider.querySelector(`.${SWIPER_TITLE_CLASS}`);

          if (slideCount < 2) {
            if (playpause) playpause.classList.add(`${PLAYPAUSE_CLASS}--hide`);
            if (swiperTitle) swiperTitle.style['margin-block-end'] = 0;
          }

          if (slideCount > 5) {
            const paginationEl = slider.querySelector(`.${PAGINATION_CLASS}`);
            paginationEl.classList.add(PAGINATION_CLASS_DYNAMIC);
          }

          swiper.slides?.forEach((slide) => {
            if (prefersReduceMotion) slide.classList.add(REMOVE_SLIDE_ANIMATION_CLASS);
            const portraitImage = slide.querySelector(`.${PORTRAIT_IMAGE_CLASS}`);
            if (portraitImage) {
              const imageSrc = portraitImage.querySelector('img').src;
              portraitImage.style.setProperty('--denhaag-fullwidth-slider-background-image-url', `url("${imageSrc}")`);
            }
          });

          if (playpause) {
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
          }

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
            if (!prefersReduceMotion) activeSlide.classList.remove(REMOVE_SLIDE_ANIMATION_CLASS);
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
