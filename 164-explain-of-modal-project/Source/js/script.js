let bot = document.querySelector('button')
let sel = document.querySelector('section')
let modal = document.querySelector('.modal-parent')
let span = document.querySelector('.X')
bot.addEventListener('click',sowmod)
function sowmod(){
    modal.style.display = 'block'
    sel.style.filter = 'blur(22px)'
}
span.addEventListener('click',son)
function son(){
    modal.style.display = 'none'
    sel.style.filter = 'none'

}