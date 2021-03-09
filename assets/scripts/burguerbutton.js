const ipad=window.matchMedia("screen and (max-width:767px)")
const Menu=document.querySelector(".list-ul");
const burguerb=document.querySelector(".burguer-button")
function aparecer(){
if(Menu.classList.contains("isActive")){
    Menu.classList.remove("isActive")
}else{
    Menu.classList.add("isActive")
}}
ipad.addListener(validacion)
function validacion(event){
    if(event.matches){
        burguerb.addEventListener("click",aparecer)
    }else{
        burguerb.removeEventListener("click",aparecer)
    }
}
validacion(ipad)