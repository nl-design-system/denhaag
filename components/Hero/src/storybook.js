import { heroThemeImage, heroHomeVideo } from './hero';

window.addEventListener('DOMContentLoaded', () => {
  heroThemeImage();
  heroHomeVideo();
});

window.addEventListener('resize', () => {
  heroThemeImage();
});
