// Brute force solution, looking at all the posible permutation of elements
// in the array until we found the two element that amount to the target value
// this solution has O(n^2) time complexity
//
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i <= j) {
//         continue;
//       }
//
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//
//   return [0, 0];
// }

function twoSum(nums: number[], target: number): number[] | null {
  const visitedMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    const otherIdx = visitedMap.get(diff);

    if (otherIdx !== undefined) {
      return [otherIdx, i];
    }

    visitedMap.set(nums[i], i);
  }

  return null;
}

export { twoSum };
