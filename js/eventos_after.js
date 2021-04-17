/////////////////////////////////////////////////
// Ahora capturamos input del usuario
let myUserInputAfter = document.getElementById("usuario");

myUserInputAfter.onkeydown = () => console.log("tecla presionada");
myUserInputAfter.onkeyup =  () => console.log("se dejo presionar tecla")