"use strict";
//recebe xs: number [] tal que xs.length > 0
// devolve um elemento máximo de xs;
function max(xs) {
    let cand = xs[0]; //não declaramos o tipo de dado que cand é, mas a aplicação deduz já que o tipo de dado inputado é number.
    for (const x of xs) //const = significa que no bloco qual eu to definindo não tem valor definido, 
        //esse const só existe dentro desse bloco, significa que o valor é constante;
        //of= está apontando para os valores dentro do vetor, o oposto seria o in;
        if (x > cand) { //também funcionaria sem as chaves = if(x>cand) cand=x;
            cand = x;
        }
    return cand;
}
//****OVERRIDE */
function max0(xs) {
    if (xs.length == 0)
        return undefined; //aqui ele já define o retorno em casos de vetor vazio, já retorno o undefined.
    let cand = xs[0];
    for (const x of xs)
        if (x > cand) {
            cand = x;
        }
    return cand;
}
//****OVERRIDE */
/*function maxBy(xs: number[], key: (x:number) => number) : number | undefined {
    if (xs.length == 0 ) return undefined;
    let cand = xs[0];
    for (const x of xs)
    if (key(x) > key(cand)) cand =x;
    return cand;
}
// key: (x:number) => number === significa que key é uma função que recebe um number de devolve um number. Recebe uma função como parametro.
// ou seja, maxBy recebe a função key x ( key é uma palavra reservada )

function square(x: number): number { return x*x; }

console.log(maxBy([1, 4, 2, 3, 8, 5, 7], square))*/
//**********************************************************************/
//***************************EXERCICIO**********************************/
//**********************************************************************/
// Escreva uma função que recebe xs.string[] e uma função key(s.string)=>number e devolve undefined se xs é vazio, ou,
//caso contrario devolve uma string s de xs cuja a chave key é máxima. (quem tem a maior palavra)
//jeito 1:
function maxSt(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const s of xs)
        if (key(s) > key(cand))
            cand = s;
    return cand;
}
//???//
/*function square(x: number): number { return x*x; }

console.log(maxSt(["1","4","2","3","8","5","7"], square))*/
///???//
//jeito 2:
function maxSt2(xs, key) {
    if (xs.length == 0)
        return undefined;
    let cand = xs[0];
    for (const s of xs)
        if (key(s) > key(cand))
            cand = s;
    return cand;
}
//minimo
/*function minSt2<A>(xs: Array<A>, key: (s:A) => number) {
    function invKey(s: A) : number{
        return -key(s);
    }
     return minSt2(xs.invKey)
}

//function square2(x: number): number { return x*x; }
function len2(s: string): number {return s.length;} //avalia qual o tamanho da palavra.

//console.log(maxSt2([1, 4, 2, 3], square2))
console.log(maxSt2(["João", "Maria", "Bruna", "Ana", "Gustavo", "Jaqueline"],len2) //retorna qual palavra é maior.

//atribuir variaveis de tipo: <...>

//*****/
//quando você utiliza comandos de decisão podemos tomar decisões por tipos:
/*const r = max([2,4,1,8,3,5]);
if (r != undefined ) console.log(r +2); //typecasting em JAVA ( w3schools: conversão de tipo é quando você atribui um valor de um tipo de dados primitivo a outro tipo.)
// verifica a instancia de r e "converte", na mesma linha;*/
/*console.log(max([2,4,1,8,3,5]));
console.log(max([])); // vetor de tamanho 0 retorna undefined.
console.log(max([]) + 2); //ao tentar somar um int no vetor vazio o retorno é NaN.*/ 
