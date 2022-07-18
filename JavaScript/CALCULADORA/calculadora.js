//
//
//Função principal
function calculadora() {
    //Declaração de variáveis e constantes
    const operacao = prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtracao(-)\n 3 - multiplicacao (*)\n 4 - divisao real (/)\n 5 - divisao inteira (%)\n 6 - potenciação (**) ');

    //verificar se as operações são válidas
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida');
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o primeir valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        //verificar variáveis
        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos')
            calculadora();
        } else {

            //Funções pra mostrar o resultado em tela
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            function potencializacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            //Criar nova operação quando encerrar a anterior
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais')
                } else {
                    alert('Digite uma opção válida!')
                    novaOperacao();
                }
            }
        }
        //Cálculos

        if (operacao == 1) {
            soma();
        } else
        if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potencializacao();
        }

        /*         switch (operacao) {
                    case 1:
                        soma();
                        break;
                    case 2:
                        subtracao();
                        break;
                    case 3:
                        multiplicacao();
                        break;
                    case 4:
                        divisaoReal();
                        break;
                    case 5:
                        divisaoInteira();
                        break;
                    case 6:
                        potencializacao();
                        break;
                } */
    }
}
calculadora();