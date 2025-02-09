//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") ); 


//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );


//   Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

//   The result of the function should be the truncated (if needed) string.
  
//   For instance:
  
  truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
  
  truncate("Hi everyone!", 20) == "Hi everyone!