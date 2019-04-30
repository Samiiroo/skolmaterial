function sum(a, b) {
  let add = a + b
  return add;
}

function multiply(a, b) {
  return a * b;
}
function subtract(a,b) {
  return a - b;
}

module.exports = {
  sum: sum,
  multiply: multiply,
  subtract: subtract,
};
