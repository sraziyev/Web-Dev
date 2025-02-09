// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

//Will the function work differently if else is removed?

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

//no difference


// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
// Rewrite it, to perform the same, but without if, in a single line.


//Using a question mark operator '?':

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

//Using OR || (the shortest variant):

  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }


//Write a function min(a,b) which returns the least of two numbers a and b.

//A solution using if:

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

//A solution with a question mark operator '?':

function min(a, b) {
    return a < b ? a : b;
  }


//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
  