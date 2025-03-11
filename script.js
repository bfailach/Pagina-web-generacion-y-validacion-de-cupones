const botonGenerar = document.getElementById("boton1");
const botonValidar = document.getElementById("boton2");
const campoTexto = document.getElementById("campoTexto");
const cuponGenerado = document.getElementById("cuponGenerado");
const cuponValido = document.getElementById("cuponValido");
const cuponInvalido = document.getElementById("cuponInvalido");

let cupones = [];

function generarCodigo() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let codigo = ""; //Inicializar como array vacio
    for (let i = 0; i < 10; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); //Math floor redondea, se multiplica con caracteres.lenght para que Math.random de valores válidos (daría valores de 0 a 1)
    }
    return codigo;
}

//Cuando el usuario use el botón de generar

botonGenerar.addEventListener("click", () => {
    const nuevoCupon = generarCodigo(); // Generar 
    cupones.push(nuevoCupon); // Almacenar 
    cuponGenerado.textContent = `Cupón generado: ${nuevoCupon}`;
    cuponGenerado.style.display = "block";
    campoTexto.value = "";
    cuponValido.style.display = "none";
    cuponInvalido.style.display = "none";

    console.log("Cupón generado:", nuevoCupon); // Registrar
    console.log("Cupones almacenados:", cupones); // Mostrar 
});

//Cuando el usuario use el botón de validar sin haber ingresado un código

botonValidar.addEventListener("click", () => {
    const cuponIngresado = campoTexto.value.trim();

    if (cuponIngresado === "") {
        alert("Ingresar cupón");
        return;
    }

    const indice = cupones.indexOf(cuponIngresado);

    //Verificar si el cupón existe en el array

    if (indice !== -1) {
        cuponValido.style.display = "block";
        cuponInvalido.style.display = "none";
        cupones.splice(indice, 1); // Eliminar 
        console.log("Cupón válido, cupones restantes:", cupones); // Registrar 

        //Si no existe, es inválido

    } else {
        cuponInvalido.style.display = "block";
        cuponValido.style.display = "none";
        console.log("Cupón inválido, cupones restantes:", cupones); // Registrar
    }
});
