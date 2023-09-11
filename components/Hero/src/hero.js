export const heroThemeImage = (mainclass = '.denhaag-hero--theme-image') => {
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
      '--denhaag-hero-theme-image-height',
      `${imageElementHeight + heightDifference}px`,
    );
  } else {
    heroImageElement?.style.setProperty('--denhaag-hero-theme-image-height', `${imageElementHeight}px`);
  }
};

export const heroHomeVideo = (mainclass = '.denhaag-hero--home-video') => {
  // Elements.
  const videoElement = document.querySelector(`${mainclass} .denhaag-hero__video`);
  const videoButtonElement = document.querySelector(`${mainclass} .denhaag-button`);
  const buttonIconElement = videoButtonElement?.querySelector('.denhaag-button__icon');

  // Video button classes.
  const buttonClassPause = 'denhaag-hero__video-pause-button';
  const buttonClassPlay = 'denhaag-hero__video-play-button';

  // Create html elements.
  const playIconHtml =
    '<svg class="denhaag-button__icon-play" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.61449C5 4.32817 6.39536 3.52672 7.50645 4.17486L15.0193 8.55733C16.1218 9.20046 16.1218 10.7935 15.0193 11.4366L7.50645 15.8191C6.39536 16.4672 5 15.6657 5 14.3794V5.61449ZM14.1795 9.99696L6.66667 5.61449V14.3794L14.1795 9.99696Z" fill="currentColor"></path></svg>';
  const pauseIconHtml =
    '<svg class="denhaag-button__icon-pause" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 5C7.9602 5 8.33329 5.3731 8.33329 5.83333V14.1667C8.33329 14.6269 7.9602 15 7.49996 15C7.03972 15 6.66663 14.6269 6.66663 14.1667V5.83333C6.66663 5.3731 7.03972 5 7.49996 5ZM12.5 5C12.9602 5 13.3333 5.3731 13.3333 5.83333V14.1667C13.3333 14.6269 12.9602 15 12.5 15C12.0397 15 11.6666 14.6269 11.6666 14.1667V5.83333C11.6666 5.3731 12.0397 5 12.5 5Z" fill="currentColor"></path></svg>';

  // Fallback.
  if (!videoElement || !videoButtonElement) {
    return;
  }

  // Toggle button class.
  const toggleButtonClass = (buttonElement) => {
    if (!buttonElement) {
      return;
    }

    buttonElement.classList.toggle(buttonClassPause);
    buttonElement.classList.toggle(buttonClassPlay);
  };

  // Toggle icon.
  const toggleIcon = (iconElement, addIconHtml) => {
    if (!iconElement && !addIconHtml) {
      return;
    }

    iconElement.innerText = '';
    iconElement.insertAdjacentHTML('beforeend', addIconHtml);
  };

  videoButtonElement.addEventListener(
    'click',
    ({ target }) => {
      // Conditions.
      const buttonPauseClicked = target.classList.contains(buttonClassPause);
      const buttonPlayClicked = target.classList.contains(buttonClassPlay);
      const insideButtonPauseClicked = target.closest(`.${buttonClassPause}`);
      const insideButtonPlayClicked = target.closest(`.${buttonClassPlay}`);

      toggleButtonClass(videoButtonElement);

      // Toggle play button: play/pause video + toggle icon.
      if (buttonPauseClicked || insideButtonPauseClicked) {
        videoElement.pause();
        toggleIcon(buttonIconElement, playIconHtml);
      }

      if (buttonPlayClicked || insideButtonPlayClicked) {
        videoElement.play();
        toggleIcon(buttonIconElement, pauseIconHtml);
      }
    },
    false,
  );
};
