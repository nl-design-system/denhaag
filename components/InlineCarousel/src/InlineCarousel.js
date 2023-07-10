import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

const SWIPER_CLASS = 'denhaag-inline-carousel';
const NEXT_SLIDE_CLASS = 'denhaag-inline-carousel__next-slide';
const PREV_SLIDE_CLASS = 'denhaag-inline-carousel__prev-slide';
const PAGINATION_CLASS = 'denhaag-inline-carousel__pagination';
const BULLET_CLASS = 'denhaag-inline-carousel__pagination-bullet';
const ACTIVE_BULLET_CLASS = 'denhaag-inline-carousel__pagination-bullet-active';

const InlineCarousel = () => {
  // Wrapping this in a try catch statement allows us to read errors easier in storybook
  try {
    new Swiper(`.${SWIPER_CLASS}`, {
      modules: [Navigation, Pagination],
      loop: true,
      speed: 400,
      spaceBetween: 100,
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
        type: 'custom',
        renderCustom: (slider, current, total) => {
          const className = BULLET_CLASS;
          const activeClassName = ACTIVE_BULLET_CLASS;
          const bullets = Array.from(Array(total)).map((bullet, i) => {
            const index = i + 1;
            if (slider.activeIndex === i)
              return `<span aria-title="Slide ${index} of ${total}" class="${className} ${activeClassName}"></span>`;
            return `<span aria-title="Slide ${index} of ${total}" class="${className}"></span>`;
          });
          return bullets.join('');
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default InlineCarousel;
