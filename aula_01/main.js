let nome = "joao";
let idade = 31;
let altura = 1.93;
let ja_sei_ts = true;
console.log("Tipo da variavel nome", typeof (nome));
console.warn("Tipo da variavel Idade", typeof (idade));
console.error(`Tipo da variavel altura ${typeof (altura)}`);
console.log(`%c tipo da variavel ja_sei_ts ${typeof (ja_sei_ts)}`, 'color:blue;');
let nome_completo;
nome_completo = "Joao carlos Cunha";
idade = 31;
let profissao;
profissao = "Auxiliar de talharia";
let preferencias = [];
preferencias.push("Bolo de cenoura");
preferencias.push("Lhama");
preferencias.push("Cacatua");
console.table(preferencias);
console.log(`tipo da variavel preferencias ${typeof (preferencias)}`);
console.log(`Meu nome é ${nome_completo} trabalho com ${profissao} gosto de ${preferencias.join()} `);
function procedimentos() {
}
function retorna10() {
    return 10;
}
console.log(`A funcao retornou ${retorna10()}`);
let retorno = retorna10();
console.log(`A variavel retorno aproveito a funcao e resulto em ${retorno}`);
function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}
console.log(`Ao somar 5 com 6 deu ${somar(5, 6)}`);
function subtrair(numeroA, numeroB) {
    return numeroA - numeroB;
}
let subtraido = subtrair(20, 5);
function ehPar(numero) {
    return numero % 2 == 0;
    // if (numero % 2 == 0) {
    //     return "Par"
    // } else {
    //     return "Impar"
    // }
    //return (numero%2==0)?"Par":"Impar"
}
function salvarNoLocalStorage(valor, chave) {
    localStorage.setItem(chave, valor);
}
function capturarValor() {
    return prompt(`Informe o valor de ${titulo}`);
}
