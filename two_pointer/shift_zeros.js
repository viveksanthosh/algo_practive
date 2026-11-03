const nums = [0, 12, 0, 3, 1];


const logger = (...a) => console.log(...a)

let nonZeroPointer = -1;
let zeroPointer = -1;
  console.log( nums.join(' | '));
for (let runner = 0; runner < nums.length; runner++) {
        logger('zeroPointer', zeroPointer, 'nonZeroPointer', nonZeroPointer, 'runner', runner)

    if (nums[runner] === 0) {
        zeroPointer = runner;
    } else {
        nonZeroPointer = runner;
    }
    if(nonZeroPointer > zeroPointer){
        let temp = nums[nonZeroPointer];
         nums[nonZeroPointer] =  nums[zeroPointer];
         nums[zeroPointer] = temp;

         let tempPointer = zeroPointer;
         zeroPointer = nonZeroPointer;
         nonZeroPointer = tempPointer;
        runner = 0;
         console.log( nums.join(' | '));
         
    }
}
