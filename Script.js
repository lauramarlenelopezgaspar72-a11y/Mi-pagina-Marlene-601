function Mostrar_Mensaje() {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML= "Cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity ="1";
        mensaje.style.transform ="translateY(0)";
    }, 50);


}
function Mostrar_Mensaje2() {
    let mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML= "Hola bienvenid@ a mi pagina";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity ="1";
        mensaje.style.transform ="translateY(0)";
    }, 50);


}