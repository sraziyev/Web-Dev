// Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
// What do you think, will it work? What will be shown?

// Depending on whether you have use strict or not, the result may be:

// undefined (no strict mode)
// An error (strict mode).

