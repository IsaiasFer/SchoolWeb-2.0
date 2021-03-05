const cursos = document.getElementById('curses')
const division1 = document.getElementById('division1')
const division2 = document.getElementById('division2')
const division3 = document.getElementById('division3')
const division4 = document.getElementById('division4')
const division5 = document.getElementById('division5')
const division6 = document.getElementById('division6')
const divisiones = document.getElementById('divisiones')
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
const asignsContainer = document.getElementById('asignsContainer')

var contents = [cursos,division1,division2,division3,division4,division5,division6,asignsContainer,asign11b,asign12b,asign13b,asign14b,asign15b,asign21b,asign22b,asign23b,asign24b,asign11,asign12,asign13,asign14,asign21,asign22,asign23,asign24,asign31,asign32,asign33,asign41,asign42]

function showContent(selectorNumber){
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display="none";
    }
    contents[selectorNumber].style.display="flex";
    divisiones.style.display="flex"
    asignsContainer.style.display="block"
}