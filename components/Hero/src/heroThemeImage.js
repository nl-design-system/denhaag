const HeroThemeImage = (classname = '.denhaag-hero--theme-image') => {
  // Elements.
  const imageElement = document.querySelector(`${classname} .denhaag-hero__image`);
  const heroImageElement = document.querySelector(classname);

  // Get realtime image height.
  const imageElementHeight = imageElement?.clientHeight;
  console.log('imageElementHeight: ', imageElementHeight);

  // Assign image height to css variable used by heroImageElement.
  setTimeout(() => {
    heroImageElement?.style.setProperty('--denhaag-hero--theme-image-height', `${imageElementHeight}px`);
  }, 1);
};

export default HeroThemeImage;
