 
// //  for menu 
//  const Btn = document.getElementById("mobileBtn")
//  const Menu =document.getElementById("menuMobile")
//  let btnImg = document.getElementById('btn-img');

//  Menu.style.transform ="translateX(170px)"

//  Btn.onclick =function(){
    
//     Btn.classList.toggle('fa-xmark')

//     if(Menu.style.transform == "translateX(170px)"){
//         Btn.style.transform ="translateX(-200px)"
//         Menu.style.transform = "translateX(0)";
//     }
//     else{
//         Menu.style.transform = "translateX(170px)";
//          Btn.style.transform ="translateX(0px)"
//     }
//     console.log('s')
    

//  }


 

// //  for dark and light mode
// const themeToggle = document.getElementById("themeToggle");
// const body = document.body;


// body.style.background = "white"

// themeToggle.onclick = function(){
//     if(body.style.background == "black" ){
        
//         body.style.background ="white";
//         themeToggle.style.background = "white";
//         themeToggle.style.color = "black";
//         }
//         else{
//             body.style.background = "black";
//             themeToggle.style.background = "black";
//             themeToggle.style.color = "white";
//         }
// }
// 


let btnNav = document.getElementById('btn-img')
let menuMobile = document.getElementById('menuMobile')
btnNav.onclick = function(){
    this.classList.toggle('fa-xmark')
    this.classList.toggle('go-left')
    menuMobile.classList.toggle('active')
}
