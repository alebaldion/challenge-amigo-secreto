// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    // Agregar el nombre al array y limpiar el campo de entrada
    amigos.push(nombre);
    inputAmigo.value = '';

    // Actualizar la lista visual en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar que haya nombres en la lista
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    // Seleccionar un nombre aleatorio del array
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en el HTML
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}