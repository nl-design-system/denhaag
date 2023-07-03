/**
 * Initialize ReadSpeaker.
 * @param {number} companyId The ReadSpeaker Company ID.
 */
const initReadSpeaker = (companyId) => {
  const params = {
    pids: 'wr',
    lang: document.documentElement.lang,
    readclass: 'denhaag-content',
    voice: 'Sophie',
    noDefaultSkin: 1,
  };
  const queryString = new URLSearchParams(params).toString();

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://cdn-eu.readspeaker.com/script/${companyId}/webReader/webReader.js?${queryString}`;
  script.id = 'rs_req_Init';
  document.head.appendChild(script);
};

const initializedReadspeaker = () => {
  const rs = document.getElementById('denhaag-readspeaker');
  if (!rs) {
    return false;
  }

  rs.style.setProperty('--denhaag-readspeaker-opacity', 1);

  /*global ReadSpeaker*/
  /*eslint no-undef: "error"*/
  if (typeof ReadSpeaker !== 'object') {
    // ReadSpeaker isn't loaded yet.
    setTimeout(() => initializedReadspeaker(), 100);
    return false;
  }
  /*eslint no-undef: "error"*/
  ReadSpeaker.q(() => {
    document.getElementById('denhaag-readspeaker').classList.add('denhaag-readspeaker--initialized');
  });

  return true;
};

const renderReadspeaker = () => {
  const rs = document.getElementById('denhaag-readspeaker');

  let width = 0;
  Array.from(rs.getElementsByClassName('rsbtn_play')).forEach((el) => (width += el.clientWidth));
  rs.style.setProperty('--denhaag-readspeaker-playbtn-width', `${width}px`);
};

window.addEventListener('DOMContentLoaded', () => {
  // Configurations can be found here: https://wrdev.readspeaker.com/adaptation/configurations
  window.rsConf = {
    general: {
      uiLang: document.documentElement.lang,
      nativeLanguages: true,
      saveLangVoice: true,
      translatedDisclaimer: true,
      confirmPolicy:
        'Using the Listen button service sends a request to an external service to read out the content of this page.',
    },
    cb: {
      ui: {
        open: () => {
          renderReadspeaker();
        },
      },
    },
    ui: {
      tools: {
        controlpanel: false,
      },
    },
  };

  window.onload = () => initReadSpeaker(13613);

  setTimeout(() => initializedReadspeaker(), 200);
});
