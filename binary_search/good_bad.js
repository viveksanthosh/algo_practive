//const array = ["good", "good", "good","good", "good", "good","good", "BAD", "BAD", "BAD"]
const array = ["BAD",'BAD']
let left = 0, right = array.length -1;

console.log('left', left, right, right);




while(left <= right){
   let mid = Math.round((left + right)/2);
   

   if(
    (array[mid] === "BAD" && mid === 0) ||
    (array[mid] === "BAD" && array[mid - 1] === 'good' )
    || (array[mid] === "good" && array[mid - 1] === 'BAD' ))
   { console.log('found at ', mid); break;}
   if(array[mid] === 'good')
        left = mid + 1;
    else 
    right = mid -1;
   
}
