/////////////////////////////////////////////////
// Ahora capturamos input del usuario
let myUserInputAfter = document.getElementById("usuario");

myUserInputAfter.onkeydown = (evento) => {
    //console.dir(event);
    evento.preventDefault()
    //console.log("tecla presionada: " + evento.key + " Codigo de tecla: " + evento.keyCode + " Esta presionado control?: " + evento.ctrlKey  );

    // Si apreto control + alt + s
    if(evento.ctrlKey  && evento.altKey && (evento.keyCode == 83) ) {
        console.log("guardando...");
    }

}

// Ahora solo creamos una instancia de nuestra consola que captura el evento
// de keyboard ctrl + alt + d
let myConsole = new DebugConsole();

myConsole.log("Esto es una salida de consola")

myUserInputAfter.oncut = (e) => {
    e.preventDefault();
    alert("No podes cortar");
}

// Podriamos obligar al usuario a no copiar su contraseña 
// En el reingras contraseña de registros
myUserInputAfter.oncopy = (e) => {
    e.preventDefault();
    alert("No podes copiar");
}

//myUserInputAfter.onkeyup =  () => console.log("se dejo presionar tecla")