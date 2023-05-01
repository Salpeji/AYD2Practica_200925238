Create database pelicula;
use pelicula;

create table pelicula(
idPeli int primary key auto_increment,
nombre varchar(254),
aniolanzamiento varchar(254),
clasificacion varchar(254),
genero varchar(254),
brevedescripcion varchar(254)
)

drop table pelicula;

select * from pelicula;
select count(*) from pelicula;


select * from pelicula where pelicula.pelicula.idPeli =16;
delete from pelicula.pelicula
where pelicula.pelicula.idPeli = 2;

select * from pelicula;
update pelicula set aniolanzamiento = '2050' where idPeli = 15; 
update pelicula set genero = 'ciencia' where idPeli = 15;
update pelicula set genero = 'terror' where idPeli = 15;
