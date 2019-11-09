#moviesWishList

#Wish list de pelis

A partir de las peliculas **Upcoming** segun la https://www.themoviedb.org/documentation/api,
armar un aplicación que permita guardar las que queremos ver. Además de seleccionar la película, quiero poder poner un comentario y de a 1 a 5 el nivel de cuanto quiero verlas.

##No Funcionales:
La aplicación tiene que guardarlas en una base de datos. No quiero que se pierda el listado cada vez que cerremos la aplicación.
La API tiene que tener pruebas automatizadas :) (JEST)

##Otros Funcionales
La API tiene que permitir borrar películas que ya no quiero ver
La API tiene que permitir modificar ya sea el comentario o la puntuación de las ganas que tengo de verlas.
La API tiene que permitir marcar una película como vista

##Pasos
1. Crear repo
2. Crear app  node + express\
3. Definir la API : Cuales son las rutas que necesito // router
4. Implementar la API guardandolo en una variable en memoria(todavía no usamos la DB).
5. Probar la API con pruebas automatizadas
6. Migrar a DB (postgres)
7. Desde la UI, mostrar el listado de las pelis de upcoming
8. Hacer un formulario muy boludo que cuando lo submiteamos, hace el request a la api 
