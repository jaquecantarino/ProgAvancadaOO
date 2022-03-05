// função que devolve uma função:

function contador(inicial: number): () => number { // não recebe nada e devolve um número
    return () => inicial++; 
}

const c1 = contador(10);
const c2 = contador(5);
log(c1());
log(c2());
log(c1());
log(c2());

//const c1 = contador(10)
//c1 é uma função que possui que contem uma varivel cujo valor inicialmente é 10