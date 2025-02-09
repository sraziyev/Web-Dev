//Create a script that prompts the visitor to enter two numbers and then shows their sum.

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

// According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

// For instance:

alert( 1.35.toFixed(1) ); // 1.4
// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert( 6.35.toFixed(1) ); // 6.3
// How to round 6.35 the right way?


//Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);


//This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}


//The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );


//Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }