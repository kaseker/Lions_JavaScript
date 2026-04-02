import PromptSync from "prompt-sync"
const prompt = PromptSync()

let numero1
let numero2
let resultado
let opcao

console.log(`
[1]- somar
[2]- subtrair
[3]- dividir
[4]- multiplicar`);

opcao = parseInt (prompt ('digite a opção desejada: '))

switch (opcao) {
    case 1:
        adicao()
        console.log(resultado);
        break;
    case 2:
        subtracao()
        console.log(resultado);
        break;
    case 3:
        divisao ()
        console.log(resultado);
        break;
    case 4:
        multiplicacao ()
        console.log(resultado);
        break;

    default:
        console.log('digite uma opção válida');
        break;
}
