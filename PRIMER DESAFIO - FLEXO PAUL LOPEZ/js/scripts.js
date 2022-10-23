saludar ()
function saludar() {
    let usuario = prompt("Bienvenido a FLEXO ARQUITECTURA, Ingrese su Nombre");
    alert("Hola " + usuario);
  }


let item1 = "CASA HABITACION";
let precio1 = 15000;
let cantidad1 = 0;

let item2 = "COMERCIAL";
let precio2 = 12000;
let cantidad2 = 0;

let item3 = "REMODELACION";
let precio3 = 20000;
let cantidad3 = 0;



carrito()

function carrito(){
    let bandera = true;
    let introduccion;   
    while(bandera){
        introduccion = prompt(`FLEXO ARQUITECTURA puede cotizarle por metro cuadrado, (responder si/no)`);
        if (introduccion.toLowerCase() == "si"){
                bandera = false;
                // mostrarItems();
                compras();
            } else if(introduccion.toLowerCase() == "no" || introduccion.toLowerCase() == "esc" || introduccion.toLowerCase() == "salir"){
                bandera = false;
                return alert(`Gracias por visitar nuestro sitio`);
            } else {
                alert(`Respuesta inadecuada, por favor intente de nuevo`);
            };
        };
    }
    

function mostrarItems() {
    alert (`Los items disponibles en la dienda son:\n
    Item 1: ${item1} - $ ${precio1}\n
    Item 2: ${item2} - $ ${precio2}\n
    Item 3: ${item3} - $ ${precio3}\n`)
   
};


function compras() {
    let preguntaCompras = parseInt(prompt(`¿Que cotizacion por metro cuadrado requiere? (ingresar nº de item)\n
    Item 1: ${item1} - $ ${precio1}\n
    Item 2: ${item2} - $ ${precio2}\n
    Item 3: ${item3} - $ ${precio3}\n`));
    switch(preguntaCompras){
        case 1:
        cantidad1++;
        break;
        case 2:
        cantidad2++;
        break;
        case 3:
        cantidad3++;
        break;
        default: alert(`Respuesta invalida`);
    };
    repregunta();
}


function repregunta() {
    let formulacion = prompt(`¿Sabe usted los metros cuadrados de su projecto? (responder si/no)`);
    if (formulacion.toLowerCase() == "si"){
        compras();
    } else if (formulacion.toLowerCase() == "no"){
        alert(`Gracias por comprar con nosotros. Usted selecciono:\n
        ${item1} = ${cantidad1} ;\n
        ${item2} = ${cantidad2} ;\n
        ${item3} = ${cantidad3} ;\n
        El precio total es: $` + ((cantidad1 * precio1) + (cantidad2 * precio2) + (cantidad3 * precio3)));
    } else {
        alert(`Respuesta invalida`);
        repregunta();
    }

}

function repregunta() {
    let formulacion = prompt(`¿Desea agregar alguna otra cotizacion? (responder si/no)`);
    if (formulacion.toLowerCase() == "si"){
        compras();
    } else if (formulacion.toLowerCase() == "no"){
        alert(`Gracias por cotizar con nosotros. Usted selecciono:\n
        ${item1} = ${cantidad1} ;\n
        ${item2} = ${cantidad2} ;\n
        ${item3} = ${cantidad3} ;\n
        El precio total es: $` + ((cantidad1 * precio1) + (cantidad2 * precio2) + (cantidad3 * precio3) ));
    } else {
        alert(`Respuesta invalida`);
        repregunta();
    }

}


