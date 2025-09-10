let imagen1 = '../img/DestinoSalidas.jpeg';

if (imagen1 == '../img/DestinoSalidas.jpeg') {
    document.getElementById('botondestinoSalidas').style.border = 'solid 5px black';
}
function cambiarimg(numero) {

    document.getElementById('botondestinoSalidas').style.border = 'none';
    document.getElementById('botonentradasAlmacen').style.border = 'none';
    document.getElementById('botoninsumoEntradas').style.border = 'none';
    document.getElementById('botonusuarioSalidas').style.border = 'none';

    if (numero == 1) {
        imagen1 = '../img/DestinoSalidas.jpeg';
        document.getElementById('botondestinoSalidas').style.border = 'solid 5px black'
        document.getElementById('animal').innerText = 'Relacion destino salidas';

    } else if (numero == 2) {
        imagen1 = '../img/EntradasAlmacen.jpeg';
        document.getElementById('botonentradasAlmacen').style.border = 'solid 5px black'
        document.getElementById('animal').innerText = 'Relacion entradas almacen';

    } else if (numero == 3) {
        imagen1 = '../img/InsumoEntradas.jpeg';
        document.getElementById('botoninsumoEntradas').style.border = 'solid 5px black'
        document.getElementById('animal').innerText = 'Relacion insumo entradas';

    } else if (numero == 4) {
        imagen1 = '../img/UsuarioSalidas.jpeg';
        document.getElementById('botonusuarioSalidas').style.border = 'solid 5px black'
        document.getElementById('animal').innerText = 'Relacion usuario salidas';
    }
    
    document.getElementById('imagen').src = imagen1;
}
function botones(direccion) {

    document.getElementById('botondestinoSalidas').style.border = 'none';
    document.getElementById('botonentradasAlmacen').style.border = 'none';
    document.getElementById('botoninsumoEntradas').style.border = 'none';
    document.getElementById('botonusuarioSalidas').style.border = 'none';

    if (direccion == 'L') {

        if (imagen1 === '../img/DestinoSalidas.jpeg') {
            imagen1 = '../img/EntradasAlmacen.jpeg';
            document.getElementById('botonusuarioSalidas').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion Usuario salidas';

        } else if (imagen1 === '../img/EntradasAlmacen.jpeg') {
            imagen1 = '../img/InsumoEntradas.jpeg';
            document.getElementById('botoninsumoEntradas').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion insumo entradas';

        } else if (imagen1 === '../img/InsumoEntradas.jpeg') {
            imagen1 = '../img/UsuarioSalidas.jpeg';
            document.getElementById('botonentradasAlmacen').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion entradas almacen';

        } else if (imagen1 === '../img/UsuarioSalidas.jpeg') {
            imagen1 = '../img/DestinoSalidas.jpeg';
            document.getElementById('botondestinoSalidas').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion destino salidas';

        }

    } else if (direccion == 'R') {

        if (imagen1 === '../img/DestinoSalidas.jpeg') {
            imagen1 = '../img/UsuarioSalidas.jpeg';
            document.getElementById('botonentradasAlmacen').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion entradas almacen';

        } else if (imagen1 === '../img/UsuarioSalidas.jpeg') {
            imagen1 = '../img/InsumoEntradas.jpeg';
            document.getElementById('botoninsumoEntradas').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion insumo entradas';

        } else if (imagen1 === '../img/InsumoEntradas.jpeg') {
            imagen1 = '../img/EntradasAlmacen.jpeg';
            document.getElementById('botonusuarioSalidas').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion Usuario salidas';

        } else if (imagen1 === '../img/EntradasAlmacen.jpeg') {
            imagen1 = '../img/DestinoSalidas.jpeg';
            document.getElementById('botondestinoSalidas').style.border = 'solid 5px black';
            document.getElementById('animal').innerText = 'Relacion destino salidas';

        }
    }
    document.getElementById('imagen').src = imagen1;
}

