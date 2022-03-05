"use strict";
//Arrow functions
console.log(((x) => x * x)(5)); //lambda - define uma função que não tem nome.
const sq = (x) => x * x;
console.log(((x) => -x)(5));
function maximo2(x, y) {
    return x >= y ? x : y;
}
const maximo = (xs) => {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (x > cand)
            cand = x;
    return cand;
};
console.log(maximo([1, 3, 4, 5, 9]));
