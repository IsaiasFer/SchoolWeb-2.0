let openTitle = document.getElementById('openTitle')
let titleContent = document.getElementById('titleContent')

let openStudyPlan = document.getElementById('openStudyPlan') 
let studyPlanContent = document.getElementById('studyPlanContent')

let openStudyProgram = document.getElementById('openStudyProgram')
let studyProgramContent = document.getElementById('studyProgramContent')

let openTeachersInfo = document.getElementById('openTeachersInfo')
let infoTeachersContent = document.getElementById('infoTeachersContent')

let x = [titleContent, studyPlanContent, studyProgramContent, infoTeachersContent]


openTitle.addEventListener('click', function(){
    titleContent.style.display = 'flex'
    x[1].style.display = 'none'
    x[2].style.display = 'none'
    x[3].style.display = 'none'
})

openStudyPlan.addEventListener('click', function(){
    studyPlanContent.style.display = 'flex'
    x[0].style.display = 'none'
    x[2].style.display = 'none'
    x[3].style.display = 'none'
})

openStudyProgram.addEventListener('click', function(){
    studyProgramContent.style.display = 'flex'
    x[3].style.display = 'none'
    x[1].style.display = 'none'
    x[0].style.display = 'none'
})

openTeachersInfo.addEventListener('click', function(){
    infoTeachersContent.style.display = 'flex'
    x[2].style.display = 'none'
    x[1].style.display = 'none'
    x[0].style.display = 'none'
})