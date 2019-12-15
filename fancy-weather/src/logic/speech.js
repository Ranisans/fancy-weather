/* eslint-disable no-undef */
/* eslint no-param-reassign: ["error",
  { "props": true, "ignorePropertyModificationsFor": ["searchInput"] }] */
const initSpeech = (main, searchInput) => {
  const micButton = document.querySelector('.menu-search_speech');

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  let transcript;

  const speechEndListener = () => {
    recognition.removeEventListener('end', speechEndListener, true);

    searchInput.value = transcript;
  };

  recognition.onresult = (event) => {
    const last = event.results.length - 1;
    transcript = event.results[last][0].transcript;
  };

  main.addEventListener('mousedown', (event) => {
    if (event.target === micButton) {
      recognition.start();
      recognition.addEventListener('end', speechEndListener);
    }
  });
};

export default initSpeech;
