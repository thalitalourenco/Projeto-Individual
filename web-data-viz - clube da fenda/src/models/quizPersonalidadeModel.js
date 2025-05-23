var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT personagem FROM partida;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUserServer, personagemQuizServer) {
    
    var instrucao = `
        INSERT INTO partida (idPartida, idUser, idJogo, personagem) VALUES (default,'${idUserServer}', 2 ,'${personagemQuizServer}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};