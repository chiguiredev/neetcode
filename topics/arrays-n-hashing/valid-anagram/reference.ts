function isAnagram(s: string, t: string): boolean {
  // This solution works but it is O(n^3) I believe
  //
  // return (
  //   Array.from(s)
  //     .sort((a, b) => {
  //       return a.charCodeAt(0) - b.charCodeAt(0);
  //     })
  //     .join("") ===
  //   Array.from(t)
  //     .sort((a, b) => {
  //       return a.charCodeAt(0) - b.charCodeAt(0);
  //     })
  //     .join("")
  // );

  if (s.length !== t.length) return false;

  let first: Array<string | null> = s.split("");
  const second = t.split("");

  for (let i = 0; i < second.length; i++) {
    const current = second[i];

    let found = first.indexOf(current);

    if (found >= 0) {
      first[found] = null;
    } else {
      return false;
    }
  }

  return true;
}

export { isAnagram };
