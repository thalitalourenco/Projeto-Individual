var database = require("../database/config");

function listarQuiz(idUserServer) {
    console.log("Acessei o listarQuiz no Model, idUserServer:", idUserServer);

    if (!idUserServer) {
        console.error("ID do usuário não foi fornecido!");
        return Promise.reject("ID do usuário indefinido.");
    }

    var instrucaoSql = `
        SELECT MAX(pontuacao) AS pontuacao 
        FROM partida 
        WHERE idJogo = 1 AND idUser = ${idUserServer};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQuizPersonalidade(idUserServer) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT personagem FROM partida WHERE idJogo = 2 AND idUser = ${idUserServer};
 `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarCruzadinha(idUserServer) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT MIN(tempo) FROM partida WHERE idJogo = 3 AND idUser = ${idUserServer};
 `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPontuacaoGaryDoodle(idUserServer) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT MAX(pontuacao) as pontuacaoGary FROM partida WHERE idJogo = 4 AND idUser = ${idUserServer};
 `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalJogadores() {
    console.log("ACESSEI O AVISO MODEL PARA TOTAL DE JOGADORES");
    var instrucaoSql = `
        SELECT COUNT(DISTINCT fkUsuario) as totalJogadores FROM pontuacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listarQuiz,
    listarQuizPersonalidade,
    listarCruzadinha,
    listarPontuacaoGaryDoodle,
    totalJogadores,

}