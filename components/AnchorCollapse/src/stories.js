import AnchorCollapses from './anchorCollapses';

const anchorCollapses = new AnchorCollapses('denhaag-anchor-collapse');

window.addEventListener('DOMContentLoaded', () => {
  anchorCollapses.initialize();
  anchorCollapses.setupEventListeners();
});
window.addEventListener('resize', () => anchorCollapses.resize());
