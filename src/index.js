// import checker from 'js/checker';
// import word from 'word.json';
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

let wordArray = [
  {
    word: 'นะค่ะ',
    correction: 'นะคะ',
    exception: [
      {
        word: 'แจ้งวัฒนะค่ะ',
        key: 'NdXvaNbNeU'
      },
      {
        word: 'มีมานะค่ะ',
        key: 'PlCodgFSKt'
      },
      {
        word: 'มุ่งมานะค่ะ',
        key: 'TVtkOwsjSE'
      },
      {
        word: 'จูรินะค่ะ',
        key: 'p0QO3N8N0E'
      },
      {
        word: 'ฐานะค่ะ',
        key: 'op72X9RJyR'
      },
      {
        word: 'น้ำปานะค่ะ',
        key: 'NqMVXdGKPX'
      },
      {
        word: 'อาสนะค่ะ',
        key: 'mwMyRf1tXn'
      }
    ]
  },
  {
    word: 'น้ำปานะคะ',
    correction: 'น้ำปานะค่ะ',
    exception: []
  },
  {
    word: 'สวัสดีคะ',
    correction: 'สวัสดีค่ะ',
    exception: []
  }
];

let checker = input => {
  let highlight = input.text;
  let suggestion = input.text;

  wordArray.map(value => {
    value.exception.map(value => {
      suggestion = suggestion.replaceAll(value.word, value.key);
      highlight = highlight.replaceAll(value.word, value.key);
    });
  });

  wordArray.map(value => {
    suggestion = suggestion.replaceAll(value.word, value.correction);
    highlight = highlight.replaceAll(
      value.word,
      `<a style="color:red">${value.word}</a>`
    );
    console.log(highlight);
  });

  wordArray.map(value => {
    value.exception.map(value => {
      suggestion = suggestion.replaceAll(value.key, value.word);
      highlight = highlight.replaceAll(value.key, value.word);
    });
  });

  console.log(highlight);
  return {
    original: input.text,
    suggestion: suggestion,
    html: highlight
  };
};

let inputController = () => {
  let input = {
    text: document.getElementById('inputText').value
  };
  return input;
};

let domController = () => {
  let dom = {
    inputBox: document.getElementById('inputText'),
    button: document.getElementById('inputButton')
  };
  return {
    dom: dom
  };
};

let controller = () => {
  let input = inputController();
  console.log(checker(input));
  return true;
};

(function() {
  document.getElementById('inputButton').addEventListener('click', controller);
})();
