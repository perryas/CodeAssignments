/*
QUESTION 2: SquashObjects
*/

const object1 = {
  1: 5,
  2: {
    3: 2,
    9: 6,
    'a': {
     2: 'hello world',
     7: 5,
     3: false
    }
  }
};

const object2 = {
  4: 3,
  'foo': {
    0: 9,
    5: 5,
    4: {
      6: ['bar', 7, true],
      1: {
        2: 10
      }
    }
  }
};

//Ayana's Code for Question # 2:
function summa(object, callback){
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key} => ${value}`);
    if(typeof(value) === 'number')
    {
      callback(key, value);
    }
    if(typeof(value) === 'object')
     summa(object[key], callback);
  }
}

function squashObject (object1) {
  let sumValues = 0;
  let sumKeys = 0;
  
  function addCallback(a,b){
    sumValues += b;
      sumKeys += Number(a);
  }
  let entries = Object.entries(object1);
  console.log('Entries ', JSON.stringify(object1));

  summa(object1, addCallback);
  const newObj = {};
  newObj[sumKeys] = sumValues;

  return newObj;
}

console.log(squashObject(object1)); // returns {20: 18}

//squashObject(object2) // returns {11: 27}

// This function accepts an object and returns

// an object with a single key-value pair.

// It should search through an object and find
// key-value pairs where both are numbers.

// It should then return an object where the key
// is the sum of all valid keys, and the value is
// the sum of all valid values.


