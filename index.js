function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split("");
  let reversearray = array.reverse();
  let palindrome = reversearray.join("");
  if (word === palindrome) {
    return true;
  } else {
    return false;
  }
}
/* 
  Add your pseudocode here
*/
//declare a variable,asigning it  to the word argument/paramater and use split method 
//reverse the word we split earlier
//join the word we reversed earlier
// compare our word argument to the  word we reversed and joined
    //return true if the word is same
//else  
  //return false is they have a comprison
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;



