import Accordion from './AccordionToggle';

new Accordion();

window.addEventListener('DOMContentLoaded', () => window.dispatchEvent(new CustomEvent('nlds-accordion:init')));
