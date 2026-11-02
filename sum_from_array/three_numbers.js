const nums = [1, 2, 3, 4, 5], target = 9;


const sumsHash = {};

nums.forEach((n1, index1) => {

    nums.forEach((n2, index2) => {

        if (index1 === index2) return;
        if (!sumsHash[n1 + n2])
            sumsHash[n1 + n2] = [{ n1, n2, index1, index2 }]
        else {
            sumsHash[n1 + n2].push({ n1, n2, index1, index2 })
        }

    })
})

const resultHash = {}

const result = nums.map((n, index) => {
    const diff = target - n;
    const sumHash = sumsHash[diff];

    if (!sumHash)
        return


    for (const s of sumHash) {
        console.log(s);

        if (index !== s.index1 && index !== s.index2)
            return [n, s.n1, s.n2];
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
