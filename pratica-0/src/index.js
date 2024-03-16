let modulo = require('./module.js');
const nome = "Daiane Dionisio de Lima - 1648";

saudacaoPersonalizada(nome);
modulo.saudacao();

function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "!");
}