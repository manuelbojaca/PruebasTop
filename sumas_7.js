var twoSum = function(nums, target) {
    let ans = [];
    let miss, i = 0;
    for (let num of nums){
        miss = target - num;
        console.log(miss);
        if (ans.includes(miss)){
            return [nums.findIndex(element => element === miss), i];
        }
        ans.push(num);
        i++;
    }
    
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
console.log(twoSum([3, 2, 4], 5)); //[0, 1]
console.log(twoSum([3, 3], 6)); //[0, 1]
