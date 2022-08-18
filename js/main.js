/* let ingreso = parseInt(prompt("Ingresá un número"));
let limite = parseInt(prompt("Ingresá un límite"));

for (let i = 0; i <= limite; i++ ){
    let resultado = ingreso * i;
    console.log(ingreso + "*" + i + "=" + resultado);
} */

let palabraClave= "calabaza";

for (let index=0; index <= 3; index++) {

    let palabraUsuario= prompt("Adiviná la letra que falta, _ALABAZA")
    if(palabraClave === palabraUsuario)
    {
        console.log("Acertaste!");
       break;
    } else{
        console.log("Te quedan " + (2 - index) + " intentos");
    }
}
