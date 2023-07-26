import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
const PREVIOUS_SLIDE_LABEL = 'Previous slide';
const NEXT_SLIDE_LABEL = 'Next slide';

const InlineCarousel = () => {
  const carousels = document.querySelectorAll(`.${SWIPER_CLASS}`);
  if (carousels) {
    carousels.forEach((carousel) => {
      const slideCount = carousel.querySelectorAll(`.${SLIDE_CLASS}`)?.length;

      let prefersReduceMotion = false;

      if ('matchMedia' in window) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) prefersReduceMotion = true;
      }

      // Only for storybook
      if (carousel.classList.contains('denhaag-inline-carousel--prefers-reduced-motion')) {
        prefersReduceMotion = true;
      }

      // Wrapping this in a try catch statement allows us to read errors easier in storybook
      try {
        const swiper = new Swiper(carousel, {
          modules: [Navigation, Pagination, Autoplay],
          loop: true,
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
          autoplay: {
            delay: 7000,
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
          if (slideCount > 5) {
            const paginationEl = carousel.querySelector(`.${PAGINATION_CLASS}`);
            paginationEl.classList.add(PAGINATION_CLASS_DYNAMIC);
          }

          swiper.on('slideChangeTransitionStart', () => {
            // Remove tabindex from all inactive slides
            const downloadButtons = carousel.querySelectorAll(`.${DOWNLOAD_BUTTON_CLASS}`);
            if (downloadButtons) downloadButtons.forEach((button) => (button.tabIndex = -1));

            // Add tabindex to current active slide
            const activeSlideIndex = swiper.activeIndex;
            const activeSlide = swiper.slides[activeSlideIndex];
            const activeSlideDownloadBtn = activeSlide.querySelector(`.${DOWNLOAD_BUTTON_CLASS}`);
            if (activeSlideDownloadBtn) {
              activeSlideDownloadBtn.tabIndex = 0;
            }
          });

          swiper.slides?.forEach((slide) => {
            const portraitImage = slide.querySelector(`.${PORTRAIT_IMAGE_CLASS}`);
            if (portraitImage) {
              const imageSrc = portraitImage.querySelector('img').src;
              portraitImage.style.setProperty('--denhaag-inline-carousel-background-image-url', `url("${imageSrc}")`);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export default InlineCarousel;
