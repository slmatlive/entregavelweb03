# Semana 03 - Introdução ao JavaScript

## Sobre a atividade

Nesta atividade eu fiz os exercícios de JavaScript separados em três blocos. Usei `console.log()` para mostrar os resultados e deixei comentários perto de cada exercício para facilitar o entendimento.

## Arquivos

- `app.js`: é o arquivo principal, com todos os exercícios.
- `index.html`: permite executar o JavaScript no navegador.
- `exemplo_saida.txt`: mostra um exemplo do que aparece no console.

## Como executar

**Opção 1 - VS Code com Node.js**

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal.
3. Digite:

```bash
node app.js
```

**Opção 2 - Navegador**

1. Abra o arquivo `index.html` no navegador.
2. Aperte `F12` e entre na aba **Console**.
3. Veja os resultados de cada bloco.

## O que fiz em cada bloco

### Bloco 1 - Variáveis e tipos

Criei a variável `pontos`, somei mais 10 e mostrei o resultado. Depois tentei mudar a constante `MAX_PONTOS`, mas isso gera `TypeError` porque uma constante não pode ser reatribuída. Também testei os tipos com `typeof` e escrevi uma frase usando template literal e concatenação.

Um detalhe que percebi: `typeof null` retorna `object`, mesmo que `null` seja um valor primitivo. Isso é um comportamento antigo do JavaScript.

### Bloco 2 - Funções

Criei uma função para verificar a maioridade. Quando a função é declarada com `function`, ela funciona mesmo se eu chamar antes da declaração. Quando guardo a função em `const`, tentar chamar antes gera `ReferenceError`, porque ainda não foi inicializada. Depois fiz a função `dobro` em três formatos e testei um parâmetro padrão.

### Bloco 3 - Controle de fluxo

Usei `if/else` para classificar notas, `switch` para o semáforo e para os dias da semana, `for` para a tabuada e para pares e ímpares, e `while` para a contagem regressiva e a outra lista de pares e ímpares.

Na função `diaDaSemana`, escolhi **1 para segunda-feira** e **7 para domingo**.
