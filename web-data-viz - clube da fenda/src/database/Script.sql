create database clube_da_fenda;

use clube_da_fenda;

show tables;

create table usuarios(
id int primary key auto_increment,
nome varchar(45),
email varchar(100),
telefone char(11),
senha varchar(50),
data_cadastro datetime default current_timestamp
);

create table partidas(
id int primary key auto_increment,
user_id int,
pontuacao int,
data_partida datetime default current_timestamp,
resultado varchar(20),
constraint resultado_partida 
    check (resultado in ('Vitória', 'Derrota')),
constraint fkUserPartida
    foreign key (user_id)
    references user(id)
);

create table estatisticas(
id int primary key auto_increment,
user_id int,
total_partidas int,
media_pontuacao float,
melhor_pontuacao int,
data_ultima_partida datetime,
constraint fkUserEstatisticas
    foreign key (user_id)
    references user(id)
);