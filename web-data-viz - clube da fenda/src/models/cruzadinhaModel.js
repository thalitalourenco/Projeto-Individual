var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT pontuacao FROM partida;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUserServer, tempoCruzadinhaServer) {
    
    var instrucao = `
        INSERT INTO partida (idPartida, idUser, idJogo, tempo) VALUES (default,'${idUserServer}', 3 ,'${tempoCruzadinhaServer}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};