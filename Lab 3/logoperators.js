// What is the code below going to output?

alert( null || 2 || undefined ); //2

// What will the code below output?

alert( alert(1) || 2 || alert(3) );// 1 then 2


// What is this code going to show?

alert( 1 && null && 2 ); // null

//What will this code show?

alert( alert(1) && alert(2) );// 1 then undefined


//What will the result be?

alert( null || 2 && 3 || 4 );//3


//Write an if condition to check that age is between 14 and 90 inclusively.

if (age >= 14 && age <= 90)


// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

