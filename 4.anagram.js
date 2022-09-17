/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//* iterable solution
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {
    //* is s[i] = a in sMap ?
    if (sMap.hasOwnProperty(s[i])) {
      //* give it +1
      sMap[s[i]]++;
    } else {
      sMap[s[i]] = 1;
    }
    if (tMap.hasOwnProperty(t[i])) {
      tMap[t[i]]++;
    } else {
      tMap[t[i]] = 1;
    }
  }
  //* in here we check if the number of times a letter appears in sMap is the same as in tMap
  for (let k in sMap) {
    console.log(sMap[k], tMap[k]);
    if (sMap[k] !== tMap[k]) {
      return false;
    }
  }

  return true;
};
//* easy solution
var isAnagrams = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sortedS = [...s].sort().join("").toString();
  let sortedT = [...t].sort().join("").toString();

  if (sortedS !== sortedT) {
    return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
