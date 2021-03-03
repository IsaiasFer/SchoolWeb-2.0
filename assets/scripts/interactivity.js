// --------BUTTONS-CONTENTS----------
let openTitle = document.getElementById('openTitle')
let titleContent = document.getElementById('titleContent')

let openStudyPlan = document.getElementById('openStudyPlan')
let studyPlanContent = document.getElementById('studyPlanContent')

let openStudyProgram = document.getElementById('openStudyProgram')
let studyProgramContent = document.getElementById('studyProgramContent')

let openTeachersInfo = document.getElementById('openTeachersInfo')
let infoTeachersContent = document.getElementById('infoTeachersContent')
// --------BUTTONS-CONTENTS----------

// --------BUTTONS-CONTENT-STUDY-PROGRAM----------
let openFirstYearContentCB = document.getElementById('openFirstYearContentCB')
let firstYearContentCB = document.getElementById('firstYearContentCB')

let openSecondYearContentCB = document.getElementById('openSecondYearContentCB')
let secondYearContentCB = document.getElementById('secondYearContentCB')

let openFirstYearContentCS = document.getElementById('openFirstYearContentCS')
let firstYearContentCS = document.getElementById('firstYearContentCS')

let openSecondYearContentCS = document.getElementById('openSecondYearContentCS')
let secondYearContentCS = document.getElementById('secondYearContentCS')

let openThirdYearContentCS = document.getElementById('openThirdYearContentCS')
let thirdYearContentCS = document.getElementById('thirdYearContentCS')

let openFourthYearContentCS = document.getElementById('openFourthYearContentCS')
let fourthYearContentCS = document.getElementById('fourthYearContentCS')
// --------BUTTONS-CONTENT-STUDY-PROGRAM----------

// --------FUNTION-CONTENTS----------

let contents = [titleContent, studyPlanContent, studyProgramContent, infoTeachersContent]


openTitle.addEventListener('click', function(){
    titleContent.style.display = 'flex'
    contents[1].style.display = 'none'
    contents[2].style.display = 'none'
    contents[3].style.display = 'none'
})

openStudyPlan.addEventListener('click', function(){
    studyPlanContent.style.display = 'flex'
    contents[0].style.display = 'none'
    contents[2].style.display = 'none'
    contents[3].style.display = 'none'
})

openStudyProgram.addEventListener('click', function(){
    studyProgramContent.style.display = 'inline-block'
    contents[3].style.display = 'none'
    contents[1].style.display = 'none'
    contents[0].style.display = 'none'
})

openTeachersInfo.addEventListener('click', function(){
    infoTeachersContent.style.display = 'inline-block'
    contents[2].style.display = 'none'
    contents[1].style.display = 'none'
    contents[0].style.display = 'none'
})
// --------FUNTION-CONTENTS----------

// --------FUNTION-CONTENT-STUDY-PROGRAM----------

let programContent = [firstYearContentCB, secondYearContentCB, firstYearContentCS, secondYearContentCS, thirdYearContentCS, fourthYearContentCS]

openFirstYearContentCB.addEventListener('click', function(){
    firstYearContentCB.style.display = 'inline-block'
    programContent[1].style.display =  'none'
    programContent[2].style.display =  'none'
    programContent[3].style.display =  'none'
    programContent[4].style.display =  'none'
    programContent[5].style.display =  'none'
 })

 openSecondYearContentCB.addEventListener('click', function(){
    secondYearContentCB.style.display = 'inline-block'
    programContent[0].style.display = 'none'
    programContent[2].style.display = 'none'
    programContent[3].style.display = 'none'
    programContent[4].style.display = 'none'
    programContent[5].style.display = 'none'
 })

 openFirstYearContentCS.addEventListener('click', function(){
    firstYearContentCS.style.display = 'inline-block'
    programContent[0].style.display = 'none'
    programContent[1].style.display = 'none'
    programContent[3].style.display = 'none'
    programContent[4].style.display = 'none'
    programContent[5].style.display = 'none'
 })

 openSecondYearContentCS.addEventListener('click', function(){
    secondYearContentCS.style.display = 'inline-block'
    programContent[0].style.display = 'none'
    programContent[1].style.display = 'none'
    programContent[2].style.display = 'none'
    programContent[4].style.display = 'none'
    programContent[5].style.display = 'none'
 })

 openThirdYearContentCS.addEventListener('click', function(){
    thirdYearContentCS.style.display = 'inline-block'
    programContent[0].style.display = 'none'
    programContent[1].style.display = 'none'
    programContent[2].style.display = 'none'
    programContent[3].style.display = 'none'
    programContent[5].style.display = 'none' 
 })

 openFourthYearContentCS.addEventListener('click', function(){
    fourthYearContentCS.style.display = 'inline-block'
    programContent[0].style.display = 'none'
    programContent[1].style.display = 'none'
    programContent[2].style.display = 'none'
    programContent[3].style.display = 'none'
    programContent[4].style.display = 'none'
 })
// --------FUNTION-CONTENT-STUDY-PROGRAM----------


