let domController = () => {
  let dom = {
    inputBox: document.getElementById('inputText'),
    button: document.getElementById('inputButton'),
    suggestion: document.getElementById('suggestion'),
    highlight: document.getElementById('highlight'),
    reshero: document.getElementById('reshero')
  };
  return {
    mainUpdate: function(value) {
      (dom.suggestion.innerHTML = 'suggestion:' + value.suggestion),
        (dom.highlight.innerHTML = 'highlight:' + value.html),
        (dom.reshero.style.display = 'block');
    }
  };
};

let footerDate = () => {
  let d = new Date();
  document.querySelector(
    '#footer-text'
  ).innerHTML = `©${d.getFullYear()} Chayapatr A. Punnasit C. Athena L. Bussaraporn C.`;
  console.log(`${d.getFullYear()}`);
};

export { domController, footerDate };
