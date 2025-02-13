 
//  for menu 
 const Btn = document.getElementById("mobileBtn")
 const Menu =document.getElementById("menuMobile")

 Menu.style.transform ="translateX(170px)"

 Btn.onclick =function(){
    if(Menu.style.transform == "translateX(170px)"){
        Btn.style.transform ="translateX(-140px)"
        Menu.style.transform = "translateX(0)";
    }
    else{
        Menu.style.transform = "translateX(170px)";
         Btn.style.transform ="translateX(0px)"
    }
 }

 

//  for dark and light mode
const themeToggle = document.getElementById("themeToggle");
const body = document.body;


body.style.background = "white"

themeToggle.onclick = function(){
    if(body.style.background == "black" ){
        
        body.style.background ="white";
        themeToggle.style.background = "white";
        themeToggle.style.color = "black";
        }
        else{
            body.style.background = "black";
            themeToggle.style.background = "black";
            themeToggle.style.color = "white";
        }
}