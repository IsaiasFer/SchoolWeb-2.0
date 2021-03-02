const PLATFORM=document.querySelector(".plataformasButton");
const MENU=document.querySelector(".menu");
function aparecer(){
    if(MENU.classList.contains("isActive")){
        MENU.classList.remove("isActive")
    }else{
        MENU.classList.add("isActive")
    }}
function sape(){
    PLATFORM.addEventListener("click",aparecer)
}
sape()