//Arrow functions

console.log(((x:number) => x*x)(5)); //lambda - define uma função que não tem nome.

const sq = (x: number) => x*x;
console.log(((x:number)=>-x)(5));


function maximo2(x: number, y: number){
    return x >= y ? x : y;
}

const maximo = (xs: number[])=>{
    if(xs.length == 0) return undefined;
    let cand = xs[0];
    for (const x of xs)
        if (x > cand) cand = x;
    return cand;
}

console.log(maximo([1,3,4,5,9]));