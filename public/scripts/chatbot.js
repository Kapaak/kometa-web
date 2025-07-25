const CHATBOT_ID = document.currentScript.getAttribute('data-chatbot-id');

function chatbot() {
  if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) {
        window.chatbase.q = [];
      }
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === 'q') {
          return target.q;
        }
        return (...args) => target(prop, ...args);
      },
    });
  }

  const onLoad = function () {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = CHATBOT_ID;
    script.domain = 'www.chatbase.co';
    document.body.appendChild(script);
  };

  if (document.readyState === 'complete') {
    onLoad();
  } else {
    window.addEventListener('load', onLoad);
  }
}

chatbot();
