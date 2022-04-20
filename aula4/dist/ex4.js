"use strict";
const alunoNota = [['ana', 10], ['maria', 8], ['jose', 9],
    ['marcio', 4]];
console.log(alunoNota.filter(d => d[1] >= 5));
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
/* console.log(nums.map(x => x+ 1)
                .map(x => x*x));
    cuidado: é gerada uma lista intermediaria
    desnecessaria
*/
console.log(nums.reduce((acc, x) => acc + x, 200));
const ss = ['maria', 'joana', 'vanessa'];
console.log(ss.reduce((acc, s) => acc + s.length, 0));
