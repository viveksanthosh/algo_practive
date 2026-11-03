const nums = [0,0,1,1,1,2,2,3,3,4]

let currentNumber = nums[0], currentNumberIndex = 0, setIndex = 0;


function swapNumbers(nums, index1, index2) {
    console.log('index1', index1, 'index2', index2);
    
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
    return nums
}

let k = 0;

for(let i = 1; i < nums.length; i++){
    console.log('---------------');
    console.log('i ', i);
    
    console.log(nums.join(' | '));
    console.log( nums[i] + ' - ' + currentNumber)
    
    if(nums[i] === currentNumber || nums[i]<nums[i-1])
        {
            console.log('skip');
            
            continue;
        }
    console.log('swap');
    swapNumbers(nums, ++setIndex, i);
    currentNumber = nums[setIndex];
    currentNumberIndex = i;
    
}

    console.log(nums.join(' | '));
    console.log('k', setIndex + 1);
    
