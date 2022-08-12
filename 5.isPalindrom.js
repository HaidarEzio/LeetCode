var isPalindrome = function (s) {
  //* turn into regEx
  let string = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) return false;
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("race a car"));
