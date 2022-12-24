let input = document.getElementById('input-field')
let botEnter = document.getElementById('btn-save')
let botDelet = document.getElementById('btn-delete')
let botColor = document.querySelectorAll('.color-box')
let divnews = document.querySelectorAll('.card shadow-sm rounded')



botColor.forEach(function(x){
    // console.log(event);
    x.addEventListener('click',colors)
    function colors(){
        input.style.backgroundColor = x.style.backgroundColor
    }
})
// botColor.addEventListener('click',deletdiv)

function deletdiv(){

}


botDelet.addEventListener('click',delet)

let divList = document.querySelector("#listed")
botEnter.addEventListener('click',enter)
function enter(){
    
    let newdiv = document.createElement('div')
    let newP = document.createElement('p')
    newP.className ='card-text p-3'
    newdiv.className ='card shadow-sm rounded'
    let inputValue = input.value
    newP.innerHTML = inputValue
    newdiv.style.backgroundColor =input.style.backgroundColor
    newdiv.appendChild(newP)
    divList.appendChild(newdiv)

        newdiv.addEventListener('click',function(){
        newdiv.remove()
        })
        
    
}
function delet(){
    input.value = ''
}