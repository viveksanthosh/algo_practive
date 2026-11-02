const nums = [1, 5, 3, 7, 5, 2];
const target = 8;


const hash = nums.reduce((acc, n) => { acc[n] = { used: false }; return acc }, {});

const result = nums.map(n => {
    if (hash[n]?.used) return;
    const diff = target - n;

    if (hash[diff] && !hash[diff].used) {
        console.log(diff);

        hash[diff].used = true;
        return [n, diff];
    }
}).filter(d => !!d);


console.log(result);
