import { expect, it, describe } from "bun:test";
import { twoSum } from "./reference";

describe("twoSum test suite", () => {
  it("returns the positions of the two numbers that meet the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(nums, target);

    if (result !== null) {
      const [firstIdx, secondIdx] = result;
      expect(nums[firstIdx] + nums[secondIdx]).toBe(target);
    }
  });

  it("returns the positions of the two numbers that meet the target", () => {
    const nums = [3, 2, 4];
    const target = 6;

    const result = twoSum(nums, target);

    if (result !== null) {
      const [firstIdx, secondIdx] = result;
      expect(nums[firstIdx] + nums[secondIdx]).toBe(target);
    }
  });

  it("returns the positions of the two numbers that meet the target", () => {
    const nums = [3, 3];
    const target = 6;

    const result = twoSum(nums, target);

    if (result !== null) {
      const [firstIdx, secondIdx] = result;
      expect(nums[firstIdx] + nums[secondIdx]).toBe(target);
    }
  });
});
