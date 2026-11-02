
const logger = (...args) => {
    return;
    console.log(...args)
}



function customHash() {
    const SLEVE_COUNT = 8;


    const sleves = [];

    const hasher = key => key ? key.split('').reduce((acc, c, index) => acc + c.codePointAt(), 0) : 0;
    const getSleveIndex = key => {
        const hash = hasher(key);
        const sleveIndex = hash % SLEVE_COUNT;
        return sleveIndex;
    }


    const insert = (key, value) => {
        const sleveIndex = getSleveIndex(key)
        if (!sleves[sleveIndex]) {
            sleves[sleveIndex] = [[key, value]];
            logger(key, sleveIndex, JSON.stringify(sleves));
            return
        }

        const sleve = sleves[sleveIndex];
        const index = sleve.findIndex(([k]) => k === key)
        if (index === -1) {
            sleve.push([key, value])
        } else {
            sleve[index][1] = value;
        }

    }

    const get = (key) => {
        const sleveIndex = getSleveIndex(key)
        const sleve = sleves[sleveIndex];
        if (!sleve) return;
        const index = sleve.findIndex(([k]) => k === key);
        if(index === -1) return;
        return sleve[index][1];

    }

    return {
        insert,
        get
    }
}


const hash = customHash();
hash.insert('a', 1)
hash.insert('bddd', 2)

console.log(hash.get('a'))
console.log(hash.get('b'))
console.log(hash.get('bddd'))
