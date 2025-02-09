//What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
} // 1

// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );
//From 1 to 4

// The postfix form i++

let i = 0;
while (i++ < 5) alert( i );
//From 1 to 5


// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?

// The postfix form:
for (let i = 0; i < 5; i++) alert( i );
// The prefix form:
for (let i = 0; i < 5; ++i) alert( i );
//from 0 to 4 in both cases.


//Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }


//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }


  let i = 0;
  while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }


//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
//Write the code which outputs prime numbers in the interval from 2 to n.

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}