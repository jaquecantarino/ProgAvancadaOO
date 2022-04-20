type Aluno = [string, number];

function nome(aluno: Aluno) { return aluno[0]; }
function nota(aluno: Aluno) { return aluno[1]; }

function cria_aluno(nome: string, nota: number): Aluno {
    return [nome, nota];
}

function media(alunos: Aluno[]): number | undefined {
    if (alunos.length == 0) return undefined;
    let soma = 0;
    for (const aluno of alunos) {
        soma += nota(aluno);
    } 
    return soma/alunos.length;
}

const alunos: Aluno[] = [cria_aluno("Joao", 9),
                         cria_aluno("Maria", 10),
                         cria_aluno("Celso", 5),
                         cria_aluno("Joana", 6)];

console.log(media(alunos));

