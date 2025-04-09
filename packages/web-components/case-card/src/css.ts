export default `.denhaag-card {
    @media (width <= 1279px) {
      --denhaag-card-width: var(--denhaag-card-mobile-width);
    }
  }
  
  .denhaag-card--focus,
  .denhaag-card:focus-within {
    outline: var(--denhaag-focus-border);
  }
  
  .denhaag-card--hover,
  .denhaag-card:hover,
  .denhaag-card:hover:focus {
    cursor: pointer;
  }
  
  .denhaag-case-card .denhaag-card__wrapper,
  .denhaag-subject-card {
    display: flex;
    color: var(--denhaag-card-color);
    flex-direction: column;
    box-sizing: border-box;
    text-decoration: none;
    min-height: var(--denhaag-card-height);
    height: 100%;
    width: var(--denhaag-card-width);
    border-width: var(--denhaag-card-border-width);
    border-style: solid;
    border-color: var(--denhaag-card-border-color);
    border-radius: var(--denhaag-card-border-radius);
    padding-block-start: var(--denhaag-card-wrapper-padding-block);
    padding-block-end: var(--denhaag-card-wrapper-padding-block);
    padding-inline-start: var(--denhaag-card-wrapper-padding-inline);
    padding-inline-end: var(--denhaag-card-wrapper-padding-inline);
  }
  
  .denhaag-card__arrow {
    position: var(--denhaag-card-arrow-position);
    right: var(--denhaag-card-arrow-right);
    left: var(--denhaag-card-arrow-left);
    margin-inline-start: auto;
  }
  
  .denhaag-card__title {
    --utrecht-paragraph-font-family: var(--denhaag-typography-sans-serif-alternate-font-family);
    --utrecht-paragraph-font-size: var(--denhaag-card-title-font-size);
  
    font-size: var(--denhaag-card-title-font-size);
    line-height: var(--denhaag-card-title-line-height);
    /* stylelint-disable-next-line value-no-vendor-prefix */
    display: -webkit-box;
    padding-block-end: var(--denhaag-card-title-padding-block);
    padding-block-start: var(--denhaag-card-title-padding-block);
    padding-inline-end: var(--denhaag-card-title-padding-block);
    padding-inline-start: var(--denhaag-card-title-padding-inline);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .denhaag-card__title a:link,
  .denhaag-card__title a:visited {
    text-decoration: none;
    color: inherit;
  }
  
  .utrecht-paragraph.denhaag-card__subtitle,
  .denhaag-card__date-wrapper {
    --utrecht-space-around: 0;
  
    font-size: var(--denhaag-card-subtitle-font-size);
    font-weight: var(--denhaag-card-subtitle-font-weight);
    line-height: var(--denhaag-card-subtitle-line-height);
    color: var(--denhaag-card-subtitle-font-color);
    padding-block-end: var(--denhaag-card-subtitle-padding-block);
    padding-block-start: var(--denhaag-card-subtitle-padding-block);
    padding-inline-end: var(--denhaag-card-subtitle-padding-block);
    padding-inline-start: var(--denhaag-card-subtitle-padding-block);
  }
  
  .denhaag-card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    transform-style: preserve-3d;
  }
  
  .denhaag-card__actions {
    display: flex;
    justify-content: space-between;
  }
  
  .denhaag-card__action-link {
    color: var(--denhaag-card-arrow-color);
    margin-inline-start: auto;
  }
  
  .denhaag-card__action-link:focus {
    outline: none;
  }
  
  .denhaag-card__action-link::before {
    --denhaag-card-action-link-padding-block--before: var(
      --denhaag-card-case-action-link-padding-block-start,
      var(--denhaag-card-wrapper-padding-block)
    );
  
    content: "";
    position: absolute;
    inset-block-start: calc(0px - var(--denhaag-card-action-link-padding-block--before));
    inset-block-end: calc(0px - var(--denhaag-card-wrapper-padding-block));
    inset-inline-start: calc(0px - var(--denhaag-card-wrapper-padding-inline));
    inset-inline-end: calc(0px - var(--denhaag-card-wrapper-padding-inline));
    padding-block-start: var(--denhaag-card-action-link-padding-block--before);
    padding-block-end: var(--denhaag-card-wrapper-padding-block);
    padding-inline-start: var(--denhaag-card-wrapper-padding-inline);
    padding-inline-end: var(--denhaag-card-wrapper-padding-inline);
  }
  
  .denhaag-case-card .denhaag-card__action-link::before {
    --denhaag-card-case-action-link-padding-block-start: calc(
      var(--denhaag-card-wrapper-padding-block) + var(--denhaag-card-case-padding-block-start)
    );
  }
  
  .denhaag-case-card {
    width: var(--denhaag-card-width);
    position: relative;
    background: var(--denhaag-card-case-secondary-background-color);
    padding-block-start: var(--denhaag-card-case-padding-block-start);
  }
  
  .denhaag-case-card::before {
    position: absolute;
    top: 8px;
    right: 8px;
    display: block;
    width: 50%;
    height: 20px;
    content: "";
    border-radius: 0 var(--denhaag-card-border-radius) 0 0;
    background: var(--denhaag-card-case-paper-color);
  }
  
  .denhaag-case-card .denhaag-card__wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: var(--denhaag-card-case-height);
    height: 100%;
    border: 2px;
    border-radius: var(--denhaag-card-border-radius);
    background: transparent;
    padding-block-end: var(--denhaag-card-case-padding-block-end);
    padding-block-start: var(--denhaag-card-case-padding-block-start);
    perspective: 1800px;
  }
  
  .denhaag-case-card .denhaag-card__background {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 50% 100%;
    border-radius: var(--denhaag-card-border-radius);
    border-top-left-radius: 0;
    background: var(--denhaag-card-case-primary-background-color);
  }
  
  .denhaag-case-card .denhaag-card__background::before {
    position: absolute;
    top: -20px;
    left: 0;
    display: block;
    width: 60%;
    height: 25px;
    content: "";
    border-top-left-radius: var(--denhaag-card-border-radius);
    background: var(--denhaag-card-case-primary-background-color);
  }
  
  .denhaag-case-card .denhaag-card__background::after {
    position: absolute;
    top: -20px;
    left: 55%;
    display: block;
    width: 10%;
    height: 22px;
    content: "";
    transform: skewX(30deg);
    background: var(--denhaag-card-case-primary-background-color);
  }
  
  .denhaag-case-card .denhaag-card__arrow-icon {
    color: var(--denhaag-card-case-arrow-color);
  }
  
  .denhaag-case-card.denhaag-card--hover .denhaag-card__arrow-icon,
  .denhaag-case-card.denhaag-card--focus .denhaag-card__arrow-icon,
  .denhaag-case-card:hover .denhaag-card__arrow-icon,
  .denhaag-case-card:focus-within .denhaag-card__arrow-icon {
    color: var(--denhaag-card-case-arrow-active-color);
  }
  
  .denhaag-case-card .denhaag-card__title {
    --utrecht-paragraph-font-weight: var(--denhaag-card-title-font-weight);
    --utrecht-paragraph-line-height: var(--denhaag-card-title-line-height);
  
    color: var(--denhaag-card-case-title-color);
    padding-block-end: var(--denhaag-card-title-padding-block);
    padding-block-start: var(--denhaag-card-title-padding-block);
    padding-inline-end: var(--denhaag-card-title-padding-inline);
    padding-inline-start: var(--denhaag-card-title-padding-inline);
  }
  
  .denhaag-case-card .denhaag-card__subtitle,
  .denhaag-case-card .denhaag-card__date-wrapper {
    --utrecht-paragraph-line-height: var(--denhaag-card-subtitle-line-height);
  
    color: var(--denhaag-card-case-color);
    padding-block-start: var(--denhaag-card-subtitle-padding);
    padding-block-end: var(--denhaag-card-subtitle-padding);
    padding-inline-start: var(--denhaag-card-subtitle-padding);
    padding-inline-end: var(--denhaag-card-subtitle-padding);
  }
  
  .denhaag-case-card.denhaag-card--hover::before,
  .denhaag-case-card.denhaag-card--focus::before,
  .denhaag-case-card:hover::before,
  .denhaag-case-card:focus-within::before {
    top: 12px;
    transform: rotate(-2.45deg);
    transform-origin: right;
  }
  
  .denhaag-case-card.denhaag-card--focus .denhaag-card__background,
  .denhaag-case-card.denhaag-card--hover .denhaag-card__background,
  .denhaag-case-card:hover .denhaag-card__background,
  .denhaag-case-card:focus-within .denhaag-card__background {
    transform: rotateX(-20deg);
  }
  
  .denhaag-case-card--archived {
    --denhaag-card-case-primary-background-color: var(--denhaag-card-case-archived-primary-background-color);
    --denhaag-card-case-secondary-background-color: var(--denhaag-card-case-archived-secondary-background-color);
    --denhaag-card-case-color: var(--denhaag-card-case-archived-color);
    --denhaag-card-case-title-color: var(--denhaag-card-case-archived-title-color);
    --denhaag-card-case-arrow-color: var(--denhaag-card-case-archived-arrow-color);
    --denhaag-card-case-arrow-active-color: var(--denhaag-card-case-archived-arrow-color);
  }
  `;
