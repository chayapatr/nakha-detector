// import checker from 'js/checker';
// import word from 'word.json';
import checker from './checker.js';
import domController from './dom.js';
import inputController from './input.js';

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};


let controller = () => {
  let input = inputController();
  let result = checker(input);
  domController().mainUpdate(result);
  return true;
};

(function() {
  document.getElementById('inputButton').addEventListener('click', controller);
})();
