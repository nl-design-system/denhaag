import AccordionScripts from './accordionScripts';

window.addEventListener('DOMContentLoaded', async () => {
  console.clear();
  window.onload = () => new AccordionScripts('denhaag-accordion__panel');
});
