const mainElement = document.querySelector('main:not(.herobanner)');
const textContent = mainElement.innerText.replace(/\s+/g, ' ').trim();

const totalWords = textContent.split(' ').length;

const wordsPerMinute = 200;

function timeToRead() {
  const totalMinute = totalWords / wordsPerMinute;
  return Math.ceil(totalMinute);
}
