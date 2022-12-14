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
function exemplo() {
}
