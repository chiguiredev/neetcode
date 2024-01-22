import { expect, test } from "bun:test";
import { containsDuplicate } from "./reference";

test("should return true when elements in the array are duplicated", () => {
  const first = [1, 2, 3, 1];
  const second = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

  expect(containsDuplicate(first)).toBe(true);
  expect(containsDuplicate(second)).toBe(true);
});

test("should return false when elements in the array are not duplicated", () => {
  const input = [1, 2, 3, 4];
  expect(containsDuplicate(input)).toBe(false);
});
