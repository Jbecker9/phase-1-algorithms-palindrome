
function isPalindrome(word) {
  const arrayString = word.split('')
  const reverseArray = arrayString.reverse()
  const reverseString = reverseArray.join('')

  if(word === reverseString){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  isPalindrome("abba")
  isPalindrome("racecar")
  isPalindrome("a")
  isPalindrome("robot")
  isPalindrome("ab")
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
