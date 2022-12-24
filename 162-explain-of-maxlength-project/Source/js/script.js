let input = document.querySelector(".input")
let span = document.querySelector('.counter')

input.addEventListener("keyup",function(){
    
    let valuen = (input.value.length)
    span.innerHTML = 19 - valuen

console.log(span.innerHTML);
})