/* * This solution has a logaritmic time complexity of O(n)
 * and a space complexity of O(n)
 *
 * Other solutions:
 *  - sort the array and check if the next element is the same as the current O(nlogn)
 *  - loop through the array and check if the current element is in the rest of the array O(n^2)
 * */
function containsDuplicate(nums: number[]): boolean {
  const duplicateMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (duplicateMap.has(nums[i])) {
      return true;
    }

    duplicateMap.set(nums[i], 1);
  }

  return false;
}

export { containsDuplicate };
