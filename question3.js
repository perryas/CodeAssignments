/*
QUESTION 3: # Musical Numbers

### Intro

We use the base 10 number system in our everyday lives but we also run into binary and hexadecimal as software engineers.

**Binary (base 2)**
```
0, 1
```

**Hexadecimal (base 16)**
```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```

### Task

Your task is to write a function that takes in a base 10 number and converts it to our new **Musical** number system shown below. 
You do not have to convert negative numbers. Your function should only consider integer `input` as valid and return an empty string if
it's not an integer.

**Musical (base 12)**
```
A, A#, B, C, C#, D, D#, E, F, F#, G, G#
0   1  2  3  4  5   6   7  8   9  10 11
```

### Test Template

*/

function baseTenToMusical (input) {
  // Your solution
  if( typeof(input) !== "number" || (typeof(input) === "number" && input < 0))
    return "";

  const lookUp = {0:'A', 1:'A#', 2:'B', 3:'C', 4:'C#', 5:'D', 
                  6:'D#', 7:'E', 8:'F', 9:'F#', 10:'G', 11:'G#'};

  if(input < 12)
    return lookUp[input];

  else{
    let res = "";
    let divs = [];
    let rem = -1;
    let aphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    function processBase12() {
        for (i = input; 0 < i; i = Math.floor(i / 12)) { 
            if(i % 12 >= 10) { 
                divs.push(aphabets[i % 12 - 10]);
            } else { 
                divs.push(i % 12);
            } 
            rem++;
        } 
        for (j = rem; j >= 0; j--) {
            res += lookUp[divs[j]];
        } 
    };
    processBase12();
    return res;
  } 
}

// Expected Results

console.log(baseTenToMusical(11)) //"G#"
console.log(baseTenToMusical(20)) //"A#F"
console.log(baseTenToMusical(256120)) //"A#AC#BEC#"
console.log(baseTenToMusical('12AG21')) //""


