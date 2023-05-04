# DESCRIPCION DE MICROSERVICIOS 
Practica unica de ayd2_200925238 1er. semestre 2023 creacion de 3 endpoint, desarrollo de micro-servicios, CRUD,  /nombre, /carnet y validaciones.

# CAPTURAS DE LAS PRUEBAS DE ESTRÉS Y EXPLICACION DE CADA PRUEBA
Para esta parte tomamos la parte donde vemos las pelicuales siendo:
![image](https://user-images.githubusercontent.com/15185688/236240121-137f7990-650b-4ea9-bfbc-3361f09d06a7.png)
estos los parametros para la concurrencia.

![image](https://user-images.githubusercontent.com/15185688/236043771-10799258-e0b3-4ad9-be05-dddc6424e5b8.png)

Pruebas con una concurrencia de 10 y maximas peticiones de 500 regitros a una solictud de 5 seg.

![image](https://user-images.githubusercontent.com/15185688/236044541-24031106-847c-4469-936f-d2ff973af5e6.png)

Resumen en creacion de peliculas co una revolucion por segundo sobre 56.8%. De la misma forma
acontinuacions se observa el grafico sobre sus peticiones.

![image](https://user-images.githubusercontent.com/15185688/236045150-4fd14f51-8e0b-4725-a556-dc8d29427224.png)

Se efectuan ahora pruebas de estres para registos con una concurrencia sobre los 10 en un tiempo de 5 seg.
para una solicitud de 500 peticiones es decir request.

![image](https://user-images.githubusercontent.com/15185688/236047658-fe6d988e-f3f6-47de-84c6-88c085ccaf73.png)

Procediendo con la 2da prueba de estres podemos ver los parametros:
![image](https://user-images.githubusercontent.com/15185688/236241188-6f9ea150-37c7-46a0-b6a0-a952ad35359d.png)

Con esta parte tenemos las pruebas a nivel de grafico sobre las valiciones a aceptar pruebas de estres.
![image](https://user-images.githubusercontent.com/15185688/236047904-2de7ae89-996b-476d-8980-ece2859c0d5b.png)


Despues de correr con la 3era. prueba se procede a efectuar la 4ta con esta parte se tiene las peticiones solicitadas
por cada validacion asi mismo con la peticion de 500 peticiones sobre las valiciones indicadas.
![image](https://user-images.githubusercontent.com/15185688/236048522-53237e4b-8a11-456b-b5f1-79cb7ad7ae08.png)


En este apartado podemos apreciar las validaciones sobre locus corriendo por las peticiones solicitadas para cada parte.
![image](https://user-images.githubusercontent.com/15185688/236048718-62cc9051-45b0-44a0-88d0-3838573f228f.png)

Aca podemos apreciar la salida que genera genera el endpoint para el /nombre sobre el cual nos retorna un mensaje sobre el dato
principal de estudiante:

![image](https://user-images.githubusercontent.com/15185688/236049327-712db7dd-55e8-4efa-aedc-5155dd14fb86.png)

En esta otra parte se genera las pruebas sobre las peticiones para cada uno de ellos.
![image](https://user-images.githubusercontent.com/15185688/236049600-9171fd55-2587-4f28-8c59-bdc242e57cbe.png)



Para esta parte se genera el .GET 

![image](https://user-images.githubusercontent.com/15185688/236050469-a468674a-093b-4b0e-a931-9e590aea8f65.png)


![image](https://user-images.githubusercontent.com/15185688/236050658-6a2c5c6f-89c4-47cb-b3e0-20d3c70dce57.png)

Se genera un .GET 

![image](https://user-images.githubusercontent.com/15185688/236050950-ee3b79d3-12d8-420b-a2d5-87053928d16e.png)

en nuestra ultima prueba de estres podemos validar que son pruebas generales para las cargas en cada peticione de ellos.

Para este caso se generan pruebas de estres con una concurrencia de 10, peticion de 500 y un tiempo de 5 seg.
![image](https://user-images.githubusercontent.com/15185688/236051644-66ed67ad-faa6-47f7-b461-946bd5046c18.png)


Tambien se adjuntan validaciones para al redireccionamiento del endpoint sobre los registros a visualizar

![image](https://user-images.githubusercontent.com/15185688/236051910-5b228210-18c7-4bf9-8523-efb551f76196.png)
![image](https://user-images.githubusercontent.com/15185688/236051943-55548127-d6e0-489b-a226-0928e0c04d42.png)
Tanto como vista en locust asi en la parte de postman.Y como una vista la parte del grafico en ella:

![image](https://user-images.githubusercontent.com/15185688/236052264-a6920168-b3cb-4438-9374-21b020e9e891.png)

Para la 2da. prueba de estres tenemos la parte de concurrencia con la siguiente imagen de prueba.
![image](https://user-images.githubusercontent.com/15185688/236052683-6f25f419-a792-4863-a900-2238c986d93d.png)


pruebas de estres para el 2do. flujo del endpoint ya corriendo.
![image](https://user-images.githubusercontent.com/15185688/236053147-9ab26aa5-0853-484d-a39d-11752a504577.png)

![image](https://user-images.githubusercontent.com/15185688/236053261-356fac97-9060-4c02-b90b-c618a79a812c.png)

Validacion de la ultima prueba de estres con la que se genera la parte de 10000 request, a una concurrencia de 20 y un tiempo de 5 seg.
![image](https://user-images.githubusercontent.com/15185688/236053824-978a4955-5805-4e84-b692-027ce9bbe961.png)


En tabulacion resumen en tabla:

![image](https://user-images.githubusercontent.com/15185688/236054313-3193a3e9-f4f2-4892-8c9e-df961345f0a7.png)



Y un breve resumen en los graficos de validaciones.
![image](https://user-images.githubusercontent.com/15185688/236054348-58adc6d2-0756-4e71-b5fc-945d2df93e7f.png)


Y el grafico de pruebas de estres para 10000 request, 20 concurrency y 5 seg. 
![image](https://user-images.githubusercontent.com/15185688/236054500-05c6fe01-c82e-4e19-897b-a322568e9563.png)

![image](https://user-images.githubusercontent.com/15185688/236054606-a5623d05-aa9f-46f8-a302-76a226019c6c.png)

# CONCLUSIÓN DE LAS PRUEBAS DE ESTRÉS.
  Ocurre una saturacion de peticiones en una ●Peticion de:10000 concurrency:20 timeout: 5 con esto quiere decir segun locust que los servicios seran estresados de tal forma que seran refrezcados con una ● maxRequest:1000 concurrency:10 timeout: 5 y con esta sera operados de forma estandar siendo:
● maxRequest:500 concurrency:10 timeout: 5 la parte mas optima para el microservicio con respecto alas pruebas de estres con locust.


