# 🎉 Amigo Secreto 🎁

¡Bienvenido al proyecto **Amigo Secreto**! Esta es una aplicación web sencilla y divertida que te permite organizar un sorteo de "Amigo Secreto" con tus amigos, familiares o compañeros de trabajo. Simplemente ingresa los nombres de los participantes, y la aplicación seleccionará aleatoriamente quién le toca a quién. ¡Perfecto para fiestas, reuniones o intercambios de regalos!

---

## 🚀 Características principales

- **Agregar nombres**: Ingresa los nombres de los participantes en un campo de texto y agrégalos a la lista con un solo clic.
- **Validación de entrada**: La aplicación valida que no se ingresen nombres vacíos o repetidos.
- **Lista visual**: Todos los nombres agregados se muestran en una lista clara y ordenada.
- **Sorteo aleatorio**: Con un solo clic, la aplicación selecciona un nombre al azar de la lista y lo muestra como el "Amigo Secreto".

---

## 🛠️ Tecnologías utilizadas

- **HTML**: Estructura semántica y accesible.
- **CSS**: Estilos modernos con variables CSS y diseño responsive.
- **JavaScript**: Lógica para agregar nombres, validar entradas y realizar el sorteo.
- **GitHub**: Alojamiento del código y documentación.

---

## 🧑‍💻 Explicación del código

### Array `amigos`
- Almacena los nombres de los amigos que se van agregando.

### Función `agregarAmigo`
- Obtiene el valor del campo de texto (`inputAmigo`).
- Valida que el campo no esté vacío y que el nombre no esté repetido.
- Si es válido, agrega el nombre al array `amigos` y limpia el campo de entrada.
- Llama a la función `actualizarListaAmigos` para mostrar la lista actualizada en el HTML.

### Función `actualizarListaAmigos`
- Limpia la lista actual en el HTML (`listaAmigos`).
- Recorre el array `amigos` y agrega cada nombre como un elemento `<li>` a la lista.

### Función `sortearAmigo`
- Valida que haya nombres en la lista.
- Selecciona un nombre aleatorio del array `amigos`.
- Muestra el resultado en el elemento `resultado` del HTML.

### Cómo funciona
- El usuario ingresa nombres en el campo de texto y hace clic en "Añadir" para agregarlos a la lista.
- Los nombres se muestran en una lista debajo del campo de entrada.
- Al hacer clic en "Sortear amigo", se selecciona un nombre aleatorio de la lista y se muestra como resultado.

---

## 🙌 Créditos

- **Desarrollado por**: Ale Baldion 
- **Inspiración**: Repositorio base proporcionado por Alura LATAM


---

¡Gracias por visitar el proyecto! 🎊

---
