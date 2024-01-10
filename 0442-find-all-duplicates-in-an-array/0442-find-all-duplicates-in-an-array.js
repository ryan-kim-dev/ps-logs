/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    let answer = [];

   for (let i = 0; i <= nums.length; i++) {
       let idx = Math.abs(nums[i]) - 1;
       let val = nums[idx];

       if (val < 0) {
           answer.push(Math.abs(nums[i]));
       } else {
           nums[idx] = -nums[idx];
       }
   }

    return answer;
};