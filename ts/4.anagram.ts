interface HashMap {
  [key: string]: number;
}

function Anagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let mapS: HashMap = {};
  let mapT: HashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (mapS.hasOwnProperty(s[i])) {
      mapS[s[i]]++;
    } else {
      mapS[s[i]] = 1;
    }
    if (mapT.hasOwnProperty(t[i])) {
      mapT[t[i]]++;
    } else {
      mapT[t[i]] = 1;
    }
  }

  for (let number in mapS) {
    if (mapS[number] !== mapT[number]) {
      return false;
    }
  }
  return true;
}
