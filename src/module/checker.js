import wordArray from './wordarray.js';

let checker = input => {
  let highlight = input.text;
  let suggestion = input.text;

  let exceptionRevertFunc = mode => {
    wordArray.map(value => {
      value.exception.map(value => {
        if (mode) {
          suggestion = suggestion.replaceAll(value.word, value.key);
          highlight = highlight.replaceAll(value.word, value.key);
        } else {
          suggestion = suggestion.replaceAll(value.key, value.word);
          highlight = highlight.replaceAll(value.key, value.word);
        }
      });
    });
  };

  exceptionRevertFunc(true);
  if (input.text.search('แมรี่') !== -1)
    window.location.replace('https://twitter.com/m_maryys');
  wordArray.map(value => {
    suggestion = suggestion.replaceAll(value.word, value.correction);
    highlight = highlight.replaceAll(
      value.word,
      `<a style="color:red" class="thai">${value.word}</a>`
    );
    console.log(highlight);
  });
  exceptionRevertFunc(false);

  console.log(highlight);
  return {
    original: input.text,
    suggestion: suggestion,
    html: highlight
  };
};

export default checker;
