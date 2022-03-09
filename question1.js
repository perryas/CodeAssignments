/*

Question 1:  Parentheses Checker
Write a function that takes a string containing parentheses and returns true if
the parenthesis are properly matched and false otherwise

Parenthesis are properly matched if
- Every open has a corresponding close
- No close occurs before an open

You can think of this like a code syntax checker if that helps

## Examples
```
() -> return true
(string) -> return true
He went (himself) to the store (yesterday) -> return true
)  -> return false
(  -> return false
)(  -> return false
```

## Function definition
Fill in the function below:
``` javascript
function checkParen(input) { 

}

const EXAMPLES = [
  ['()', true],
  ['(string)', true],
  ['He went (himself) to the store (yesterday)', true],
  ['He went ((him)self) to the store (yesterday)', true],
  ['He went (himself)) to the store (yesterday))', false],
  ['(He) went himself) to the store ((yesterday)', false],
  [') ', false],
  ['( ', false],
  [')( ', false],
  ['()) ', false],
];

EXAMPLES.forEach((el, index) => {
  const passed = checkParen(el[0]) === el[1];
  console.log(`Example ${index + 1} ${passed ? 'passed' : 'failed'}`);
});
```
*/

//Ayana's Code for Question # 1:

let input = ['()','(string)','He went (himself) to the store (yesterday)', 'He went ((him)self) to the store (yesterday)', 'He went (himself)) to the store (yesterday))', ') ', '( ', ')( ', '()) '];

function checkParen(input) {
  for (let i=0; i < input.length; i++) {
    let result = input[i].search(/\(([^)]+).|\(\)/);
    console.log(result);
      if (result >= 0) {
        console.log('true');
      } else {
          console.log('false');
      }
  } 
}

checkParen(input);


