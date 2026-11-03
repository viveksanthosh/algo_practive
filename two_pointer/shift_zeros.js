


const logger = (...a) => console.log(...a)



function swapNumbers(nums, zeroIndex, numberIndex) {
    const temp = nums[zeroIndex];
    nums[zeroIndex] = nums[numberIndex];
    nums[numberIndex] = temp;
    return nums
}



function reArrange(nums) {

    let firstZeroIndex = nums.findIndex(n => n === 0)


    if (firstZeroIndex === -1)
        return nums;

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        console.log('firstZeroIndex', firstZeroIndex, 'i', i);

        if(i < firstZeroIndex){
            console.log('here');
            
        }
        if (n === 0)
            continue;

        console.log(nums.join(' | '));
        

        if (firstZeroIndex < i) {
            console.log('swap');
            
            swapNumbers(nums, firstZeroIndex, i);
            firstZeroIndex = nums.findIndex(n => n === 0)
        }

    }
    return nums;
}

console.log(reArrange([0, 12, 0, 3, 1]));
//console.log(reArrange([1, 2, 0]));

