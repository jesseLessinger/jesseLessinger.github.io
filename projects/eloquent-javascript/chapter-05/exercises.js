// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  
 
  return arr.reduce((flatArr, arr) => {
    return flatArr.concat(arr);
  });

  
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body ) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
    for (let elem of array) {
  	if (!test(elem)) {
    	return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  console.log(text);
  let counter = text.split("")
    .map((char)=>{  //first lets map chars to directions,
      return scriptFromChar(char).direction;
    })
    
    .filter((s) => {  //clean out the scriptless chars like "!" just cuz
      return s !== undefined;
    })
    
    .reduce( (counter, dir)=>{
      counter[dir] = (counter[dir] === undefined) ? 1 : counter[dir] + 1;
      return counter; 
    }, {});  //returns an object: keys are directions, values are total counts
    
    //now lets find which one is most common
    let highDir = 0;
    let domDir;
    for (let dir in counter) {
      if (counter[dir] > highDir) {
        highDir = counter[dir];
        domDir = dir;
      }
    }
  
console.log(counter);
  return domDir;
}

/// HELPER FUNCTIONS 
function scriptFromChar(char) {
  let code = char.charCodeAt(0);
  for (let script of SCRIPTS) { /*global SCRIPTS */
    if (script.ranges.some( (range) => {  //if code is in range, return the script
            return code > range[0] && code < range[1];
          })) {
              return script;
        }
    }
    return {};
}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
