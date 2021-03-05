/* Traemos al JS el selector general donde estan todos los cursos */
const cursos = document.getElementById('curses')
/* traemos a JS las diferentes pantallas */
const division1 = document.getElementById('division1')
const division2 = document.getElementById('division2')
const division3 = document.getElementById('division3')
const division4 = document.getElementById('division4')
const division5 = document.getElementById('division5')
const division6 = document.getElementById('division6')
/* Traemos al JS el selector general donde estan todos los cursos */
const divisiones = document.getElementById('divisiones')
/* 
traemos a JS las diferentes pantallas de todas las divisiones
La forma de leer los id´s de las divisiones es la siguiente: el primer numero es el grado, y el segundo numero es la division de este modo:
            asign32 === tercero segunda
en caso de los grados de ciclo basico, se agrega una b en el final, de este modo:
            asign21b === segundo primera del ciclo basico
*/
const asign11b = document.getElementById('asign11b')
const asign12b = document.getElementById('asign12b')
const asign13b = document.getElementById('asign13b')
const asign14b = document.getElementById('asign14b')
const asign15b = document.getElementById('asign15b')
const asign21b = document.getElementById('asign21b')
const asign22b = document.getElementById('asign22b')
const asign23b = document.getElementById('asign23b')
const asign24b = document.getElementById('asign24b')
const asign11 = document.getElementById('asign11')
const asign12 = document.getElementById('asign12')
const asign13 = document.getElementById('asign13')
const asign14 = document.getElementById('asign14')
const asign21 = document.getElementById('asign21')
const asign22 = document.getElementById('asign22')
const asign23 = document.getElementById('asign23')
const asign24 = document.getElementById('asign24')
const asign31 = document.getElementById('asign31')
const asign32 = document.getElementById('asign32')
const asign33 = document.getElementById('asign33')
const asign41 = document.getElementById('asign41')
const asign42 = document.getElementById('asign42')

/* traemos a JS el padre de las asignaciones en HTML "asignsContainer" */
const asignsContainer = document.getElementById('asignsContainer')

/* Traemos los tres Botones diferentes, el boton para volver al index, para volver hacia la parte de cursos y para volver a la parte de divisiones */
const volveraCursos = document.getElementById('haciaCursos')
const volveraDivisiones = document.getElementById('haciaDivisiones')
const volverButton = document.getElementById('botonVolver')

/* definimos dos arrays, uno de contenidos y otro de los tres botones */
var contents = [cursos,division1,division2,division3,division4,division5,division6,asignsContainer,asign11b,asign12b,asign13b,asign14b,asign15b,asign21b,asign22b,asign23b,asign24b,asign11,asign12,asign13,asign14,asign21,asign22,asign23,asign24,asign31,asign32,asign33,asign41,asign42]
var buttons=[volverButton,volveraCursos,volveraDivisiones]

/* Aqui definimos la variable lastPage, es sumamente FUNDAMENTAL y es la responsable de que este programa funcione bien, ella ira cambiando de valor cada vez que entramos a las asignaciones de algun curso, guardará ese valor y se almacenará en el boton para poder regresar */
var lastPage

/* declaramos al principio las dos funciones con scope global, para evitar el hoisting, cabe aclarar que sin estas funciones no funcionan las demas
    Esta funcion sirve exclusivamente para borrar(colocar display:none) a los diferentes contenidos*/
function desaparecerContenido(){
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display="none";
    }
}

/* Esta funcion sirve exclusivamente para borrar(colocar display:none) a los diferentes botones*/
function desaparecerbuttons(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display="none";
    }
}

/* Esta funcion se llama en el HTML por los distintos selectores, sirve para eliminar contenido, y botones.Tambien sirve para mostrar el boton y los contenidos correspondientes para cada etapa*/
function showContent(selectorNumber) {
    desaparecerContenido();
    desaparecerbuttons();
    /* LEER BIEN
    los selectores comprendidos entre 1 y 6 corresponden a los botones de los diferentes grados, si el usuario toca alguno entonces el boton de volver a index cambiara por el de volver a cursos, y el valor de lastPage redireccionará hacia la pagina de cursos
    Los valores comprendidos entre 8 y 29 corresponden a cualquiera de las divisiones de todos los cursos, por lo tanto si se toca uno, se oculta el boton de volver a cursos, se lleva al usuario a la pagina de asignaturas, y se activa el boton de volver a divisiones*/
    if (selectorNumber >= 1 && selectorNumber <= 6) {
        volveraCursos.style.display = "flex"
        lastPage = cursos
    }else if (selectorNumber >= 8 && selectorNumber <= 29) {
        volveraCursos.style.display = "none"
        volveraDivisiones.style.display = "flex"

        /* gracias a este codigo se puede volver desde asignaturas hacia cualquier pantalla de divisiones, sea
        la que sea, 

        ***los selectores comprendidos entre 8 y 12 son los correspondientes a los cursos de 1ro ciclo basico, por lo tanto si alguien toca uno, lastPage se configura en "division1", es el elemento en el array que representa a 1ro ciclo basico
        ***los selectores comprendidos entre 13 y 16 son los correspondientes a los cursos de 2do ciclo basico, por lo tanto si alguien toca uno, lastPage se configura en "division2", es el elemento en el array que representa a 2do ciclo basico
        ***los selectores comprendidos entre 17 y 20 son los correspondientes a los cursos de 1ro ciclo superior, por lo tanto si alguien toca uno, lastPage se configura en "division3", es el elemento en el array que representa a 1ro ciclo superior
        ***los selectores comprendidos entre 21 y 24 son los correspondientes a los cursos de 2do ciclo superior, por lo tanto si alguien toca uno, lastPage se configura en "division4", es el elemento en el array que representa a 2do ciclo superior
        ***los selectores comprendidos entre 17 y 20 son los correspondientes a los cursos de 3ro ciclo superior, por lo tanto si alguien toca uno, lastPage se configura en "division5", es el elemento en el array que representa a 3ro ciclo superior
        ***los selectores comprendidos entre 17 y 20 son los correspondientes a los cursos de 4to ciclo superior, por lo tanto si alguien toca uno, lastPage se configura en "division6", es el elemento en el array que representa a 4to ciclo superior*/
        if (selectorNumber >= 8 && selectorNumber <= 12) {
            lastPage = division1
        } else if (selectorNumber >= 13 && selectorNumber <= 16) {
            lastPage = division2
        } else if (selectorNumber >= 17 && selectorNumber <= 20) {
            lastPage = division3
        } else if (selectorNumber >= 21 && selectorNumber <= 24) {
            lastPage = division4
        } else if (selectorNumber >= 25 && selectorNumber <= 27) {
            lastPage = division5
        } else if (selectorNumber >= 28 && selectorNumber <= 29) {
            lastPage = division6
        }
    }

    /* este codigo muestra elcontenido que se haya seleccionado */
    contents[selectorNumber].style.display="flex";

    /* este codigo le coloca las siguientes clases a estos contenedeores, escenciales siempre */
    divisiones.style.display="flex"
    asignsContainer.style.display="block"
}

/* esta funcion se llama desde el HTML desde los botones, en esta funcion se analiza cual de los dos botones fue presionado,y a donde se dirige, si se dirige hacia cursos, se desaparecen tanto el contenido como los demas botones, y se muestran los cursos(contents[0]) y el boton de volver (button[0])
Si se elige ir hacia la pantalla de divisones, se hace lo mismo, solo que en vez de mostrar cursos se muestra el elmento que este guardado en lastPage, y su boton correspondiente, el de cursos (buttons[1])*/
function regresar(aDonde){
    if (aDonde=="curse"){
        desaparecerContenido()
        desaparecerbuttons()
        contents[0].style.display="flex"
        buttons[0].style.display="flex"
    }else if(aDonde=="divi"){
        desaparecerContenido()
        desaparecerbuttons()
        lastPage.style.display="flex"
        buttons[1].style.display="flex"
    }
}