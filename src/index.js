// import checker from 'js/checker';
// import word from 'word.json';
import checker from './module/checker.js';
import domController from './module/dom.js';
import inputController from './module/input.js';

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
