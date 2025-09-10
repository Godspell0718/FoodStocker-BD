let imagen1 = 'img/cassandra.png';
let imagen2 = 'img/mariadb.png'
if (imagen1 == 'img/cassandra.png') {
    document.getElementById('botonCassandra').style.border = 'solid 5px black';
}

if (imagen2 == 'img/mariadb.png')
    document.getElementById('botonMariadb').style.border = 'solid 5px black'

function cambiarimg(numero) {

    document.getElementById('botonCassandra').style.border = 'none';
    document.getElementById('botonCouchdb').style.border = 'none';
    document.getElementById('botonMongodb').style.border = 'none';
    document.getElementById('botonRedis').style.border = 'none';

    document.getElementById('botonMariadb').style.border = 'none';
    document.getElementById('botonMysql').style.border = 'none';
    document.getElementById('botonOracle').style.border = 'none';
    document.getElementById('botonPostgre').style.border = 'none';

    if (numero == 1) {
        imagen1 = 'img/cassandra.png';
        document.getElementById('botonCassandra').style.border = 'solid 5px black'
        document.getElementById('textoNosql').innerText = 'Cassandra';

    } else if (numero == 2) {
        imagen1 = 'img/couchdb.png';
        document.getElementById('botonCouchdb').style.border = 'solid 5px black'
        document.getElementById('textoNosql').innerText = 'CouchDB';

    } else if (numero == 3) {
        imagen1 = 'img/mongodb.png';
        document.getElementById('botonMongodb').style.border = 'solid 5px black'
        document.getElementById('textoNosql').innerText = 'MongoDB';

    } else if (numero == 4) {
        imagen1 = 'img/redis.png';
        document.getElementById('botonRedis').style.border = 'solid 5px black'
        document.getElementById('textoNosql').innerText = 'Redis';
    } else if (numero == 5) {
        imagen2 = 'img/mariadb.png';
        document.getElementById('botonMariadb').style.border = 'solid 5px black'
        document.getElementById('textoSql').innerText = 'MariaDB';
    } else if (numero == 6) {
        imagen2 = 'img/mysql.png';
        document.getElementById('botonMysql').style.border = 'solid 5px black'
        document.getElementById('textoSql').innerText = 'MySQL';
    } else if (numero == 7) {
        imagen2 = 'img/oracle.png';
        document.getElementById('botonOracle').style.border = 'solid 5px black'
        document.getElementById('textoSql').innerText = 'Oracle';
    } else if (numero == 8) {
        imagen2 = 'img/postgre.png';
        document.getElementById('botonPostgre').style.border = 'solid 5px black'
        document.getElementById('textoSql').innerText = 'PostgreSQL';
    }

    document.getElementById('imagenNosql').src = imagen1;   
    document.getElementById('imagenSql').src = imagen2
}
function botones(direccion) {

    document.getElementById('botonCassandra').style.border = 'none';
    document.getElementById('botonCouchdb').style.border = 'none';
    document.getElementById('botonMongodb').style.border = 'none';
    document.getElementById('botonRedis').style.border = 'none';

    document.getElementById('botonMariadb').style.border = 'none';
    document.getElementById('botonMysql').style.border = 'none';
    document.getElementById('botonOracle').style.border = 'none';
    document.getElementById('botonPostgre').style.border = 'none';

    if (direccion == 'L1') {

        if (imagen1 === 'img/cassandra.png') {
            imagen1 = 'img/redis.png';
            document.getElementById('botonRedis').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'Redis';

        } else if (imagen1 === 'img/redis.png') {
            imagen1 = 'img/mongodb.png';
            document.getElementById('botonMongodb').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'MongoDB';

        } else if (imagen1 === 'img/mongodb.png') {
            imagen1 = 'img/couchdb.png';
            document.getElementById('botonCouchdb').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'CouchDB';

        } else if (imagen1 === 'img/couchdb.png') {
            imagen1 = 'img/cassandra.png';
            document.getElementById('botonCassandra').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'Cassandra';

        }
        document.getElementById('imagenNosql').src = imagen1;

    } else if (direccion == 'R1') {

        if (imagen1 === 'img/cassandra.png') {
            imagen1 = 'img/couchdb.png';
            document.getElementById('botonCouchdb').style.border = 'solid 5px black';
            document.getElementById('textoNosql').innerText = 'CouchDB';

        } else if (imagen1 === 'img/couchdb.png') {
            imagen1 = 'img/mongodb.png';
            document.getElementById('botonMongodb').style.border = 'solid 5px black';
            document.getElementById('textoNosql').innerText = 'MongoDB';

        } else if (imagen1 === 'img/mongodb.png') {
            imagen1 = 'img/redis.png';
            document.getElementById('botonRedis').style.border = 'solid 5px black';
            document.getElementById('textoNosql').innerText = 'Redis';

        } else if (imagen1 === 'img/redis.png') {
            imagen1 = 'img/cassandra.png';
            document.getElementById('botonCassandra').style.border = 'solid 5px black';
            document.getElementById('textoNosql').innerText = 'Cassandra';

        }
        document.getElementById('imagenNosql').src = imagen1;
    } else if (direccion == 'L2') {

        if (imagen2 === 'img/mariadb.png') {
            imagen2 = 'img/postgre.png';
            document.getElementById('botonPostgre').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'PostgreSQL';
        } else if (imagen2 === 'img/postgre.png') {
            imagen2 = 'img/oracle.png';
            document.getElementById('botonOracle').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'Oracle';
        } else if (imagen2 === 'img/oracle.png') {
            imagen2 = 'img/mysql.png';
            document.getElementById('botonMysql').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'MySQL';
        } else if (imagen2 === 'img/mysql.png') {
            imagen2 = 'img/mariadb.png';
            document.getElementById('botonMariadb').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'MariaDB';
        }
        document.getElementById('imagenSql').src = imagen2;
    } else if (direccion == 'R2') {

        if (imagen2 === 'img/mariadb.png') {
            imagen2 = 'img/mysql.png';
            document.getElementById('botonMysql').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'MySQL';
        } else if (imagen2 === 'img/mysql.png') {
            imagen2 = 'img/oracle.png';
            document.getElementById('botonOracle').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'Oracle';
        } else if (imagen2 === 'img/oracle.png') {
            imagen2 = 'img/postgre.png';
            document.getElementById('botonPostgre').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'PostgreSQL';
        } else if (imagen2 === 'img/postgre.png') {
            imagen2 = 'img/mariadb.png';
            document.getElementById('botonMariadb').style.border = 'solid 5px black';
            document.getElementById('textoSql').innerText = 'MariaDB';
        }
        document.getElementById('imagenSql').src = imagen2;
    }
}

function redirect(numero) {
    if (numero == 1) {
        if (imagen1 === 'img/cassandra.png') {
            window.location.assign('BDNoSQL/cassandra.html')

        } else if (imagen1 === 'img/redis.png') {
            window.location.assign('BDNoSQL/redis.html')

        } else if (imagen1 === 'img/mongodb.png') {
            window.location.assign('BDNoSQL/mongodb.html')

        } else if (imagen1 === 'img/couchdb.png') {
            window.location.assign('BDNoSQL/couch.html')
        }
    } else if (numero == 2) {
        if (imagen2 === 'img/mariadb.png') {
            window.location.assign('BD_SQL/mariaDB.html')

        } else if (imagen2 === 'img/mysql.png') {
            window.location.assign('BD_SQL/mysql.html')

        } else if (imagen2 === 'img/oracle.png') {
            window.location.assign('/BD_SQL/Oracle.html')

        } else if (imagen2 === 'img/postgre.png') {
            window.location.assign('BD_SQL/postgre.html')

        }
    }
}

