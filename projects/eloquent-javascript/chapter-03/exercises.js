////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x,y) {
  return x < y ? x : y;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  n = Math.abs(n);
  
  if (n === 1) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  return isEven(n-2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  let count = 0;
  for(let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  return countChars(string, "B");
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
