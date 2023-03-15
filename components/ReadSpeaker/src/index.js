/**
 * Initialize ReadSpeaker.
 */
const initReadSpeaker = () => {
  const companyId = 13613;
  const lang = document.documentElement.lang;
  const url = `https://cdn-eu.readspeaker.com/script/${companyId}/webReader/webReader.js?pids=wr&lang=${lang}&readclass=denhaag-content&voice=Sophie`;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.id = 'rs_req_Init';
  document.head.appendChild(script);
};

window.addEventListener('DOMContentLoaded', () => {
  window.rsConf = {
    general: {
      uiLang: document.documentElement.lang,
      nativeLanguages: true,
    },
  };

  window.onload = () => initReadSpeaker();
});
