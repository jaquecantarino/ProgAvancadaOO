type Vazia = undefined;
type NaoVazia<A> = [A, Lista<A>];
type Lista<A> = NaoVazia<A> | Vazia;

function cabeca<A>(lista: NaoVazia<A>): A {
    return lista[0];
}

function cauda<A>(lista: NaoVazia<A>): Lista<A> {
    return lista[1];
}

function ehVazia<A>(lista: Lista<A>): lista is Vazia {
    return lista == undefined;
}

function vazia(): Vazia { return undefined; }

function constroi<A>(cabeca: A, cauda: Lista<A>): NaoVazia<A> {
    return [cabeca, cauda];
}

// recebe inicio <= fim
// devolve uma lista com os numeros inicio, inicio+1, ..., end-1
function criaLista(inicio: number, fim: number): Lista<number> {
    return inicio == fim
           ? vazia()
           : constroi(inicio, criaLista(inicio+1, fim));
}

function paraString<A>(lista: Lista<A>): string {
    return ehVazia(lista) 
           ? 'vazia'
           : `[${cabeca(lista)}, ${paraString(cauda(lista))}]`
}


function map<A, B>(lista: Lista<A>, f: (a: A) => B): Lista<B> {
    return ehVazia(lista)
           ? vazia()
           : constroi(f(cabeca(lista)), map(cauda(lista), f));
}

function filter<A>(lista: Lista<A>,
                   test: (a: A) => boolean): Lista<A> {
    if (ehVazia(lista)) return vazia();
    const resto = filter(cauda(lista), test);
    if (test(cabeca(lista))) 
        return constroi(cabeca(lista), resto);
    return resto;
}

function reduce<A, B>(lista: Lista<A>, 
                      op: (acc: B, a: A) => B, 
                      inicial: B): B {
    return ehVazia(lista)
           ? inicial  
           : reduce(cauda(lista), op, op(inicial, cabeca(lista)));
}

const strs = constroi('maria', constroi('joana', constroi('amanda', undefined)))
const comps = map(strs, s => s.length);
console.log(comps);

/*const lista = cria_lista(2, 6);
const outra = cria_lista(10, 20);
const ll = constroi(lista, constroi(outra, undefined));
console.log(cabeca(ll));
console.log(para_string(lista));
const nomes = constroi('maria', constroi('joana', undefined));
console.log(para_string(nomes));*/

const ns = constroi(2, constroi(4, 
                    constroi(3, vazia())));
console.log(paraString(filter(ns, x => x > 2)));
console.log(reduce(ns, (acc, x) => acc + x, 0));