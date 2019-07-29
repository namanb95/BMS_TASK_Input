let numbers    = {};
let arrListMap = {};

const arrList = [10, 20, 50, 33, 13, 55, 44];

/**
 * Access the global ```numbers``` variable and sets the passed value.
 * @param {number} number
 */
const setValueToArrayMaps = (arrMap, number) => {
  arrMap[number] = true;
};

/**
 * On submit handler
 * @param {Object} event 
 */
const handleOnSubmit = event => {
  event.preventDefault();
  debugger;
  reset();
  emptyDisplayDivs();
  let inputValue = document.getElementById("inputRanger").value;
  inputValueParser(inputValue);
  duplicateFinderAndRenderer();
  finalListIterator();
};

/**
 * Empties the initial values preset in the spans.
 */
const emptyDisplayDivs = () => {
  document.getElementById("dupp").innerHTML = "";
  document.getElementById("uniq").innerHTML = "";
  document.getElementById("final").innerHTML = "";
};

/**
 * Creates a new map object out of the passed array.
 * @param {Array} arr 
 */
const createArrListMap = arr => {
  const arrMap = {};
  arr.forEach(element => (arrMap[element] = true));
  return arrMap;
};

/**
 * Parses the input string passed.
 * @param {String} inputString 
 */
const inputValueParser = inputString => {
  if (inputString === "") {
    showError();
  }

  let splitByComma = inputString.split(",");

  splitByComma.forEach(element => {
    if (element !== "") {
      const splitByHyphen = element.split("-");
      const [from, to] = splitByHyphen;

      if (splitByHyphen.length > 1) {
        rangeIterator(from, to);
      } else {
        setValueToArrayMaps(numbers, from);
      }
    }
  });
};

/**
 * Runs a loop over the range passed in the input string.
 * @param {String} from 
 * @param {String} to 
 */
const rangeIterator = (from, to) => {
  let start = parseInt(from);
  let end = parseInt(to);
  for (let i = from; i <= to; i++) setValueToArrayMaps(numbers, i);
};

/**
 * Finds duplictaes in the new input number from the present array.
 */
const duplicateFinderAndRenderer = () => {
  for (inputs in numbers) {
    if (arrListMap[inputs]) {
      appendToDiv("dupp", inputs);
    } else {
      setValueToArrayMaps(arrListMap, inputs);
      appendToDiv("uniq", inputs);
    }
  }
};

/**
 * Manupilates the DOM.
 * @param {String} id
 * @param {Number} value
 */
const appendToDiv = (id, value) => {
  document.getElementById(id).append(value + ", ");
};

/**
 * Resets to the initial state.
 */
const reset = () => {
  numbers = {};
  arrListMap = createArrListMap(arrList);
};

/**
 * Renders the final updated list in the DOM.
 */
const finalListIterator = () => {
  for (finalNumbers in arrListMap) {
    appendToDiv("final", finalNumbers);
  }
};

/**
 * Alerts if any error occurs.
 */
const showError = () => {
  alert("Invalid Input");
  reset();
  return;
};

/**
 * @param {Object} param0 
 */
const blockChar = ({ key }) => {
  if ((key >= 0 && key <= 9) || key === "-" || key === ",") return true;
  return false;
};
