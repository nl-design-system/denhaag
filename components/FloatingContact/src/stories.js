import FloatingContact from './FloatingContact';

window.addEventListener('DOMContentLoaded', async () => {
  setTimeout(() => {
    new FloatingContact();

    const id = 'livecom-trigger';
    const chatTrigger = document.getElementById(id);
    if (chatTrigger) {
      chatTrigger.setAttribute('href', 'javascript:void(0);');

      const wrapper = document.createElement('span');
      wrapper.classList.add('lc5element');
      wrap(chatTrigger, wrapper);

      wrapper.insertAdjacentHTML('beforebegin', '<!-- BEGIN LIVECOM CHAT LINK SCRIPT -->');
      wrapper.insertAdjacentHTML('afterend', '<!-- END LIVECOM CHAT LINK SCRIPT -->');

      chatTrigger.insertAdjacentHTML(
        'beforebegin',
        `<!-- lcType="link" lcGroup="1" lcChan="LWC;LVC;LVI" lcId="${id}" lcOnval="Open chatgesprek" lcOffval="Offline" lcOccupied="In gesprek" lcClosingHour="Gesloten" onchange="changeChatStatus" lcClass="online" -->`,
      );
    }
  }, 50);
});

const wrap = function (toWrap, wrapper) {
  toWrap.parentNode.appendChild(wrapper);
  return wrapper.appendChild(toWrap);
};
