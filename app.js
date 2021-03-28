// const body = document.querySelector('body')

// document.querySelector('.toggle').onclick = function(){
//     body.classList.toggle('light')
// }

const body = document.querySelector('body')
let mode = localStorage.getItem('mode')

document.addEventListener("DOMContentLoaded",function(){
    if(mode === 'light'){
        body.classList.toggle('light')
    } 
})

document.querySelector('.toggle').onclick = function(){
    if(!body.classList.toggle('light')){
        localStorage.setItem('mode','dark')
    } else {
        localStorage.setItem('mode','light')
    }
}



