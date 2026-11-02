const nums = [1, 2, 3, 4, 5], target = 9;


const sumsHash = {}, plainHash = {};

nums.forEach((n1, index1) => {
    plainHash[n1] = true;
    nums.forEach((n2, index2) => {

        if (index1 === index2) return;

        sumsHash[n1 + n2] = { n1, n2, index1, index2 }
    })
})

const resultHash = {}

const result = nums.map((n, index) => {
    const diff = target - n;
    const sumHash = sumsHash[diff];

    if (plainHash[diff]) {
        return [n, diff];
    } else if (sumHash && index !== sumHash.index1 && index !== sumHash.index2) {
        return [n, sumsHash[diff].n1, sumsHash[diff].n2];
    }


}).filter(d => !!d)
    .map(r => {
        const key = r.sort().join('-');
        if (!resultHash[key]) {
            resultHash[key] = true;
            return r
        }
    })
    .filter(d => !!d);


console.log(result);
