let imagenes = [
    '../img/DestinoSalidas.jpeg',
    '../img/EntradasAlmacen.jpeg',
    '../img/InsumoEntradas.jpeg',
    '../img/UsuarioSalidas.jpeg'
];

let textos = [
    'Relacion destino salidas',
    'Relacion entradas almacen',
    'Relacion insumo entradas',
    'Relacion usuario salidas'
];

let index = 0; 
let intervalo; 

document.getElementById('imagen').src = imagenes[index];
document.getElementById('animal').innerText = textos[index];
document.getElementById('botondestinoSalidas').style.border = 'solid 5px black';

function iniciarCarrusel() {
    intervalo = setInterval(() => {
        siguiente();
    }, 5000);
}

function reiniciarCarrusel() {
    clearInterval(intervalo);
    iniciarCarrusel();
}

function mostrarImagen() {
   
    document.getElementById('botondestinoSalidas').style.border = 'none';
    document.getElementById('botonentradasAlmacen').style.border = 'none';
    document.getElementById('botoninsumoEntradas').style.border = 'none';
    document.getElementById('botonusuarioSalidas').style.border = 'none';


    document.getElementById('imagen').src = imagenes[index];
    document.getElementById('animal').innerText = textos[index];


    if (index === 0) document.getElementById('botondestinoSalidas').style.border = 'solid 5px black';
    if (index === 1) document.getElementById('botonentradasAlmacen').style.border = 'solid 5px black';
    if (index === 2) document.getElementById('botoninsumoEntradas').style.border = 'solid 5px black';
    if (index === 3) document.getElementById('botonusuarioSalidas').style.border = 'solid 5px black';
}

function cambiarimg(numero) {
    index = numero - 1; 
    mostrarImagen();
    reiniciarCarrusel();
}

function botones(direccion) {
    if (direccion === 'L') {
        index = (index - 1 + imagenes.length) % imagenes.length;
    } else if (direccion === 'R') {
        index = (index + 1) % imagenes.length;
    }
    mostrarImagen();
    reiniciarCarrusel();
}

function siguiente() {
    index = (index + 1) % imagenes.length;
    mostrarImagen();
}

window.onload = iniciarCarrusel;
