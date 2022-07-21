/*Atividade 1: Alunos Aprovados

    Crie uma função que recebe o array alunos e um número que irá representar a média final;
    Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
    Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/
const alunos = [{
    nome: 'Jade',
    nota: 9,
    turma: '288a',
} {
    nome: 'Alice',
    nota: 7,
    turma: '288b',
} {
    nome: 'Alisson',
    nota: 10,
    turma: '199a',
} {
    nome: 'Patricia',
    nota: 3,
    turma: '199a',
}]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0 < arr.length; i++) {

        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}