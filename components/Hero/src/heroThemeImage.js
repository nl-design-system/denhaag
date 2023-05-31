const HeroThemeImage = (mainclass = '.denhaag-hero--theme-image') => {
  // Elements.
  const imageElement = document.querySelector(`${mainclass} .denhaag-hero__image`);
  const heroImageElement = document.querySelector(mainclass);
  const contentElement = document.querySelector(`${mainclass} .denhaag-hero__content`);

  // Get realtime element heights.
  const imageElementHeight = imageElement?.clientHeight;
  const contentElementHeight = contentElement?.clientHeight;

  // Set height of heroImageElement.
  if (contentElementHeight > imageElementHeight) {
    const heightDifference = contentElementHeight - imageElementHeight;
    heroImageElement?.style.setProperty(
      '--denhaag-hero--theme-image-height',
      `${imageElementHeight + heightDifference}px`,
    );
  } else {
    heroImageElement?.style.setProperty('--denhaag-hero--theme-image-height', `${imageElementHeight}px`);
  }
};

export default HeroThemeImage;
