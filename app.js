    // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

    //JUEGO AMIGO SECRETO

    let ListaAmigos = [];

    function agregarAmigo() {
        let nombre = document.getElementById('amigo').value;
    
        if (nombre === "") {
            alert('Por favor, inserte un nombre');
        } else if (ListaAmigos.includes(nombre)) {
            alert('El nombre ya está en la lista');
        } else {
            ListaAmigos.push(nombre);
            let lista = document.getElementById('listaAmigos');
            lista.innerHTML = ""; // Limpiar lista antes de actualizar
    
            // Actualizar la lista con los nuevos amigos
            ListaAmigos.forEach(amigo => {
                lista.innerHTML += `<li>${amigo}</li>`;
            });
    
            limpiarCaja();
            console.log(ListaAmigos);
        }
    }
    
    function limpiarCaja() {
        document.querySelector('#amigo').value = '';
    }
    
    // Esperar a que el DOM cargue antes de asignar eventos
    document.addEventListener("DOMContentLoaded", () => {
        let botonSortear = document.querySelector(".button-draw"); // Corregido selector
        if (botonSortear) {
            botonSortear.addEventListener("click", sortearAmigo);
        } else {
            console.error("Botón de sorteo no encontrado");
        }
    });
    
    function sortearAmigo() {
        let resultado = document.getElementById('resultado');
    
        // Validar que haya amigos en la lista
        if (ListaAmigos.length === 0) {
            resultado.innerHTML = '<li> No hay amigos en la lista para sortear.</li>';
            return;
        }
    
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * ListaAmigos.length);
    
        // Obtener el nombre sorteado
        let amigoSeleccionado = ListaAmigos[indiceAleatorio];
    
        // Mostrar el resultado
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
    }

    function reiniciarJuego() {

    }

    limpiarCaja(ListaAmigos);