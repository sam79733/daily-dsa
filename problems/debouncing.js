function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const fetchSearchSuggestion = function () {
  console.log('You are searching for ', this.value);
};

const debouceFetchSuggestion = debounce(fetchSearchSuggestion, 500);

document.getElementById('txtInput').addEventListener('input', function (event) {
  debouceFetchSuggestion.call(this, event);
});
