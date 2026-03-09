import Accordion from '../../Accordion/src/AccordionToggle.js';

new Accordion();

window.addEventListener('DOMContentLoaded', () => window.dispatchEvent(new CustomEvent('nlds-accordion:init')));
