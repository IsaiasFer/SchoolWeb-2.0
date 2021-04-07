// --------BUTTONS-CONTENTS----------
// let openTitle = document.getElementById('openTitle')
let titleContent = document.getElementById('titleContent')

// let openStudyPlan = document.getElementById('openStudyPlan')
let studyPlanContent = document.getElementById('studyPlanContent')

// let openStudyProgram = document.getElementById('openStudyProgram')
let studyProgramContent = document.getElementById('studyProgramContent')

// let openTeachersInfo = document.getElementById('openTeachersInfo')
let infoTeachersContent = document.getElementById('infoTeachersContent')
// --------BUTTONS-CONTENTS----------

// --------BUTTONS-CONTENT-STUDY-PROGRAM----------
// let openFirstYearContentCB = document.getElementById('openFirstYearContentCB')
let firstYearContentCB = document.getElementById('firstYearContentCB')

// let openSecondYearContentCB = document.getElementById('openSecondYearContentCB')
let secondYearContentCB = document.getElementById('secondYearContentCB')

// let openFirstYearContentCS = document.getElementById('openFirstYearContentCS')
let firstYearContentCS = document.getElementById('firstYearContentCS')

// let openSecondYearContentCS = document.getElementById('openSecondYearContentCS')
let secondYearContentCS = document.getElementById('secondYearContentCS')

// let openThirdYearContentCS = document.getElementById('openThirdYearContentCS')
let thirdYearContentCS = document.getElementById('thirdYearContentCS')

// let openFourthYearContentCS = document.getElementById('openFourthYearContentCS')
let fourthYearContentCS = document.getElementById('fourthYearContentCS')
// --------BUTTONS-CONTENT-STUDY-PROGRAM----------

// --------BUTTONS-CONTENT-INFO-TEACHERS----------
// let opentInfoTeachersContent1 = document.getElementById('opentInfoTeachersContent1')
let infoTeachersContent1 = document.getElementById('infoTeachersContent1')

// let opentInfoTeachersContent2 = document.getElementById('opentInfoTeachersContent2')
let infoTeachersContent2 = document.getElementById('infoTeachersContent2')

// --------BUTTONS-CONTENT-INFO-TEACHERS----------

let academic = document.getElementById("academic")


// --------FUNTION-CONTENTS----------

let contents = [titleContent, studyPlanContent, studyProgramContent, infoTeachersContent]

function showContentButtons(selectorNumber){
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display='none';
    }
    contents[selectorNumber].style.display='inline-block';
}

// --------FUNTION-CONTENTS----------

// --------FUNTION-CONTENT-STUDY-PROGRAM----------

let programContent = [firstYearContentCB, secondYearContentCB, firstYearContentCS, secondYearContentCS, thirdYearContentCS, fourthYearContentCS]

function showContentStudyProgram(positionArray){
   for (let i = 0; i < programContent.length; i++) {
       programContent[i].style.display='none';
   }
   programContent[positionArray].style.display='inline-block'
} 
// --------FUNTION-CONTENT-STUDY-PROGRAM----------

// --------FUNTION-CONTENT-INFO-TEACHERS----------

let infoTeachersContents = [infoTeachersContent1, infoTeachersContent2]

function showContentInfoTeachers(options){
    for (let i = 0; i < infoTeachersContents.length; i++) {
        infoTeachersContents[i].style.display='none';
    }
    infoTeachersContents[options].style.display='inline-block';
}

// --------FUNTION-CONTENT-INFO-TEACHERS----------



