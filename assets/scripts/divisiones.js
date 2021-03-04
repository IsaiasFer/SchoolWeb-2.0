const cursos = document.getElementById('curses')
const division1 = document.getElementById('division1')
const division2 = document.getElementById('division2')
const division3 = document.getElementById('division3')
const division4 = document.getElementById('division4')
const division5 = document.getElementById('division5')
const division6 = document.getElementById('division6')
const divisiones = document.getElementById('divisiones')


var contents = [cursos,division1,division2,division3,division4,division5,division6]

function showContent(selectorNumber){
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display="none";
    }

    contents[selectorNumber].style.display="flex";
    divisiones.style.display="flex"
}