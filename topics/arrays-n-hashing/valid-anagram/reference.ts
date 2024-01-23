// Sorting solution

// function isAnagram(s: string, t: string): boolean {
//   return (
//     Array.from(s)
//       .sort((a, b) => {
//         return a.charCodeAt(0) - b.charCodeAt(0);
//       })
//       .join("") ===
//     Array.from(t)
//       .sort((a, b) => {
//         return a.charCodeAt(0) - b.charCodeAt(0);
//       })
//       .join("")
//   );
// }

// Elimination solution

// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;
//
//   let first: Array<string | null> = s.split("");
//   const second = t.split("");
//
//   for (let i = 0; i < second.length; i++) {
//     const current = second[i];
//
//     let found = first.indexOf(current);
//
//     if (found >= 0) {
//       first[found] = null;
//     } else {
//       return false;
//     }
//   }
//
//   return true;
// }

// hash table solution

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    if (sMap.has(sChar)) {
      sMap.set(sChar, sMap.get(sChar) + 1);
    } else {
      sMap.set(sChar, 1);
    }

    const tChar = t[i];
    if (tMap.has(tChar)) {
      tMap.set(tChar, tMap.get(tChar) + 1);
    } else {
      tMap.set(tChar, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (sMap.get(char) !== tMap.get(char)) return false;
  }

  return true;
}

export { isAnagram };
