import { expect, test } from "bun:test";
import { isAnagram } from "./reference";

test("returns true when the two strings are anagrams", () => {
  const s = "anagram";
  const t = "nagaram";

  expect(isAnagram(s, t)).toBe(true);
});

test("returns false when the two strings are not anagrams", () => {
  const s = "rat";
  const t = "car";

  expect(isAnagram(s, t)).toBe(false);
});

test("returns true with multiple repeating letters", () => {
  const s = "aacc";
  const t = "ccac";

  expect(isAnagram(s, t)).toBe(false);
});

test("returns false when string length is not the same in both inputs", () => {
  const s = "hello";
  const t = "stranger";

  expect(isAnagram(s, t)).toBe(false);
});
