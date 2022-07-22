let precio;

const impuestoIva = new Impuestos("IVA", 21);
const impuestoIvaRed = new Impuestos("IVA Reducido", 10.5);
const nuevoImpuestoPais = new Impuestos("Nuevo Impuesto País", 30);
const gananciasDolarTarj = new Impuestos("Ganancias Dólar Tarjeta", 45);
let nuevoImpuesto = '';


let impuestos = [impuestoIva, impuestoIvaRed, nuevoImpuestoPais, gananciasDolarTarj]

function iniciarPrecio(p) {

    if(!isNaN(p) && p !== '' && p > 0 && p !== null) {
        precio = parseInt(p);

         valor.innerText = `Precio inicial: $ ${precio}`;
    } else {
        alert("Error. Debe ingresar un número.");
        iniciarPrecio( prompt("Ingrese el precio") );
    }
}

iniciarPrecio( prompt("Ingrese el precio") );
crearLista();
preguntarImpuesto(prompt("Si desea ingresar un nuevo impuesto, ingrese 'SI. De lo contrario escriba 'NO'."));

function Impuestos (nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
    
    this.calcularPrecio = function(precio) {
        return precio * (this.valor * 0.01) + precio;
    }

    this.calcularImporte = function(precio) {
        return precio * this.valor * 0.01;
    }
}

function crearLista(){
    for (const impuesto of impuestos) {
        let ol = document.getElementById("lista");
        let li = document.createElement("li");
        li.innerHTML = `${impuesto.nombre} ${impuesto.valor}% ... importe de ${impuesto.nombre}: $${impuesto.calcularImporte(precio)}  > >  Importe total con impuesto incluído:  $${impuesto.calcularPrecio(precio)}`
        ol.appendChild(li)
    }
}

function agregarImpuesto(nombre, valor) {
    if (nombre && valor && nombre.length < 12 && nombre !== null && valor !== null && valor > 0 && valor < 100 ){
            nuevoImpuesto = new Impuestos(nombre, valor);
            impuestos.push(nuevoImpuesto);
            crearLista();

        } else {
            alert("Error. Vuelva a intentarlo. Recuerda que el nombre del impuesto tiene máximo 11 caractéres y el valor debe ser menor que 100")
            preguntarImpuesto(prompt("¿Seguro que quiere ingresar un nuevo impuesto? ingrese 'SI'. De lo contrario escriba 'NO'."));
        }
}

function preguntarImpuesto(input) {
    if(input === "no" || input === "NO") {
        alert("No se agregará ningún impuesto nuevo")
    } else if (input === "si" || input === "SI") {
        agregarImpuesto(prompt("Ingrese el nombre de nuevo impuesto. Máximo 11 caractéres") , prompt("¿De cuánto % sería? (solo ingresar el número))"));
    } else {
        alert("Disculpa no te he entendido");
        preguntarImpuesto(prompt("¿Seguro que quiere ingresar un nuevo impuesto? ingrese 'SI'. De lo contrario escriba 'NO'."));
    }
}



