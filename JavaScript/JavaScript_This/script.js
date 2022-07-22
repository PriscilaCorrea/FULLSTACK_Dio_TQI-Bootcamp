/*Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!*/
//https://github.com/stebsnusch/basecamp-javascript/tree/main/funcoes
//
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Mariana',
    idade: 30,
};

const pessoa2 = {
    nome: 'Jane',
    idade: 19,
};

const animal1 = {
    nome: 'Nina',
    idade: 5,
    raca: 'SRD',
};

//CALL
/* console.log(calculaIdade.call(animal1, 3)); */
//APPLY
console.log(calculaIdade.apply(pessoa1, [3]));