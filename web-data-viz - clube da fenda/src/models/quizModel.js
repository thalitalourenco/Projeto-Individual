var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT MAX(pontuacao) FROM partida WHERE idJogo = 1 AND idUser = ${idUserServer};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUserServer, pontuacaoQuizServer) {
    
    var instrucao = `
        INSERT INTO partida (idPartida, idUser, idJogo, pontuacao) VALUES (default,'${idUserServer}', 1 ,'${pontuacaoQuizServer}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};