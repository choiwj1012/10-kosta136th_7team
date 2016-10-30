create database articledb;

use articledb;

drop table articles;
drop table users;

create table users (

	userNum int auto_increment primary key,
	id varchar(50) unique,
	password varchar(50) not null,
	name varchar(50) not null,
	cellphone varchar(50) unique

);


create table articles (

	num int auto_increment primary key,
	title varchar(50) not null,
	content varchar(300) not null,
	writer varchar(50) not null,
	readCount int not null default 0,
	userNum int,
	foreign key(userNum) references users(userNum)
    
);

insert into users values(1, 1, 1, 1, 1);
insert into articles values(1, '1', '1', '1', 1, 1);

select * from articles;
select * from users;

show tables;


