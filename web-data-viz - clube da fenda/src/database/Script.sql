create database clube_da_fenda;

use clube_da_fenda;

create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(100) unique,
telefone char(15),
senha varchar(50),
data_cadastro datetime default current_timestamp
);

create table jogo(
id int primary key auto_increment,
nome varchar(45)
);

create table partida(
idPartida int auto_increment,
idUser int,
idJogo int,
pontuacao int,
tempo int,
personagem varchar(45),
data_partida datetime default current_timestamp,
primary key(idPartida, idUser, idJogo),
constraint fkUser
    foreign key (idUser)
    references usuario(id),
constraint fkJogo
    foreign key (idJogo)
    references jogo(id)
);

insert into jogo values
(default, 'Quiz'),
(default, 'Quiz de Personalidade'),
(default, 'Cruzadinha'),
(default, 'Gary Doodle'); 

select * from usuario;

create view rankingPersonagens as
select 
    personagem, 
    count(*) as quantidade
from 
    partida
where 
    personagem is not null and personagem <> ''
group by 
    personagem
order by 
    quantidade desc;
    
create view rankingUsuarios as
select 
    u.nome,
    count(p.idPartida) as quantidadePartidas
from 
    usuario u
left join 
    partida p ON u.id = p.idUser
group by 
    u.id, u.nome
order by 
    quantidadePartidas desc
limit 5;

alter view rankingUsuarios as 
select 
    u.nome,
    count(p.idPartida) as quantidadePartidas
from 
    usuario u
left join 
    partida p ON u.id = p.idUser
group by 
    u.id, u.nome
order by 
    quantidadePartidas desc
limit 3;

select nome from rankingUsuarios;
    
select personagem, quantidade from rankingPersonagens;