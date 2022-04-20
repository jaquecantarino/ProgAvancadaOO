"use strict";
function cabeca(lista) {
    return lista[0];
}
function cauda(lista) {
    return lista[1];
}
function ehVazia(lista) {
    return lista == undefined;
}
function vazia() { return undefined; }
function constroi(cabeca, cauda) {
    return [cabeca, cauda];
}
// recebe inicio <= fim
// devolve uma lista com os numeros inicio, inicio+1, ..., end-1
function criaLista(inicio, fim) {
    return inicio == fim
        ? vazia()
        : constroi(inicio, criaLista(inicio + 1, fim));
}
function paraString(lista) {
    return ehVazia(lista)
        ? 'vazia'
        : `[${cabeca(lista)}, ${paraString(cauda(lista))}]`;
}
function map(lista, f) {
    return ehVazia(lista)
        ? vazia()
        : constroi(f(cabeca(lista)), map(cauda(lista), f));
}
function filter(lista, test) {
    if (ehVazia(lista))
        return vazia();
    const resto = filter(cauda(lista), test);
    if (test(cabeca(lista)))
        return constroi(cabeca(lista), resto);
    return resto;
}
function reduce(lista, op, inicial) {
    return ehVazia(lista)
        ? inicial
        : reduce(cauda(lista), op, op(inicial, cabeca(lista)));
}
const strs = constroi('maria', constroi('joana', constroi('amanda', undefined)));
const comps = map(strs, s => s.length);
console.log(comps);
/*const lista = cria_lista(2, 6);
const outra = cria_lista(10, 20);
const ll = constroi(lista, constroi(outra, undefined));
console.log(cabeca(ll));
console.log(para_string(lista));
const nomes = constroi('maria', constroi('joana', undefined));
console.log(para_string(nomes));*/
const ns = constroi(2, constroi(4, constroi(3, vazia())));
console.log(paraString(filter(ns, x => x > 2)));
console.log(reduce(ns, (acc, x) => acc + x, 0));
