// Semana 03 - Introdução ao JavaScript
// Atividade dividida em três blocos para ficar mais fácil de acompanhar.

console.log("===== BLOCO 1: VARIÁVEIS E TIPOS =====");

// 1. Comecei com 20 pontos e depois acrescentei mais 10.
let pontos = 20;
pontos += 10;
console.log(`Pontos depois de somar 10: ${pontos}`);

// 2. Uma constante não pode receber outro valor.
const MAX_PONTOS = 100;
console.log(`Máximo de pontos: ${MAX_PONTOS}`);
try {
  MAX_PONTOS = 150;
} catch (erro) {
  console.log(`Erro esperado ao mudar a constante: ${erro.name}`);
  console.log("Motivo: não podemos mudar o valor de uma const.");
}

// 3. Exemplos dos tipos de dados primitivos pedidos na atividade.
const nomeAluno = "Maria";
const idadeAluno = 19;
const estaMatriculado = true;
let cursoEscolhido;
const dataCancelamento = null;

console.log(`string: ${typeof nomeAluno}`);
console.log(`number: ${typeof idadeAluno}`);
console.log(`boolean: ${typeof estaMatriculado}`);
console.log(`undefined: ${typeof cursoEscolhido}`);
console.log(`null: ${typeof dataCancelamento}`);
// O JavaScript mostra "object" para null. É um comportamento antigo da linguagem.

// 4. Montei a mesma frase de duas maneiras.
const cidade = "São Luís";
const curso = "JavaScript";
const fraseTemplate = `Estou estudando ${curso} em ${cidade}.`;
const fraseConcatenada = "Estou estudando " + curso + " em " + cidade + ".";
console.log(`Com template literal: ${fraseTemplate}`);
console.log(`Com concatenação: ${fraseConcatenada}`);

console.log("\n===== BLOCO 2: FUNÇÕES =====");

// 5. A função declarada pode ser chamada antes de aparecer no código.
console.log(`Maior de idade (função declarada): ${ehMaiorDeIdade(20)}`);

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 6. Já uma função guardada em const não pode ser chamada antes da declaração.
try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log(`Erro esperado na função de expressão: ${erro.name}`);
  console.log("Motivo: a função ainda não foi inicializada nesse ponto.");
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};
console.log(`Maior de idade (função de expressão): ${ehMaiorDeIdadeExpressao(16)}`);

// 7. Fiz a função dobro nos três formatos que aprendemos.
function dobro(numero) {
  return numero * 2;
}

const dobroExpressao = function (numero) {
  return numero * 2;
};

const dobroArrow = numero => numero * 2;

console.log(`Dobro com declaração: ${dobro(5)}`);
console.log(`Dobro com expressão: ${dobroExpressao(5)}`);
console.log(`Dobro com arrow function: ${dobroArrow(5)}`);

// 8. Se eu não informar o número, o valor padrão será 1.
function dobroComPadrao(numero = 1) {
  return numero * 2;
}
console.log(`Dobro sem informar argumento: ${dobroComPadrao()}`);

console.log("\n===== BLOCO 3: CONTROLE DE FLUXO =====");

// 9. A nota 6 ou maior é considerada aprovada.
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log(`Nota 7: ${classificarNota(7)}`);
console.log(`Nota 4: ${classificarNota(4)}`);

// 10. O switch escolhe a mensagem pela cor do semáforo.
const corSemaforo = "amarelo";
switch (corSemaforo) {
  case "vermelho":
    console.log("Semáforo: Pare");
    break;
  case "amarelo":
    console.log("Semáforo: Atenção");
    break;
  case "verde":
    console.log("Semáforo: Siga");
    break;
  default:
    console.log("Cor de semáforo inválida");
}

// 11. Tabuada do 5 usando for.
console.log("\nTabuada do 5:");
for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
  console.log(`5 x ${multiplicador} = ${5 * multiplicador}`);
}

// 12. Contagem regressiva usando while.
console.log("\nContagem regressiva:");
let contagem = 5;
while (contagem >= 1) {
  console.log(contagem);
  contagem--;
}

// 13. Verifiquei pares e ímpares de 1 até 20 com for.
console.log("\nPares e ímpares com for:");
for (let numero = 1; numero <= 20; numero++) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
}

// 14. Fiz a mesma verificação com while.
console.log("\nPares e ímpares com while:");
let numeroWhile = 1;
while (numeroWhile <= 20) {
  if (numeroWhile % 2 === 0) {
    console.log(`${numeroWhile} é par`);
  } else {
    console.log(`${numeroWhile} é ímpar`);
  }
  numeroWhile++;
}

// 15. Nessa função, 1 é segunda-feira e 7 é domingo.
function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return "Número inválido";
  }
}
console.log(`Dia 3: ${diaDaSemana(3)}`);
console.log(`Dia 9: ${diaDaSemana(9)}`);

console.log("\nFim da atividade da Semana 03.");
