const dashboard = document.getElementById("dashboard");
const games = document.getElementById("games");
const perfil = document.getElementById("perfil");
const sair = document.getElementById("sair");

dashboard.addEventListener("click", () => {window.location = "./overview.html"})
games.addEventListener("click", () => {window.location = "./games.html"})
perfil.addEventListener("click", () => {window.location = "./perfil.html"})
sair.addEventListener("click", () => {
    limparSessao(); 
    window.location = "/login.html"; 
});