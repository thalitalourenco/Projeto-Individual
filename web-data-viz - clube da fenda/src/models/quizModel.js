var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT pontuacao FROM partida;
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