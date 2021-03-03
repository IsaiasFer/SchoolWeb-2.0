let openTitle = document.getElementById('openTitle')
let titleContent = document.getElementById('titleContent')

let openStudyPlan = document.getElementById('openStudyPlan')
let studyPlanContent = document.getElementById('studyPlanContent')

let openStudyProgram = document.getElementById('openStudyProgram')
let studyProgramContent = document.getElementById('studyProgramContent')

let openTeachersInfo = document.getElementById('openTeachersInfo')
let infoTeachersContent = document.getElementById('infoTeachersContent')

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
    infoTeachersContent.style.display = 'flex'
    contents[2].style.display = 'none'
    contents[1].style.display = 'none'
    contents[0].style.display = 'none'
})
