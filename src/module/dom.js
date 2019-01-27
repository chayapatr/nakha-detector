let domController = () => {
  let dom = {
    inputBox: document.getElementById('inputText'),
    button: document.getElementById('inputButton'),
    suggestion: document.getElementById('suggestion'),
    highlight: document.getElementById('highlight')
  };
  return {
    mainUpdate: function (value) {
      (dom.suggestion.innerHTML = 'suggestion: ' + value.suggestion),
      (dom.highlight.innerHTML = 'highlight: ' + value.html);
    }
  };
};

export default domController;