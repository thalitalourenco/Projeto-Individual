var database = require("../database/config");

function listarQuiz(idUserServer) {
    console.log("Acessei o listarQuiz no Model, idUserServer:", idUserServer);

    if (!idUserServer) {
        console.error("ID do usuário não foi fornecido!");
        return Promise.reject("ID do usuário indefinido.");
    }

    var instrucaoSql = `
        SELECT MAX(pontuacao) AS pontuacaoQuiz 
        FROM partida 
        WHERE idJogo = 1 AND idUser = ${idUserServer};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQuizPersonalidade(idUserServer) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT personagem FROM partida WHERE idJogo = 2 AND idUser = ${idUserServer} ORDER BY data_partida DESC LIMIT 1;
 `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarCruzadinha(idUserServer) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `SELECT MIN(tempo) as tempoCruzadinha FROM partida WHERE idJogo = 3 AND idUser = ${idUserServer};
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

function jogosMaisJogados(idUserServer) {
    console.log("ACESSEI O AVISO MODEL PARA JOGOS MAIS JOGADOS");
    var instrucaoSql = `
    SELECT idJogo, COUNT(idPartida) as quantidade
    FROM partida
    WHERE idUser = ${idUserServer}
    GROUP BY idJogo;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function personagensPartidas() {
    console.log("ACESSEI O AVISO MODEL PARA JOGOS MAIS JOGADOS");
    var instrucaoSql = `
    SELECT personagem, quantidade FROM rankingPersonagens;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarRanking() {
    console.log("ACESSEI O AVISO MODEL PARA JOGOS MAIS JOGADOS");
    var instrucaoSql = `
    SELECT nome FROM rankingUsuarios;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listarQuiz,
    listarQuizPersonalidade,
    listarCruzadinha,
    listarPontuacaoGaryDoodle,
    jogosMaisJogados,
    personagensPartidas,
    listarRanking
}