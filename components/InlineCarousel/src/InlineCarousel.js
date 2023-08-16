import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

const SWIPER_CLASS = 'denhaag-inline-carousel';
const SLIDE_CLASS = 'denhaag-inline-carousel__slide';
const NEXT_SLIDE_CLASS = 'denhaag-inline-carousel__next-slide';
const PREV_SLIDE_CLASS = 'denhaag-inline-carousel__prev-slide';
const PAGINATION_CLASS = 'denhaag-inline-carousel__pagination';
const PAGINATION_CLASS_DYNAMIC = 'denhaag-inline-carousel__pagination--dynamic';
const BULLET_CLASS = 'denhaag-inline-carousel__pagination-bullet';
const ACTIVE_BULLET_CLASS = 'denhaag-inline-carousel__pagination-bullet-active';
const DOWNLOAD_BUTTON_CLASS = 'denhaag-inline-carousel__content-download';
const PORTRAIT_IMAGE_CLASS = 'denhaag-inline-carousel__slide-image--portrait';
const PREVIOUS_SLIDE_LABEL = 'Previous image';
const NEXT_SLIDE_LABEL = 'Next image';
const A11Y_SLIDER_INDICATOR_CLASS = 'denhaag-inline-carousel__a11y-slide-indicator';

const InlineCarousel = () => {
  const carousels = document.querySelectorAll(`.${SWIPER_CLASS}`);
  if (carousels) {
    carousels.forEach((carousel) => {
      // Selectors
      const getElements = (inputClass) => carousel.querySelectorAll(`.${inputClass}`);
      const allSlides = getElements(SLIDE_CLASS);
      const slideCount = allSlides?.length;
      const a11YSliderIndicator = carousel.querySelector(`.${A11Y_SLIDER_INDICATOR_CLASS}`);
      const downloadButtons = getElements(DOWNLOAD_BUTTON_CLASS);
      const portraitImages = getElements(PORTRAIT_IMAGE_CLASS);
      const paginationEl = carousel.querySelector(`.${PAGINATION_CLASS}`);

      // Check portrait images
      if (portraitImages)
        portraitImages.forEach((image) => {
          const imageSrc = image.querySelector('img').src;
          image.style.setProperty('--denhaag-inline-carousel-background-image-url', `url("${imageSrc}")`);
        });

      // Check user preferences before initializing swiper
      let prefersReduceMotion = false;
      if ('matchMedia' in window) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) prefersReduceMotion = true;
      }

      if (carousel.classList.contains('denhaag-inline-carousel--prefers-reduced-motion')) {
        prefersReduceMotion = true;
      }

      try {
        // Init swiper
        const swiper = new Swiper(carousel, {
          modules: [Navigation, Pagination],
          loop: true,
          lazy: true,
          speed: prefersReduceMotion ? 0 : 800,
          spaceBetween: 10,
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
        });

        if (swiper) {
          if (slideCount > 5 && paginationEl) {
            paginationEl.classList.add(PAGINATION_CLASS_DYNAMIC);
          }

          const a11yHideDownloadBtns = () => {
            if (downloadButtons)
              downloadButtons.forEach((button) => {
                button.tabIndex = -1;
                button.setAttribute('aria-hidden', 'true');
              });
          };

          const a11yShowActiveDownloadBtn = () => {
            const activeSlide = swiper.slides.find((slide) => slide.classList.contains('swiper-slide-active'));
            const activeSlideDownloadBtn = activeSlide.querySelector(`.${DOWNLOAD_BUTTON_CLASS}`);
            if (activeSlideDownloadBtn) {
              activeSlideDownloadBtn.tabIndex = 0;
              activeSlideDownloadBtn.setAttribute('aria-hidden', 'false');
            }
          };

          const a11yHideSlideVisibility = () => {
            swiper.slides.forEach((slide) => (slide.style.visibility = 'visible'));
          };

          const a11yShowActiveSlideVisible = () => {
            swiper.slides.forEach((slide) => (slide.style.visibility = 'hidden'));
            const active = swiper.slides.find((slide) => slide.classList.contains('swiper-slide-active'));
            active.style.visibility = 'visible';
          };

          const a11yUpdateSlideCountScreenReader = () => {
            const string = `Currently showing image ${swiper.realIndex + 1} of ${slideCount}.`;
            if (paginationEl) paginationEl.setAttribute('aria-label', string);
            if (a11YSliderIndicator) {
              a11YSliderIndicator.textContent = string;
              setTimeout(() => {
                a11YSliderIndicator.textContent = '';
              }, 1000);
            }
          };

          // Swiper events
          swiper.on('slideChangeTransitionStart', () => {
            a11yHideSlideVisibility();
            a11yHideDownloadBtns();
            a11yUpdateSlideCountScreenReader();
          });

          swiper.on('slideChangeTransitionEnd', () => {
            a11yShowActiveSlideVisible();
            a11yShowActiveDownloadBtn();
          });

          // On init
          a11yShowActiveSlideVisible();
          a11yHideDownloadBtns();
          a11yShowActiveDownloadBtn();
        }
      } catch (err) {
        console.log(err);
      }
    });
  }
};

export default InlineCarousel;
