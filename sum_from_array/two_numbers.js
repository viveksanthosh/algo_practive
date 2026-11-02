const nums = [1, 5, 3, 7, 5, 2];
const target = 8;


const hash = nums.reduce((acc, n, index) => { acc[n] = true; return acc }, {});
const resultHash = {};
const result = nums.map(n => {
    const diff = target - n;
    if(!hash[diff]) return;
    const pair = [n, diff].sort();
    const pairKey = pair.join('-');

    if (!resultHash[pairKey]) {
        resultHash[pairKey] = true;
        return [n, diff];
    }


}).filter(d => !!d);


console.log(result);
