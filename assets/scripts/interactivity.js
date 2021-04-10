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

let academic = document.getElementById('academic')

let column1Container = document.getElementById('column1Container')

let column2Container = document.getElementById('column2Container')

let backButtonDevices425px = document.getElementById('backButtonDivices425px')

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
   programContent[positionArray].style.display='inline-block';
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

// --------RESPONSIVE-MAX-WIDTH-425PX----------
    if (screen.width < 425){
        openTitle.target = 'blank';
        openTitle.href = '../assets/images/academic/BOLETIN OFICIAL SALTA - DECRETO N° 561_11.pdf';
        openTitle.onclick = '';
        openTitle.style.textDecoration = "none"

        openStudyPlan.target = 'blank';
        openStudyPlan.href = '../assets/images/academic/curriculatecnica.pdf';
        openStudyPlan.onclick = '';
        openStudyPlan.style.textDecoration = "none"

        openStudyProgram.onclick = ''

        openTeachersInfo.onclick = ''
    } 
    
    
    // let academicButtonsDevicesLessThan425px = [openTitle, openStudyPlan, openStudyProgram, openTeachersInfo]
    // let academicContentDevicesLessThan425px = [studyProgramContent, infoTeachersContent]

    // if (screen.width < 425){
        
        // openStudyProgram.addEventListener('click', openContent425px (0))
        // openTeachersInfo.addEventListener('click', openContent425px (1))

        // function openContent425px (optionContent){
            // for (let i = 0; i < academicButtonsDevicesLessThan425px.length; i++) {
        //         academicButtonsDevicesLessThan425px[i].style.display = 'none'
        //     }  
        //     academicContentDevicesLessThan425px[optionContent].style.display = 'grid'
        //     backButtonDevices425px.style.display = 'inline-block'
        //     column2Container.className = 'column1Container'
    //     }
    // }   

    // backButtonDevices425px.addEventListener('click', function comeBack (){
    //     for (let i = 0; i < academicButtonsDevicesLessThan425px.length; i++){
    //         academicButtonsDevicesLessThan425px[i].style.display = 'flex'
    //     }
    //     studyProgramContent.style.display = 'none'
    //     infoTeachersContent.style.display = 'none'
    //     column2Container.className = 'column2Container'
    //     backButtonDevices425px.style.display = 'none'
    // openStudyProgram.style.display = 'flex'
    // openTeachersInfo.style.display = 'flex'
    // openTitle.style.display = 'flex'
    // openStudyPlan.style.display = 'flex'
// })


        let academicContentDevicesLessThan425px = [openTitle, openStudyPlan, openStudyProgram, openTeachersInfo]


    if (screen.width < 425){
        openStudyProgram.addEventListener('click', function openStudyProgramContent425px(){
            for (let i = 0; i < academicContentDevicesLessThan425px.length; i++) {
                academicContentDevicesLessThan425px[i].style.display = 'none'
            }
            column2Container.className = 'column1Container'
            studyProgramContent.style.display = 'grid'
            backButtonDevices425px.style.display = 'inline-block'

        })

        openTeachersInfo.addEventListener('click', function openTeachersInfoContent425px(){
            for (let i = 0; i < academicContentDevicesLessThan425px.length; i++) {
                academicContentDevicesLessThan425px[i].style.display = 'none'
            }
            column2Container.className = 'column1Container'
            infoTeachersContent.style.display = 'grid'
            backButtonDevices425px.style.display = 'inline-block'
        })
    }   


        backButtonDevices425px.addEventListener('click', function comeBack (){
            for (let i = 0; i < academicContentDevicesLessThan425px.length; i++){
                academicContentDevicesLessThan425px[i].style.display = 'flex'
            }
            studyProgramContent.style.display = 'none'
            infoTeachersContent.style.display = 'none'
            column2Container.className = 'column2Container'
            backButtonDevices425px.style.display = 'none'
    })
    

    
// --------RESPONSIVE-MAX-WIDTH-425PX----------


