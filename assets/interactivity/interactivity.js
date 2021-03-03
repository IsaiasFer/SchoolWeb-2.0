const titleContent = document.getElementById('titleContent')
const studyPlanContent = document.getElementById('studyPlanContent')
const studyProgramContent = document.getElementById('studyProgramContent')
const infoTeachersContent = document.getElementById('infoTeachersContent')

var contents = [titleContent, studyPlanContent, studyProgramContent, infoTeachersContent]

function showContent(selectorNumber){
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display="none";
    }
    contents[selectorNumber].style.display="block";
}