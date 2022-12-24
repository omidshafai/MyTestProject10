let tolbar = document.querySelector("#mainNav")
let img = document.querySelector('img')
document.addEventListener('scroll',function(e){
    if(document.documentElement.scrollTop < 5){
  tolbar.className = 'txt-white bg-black'
  img.style.height = '84px'
  console.log()
}else{  
  tolbar.setAttribute()
    tolbar.classList.remove('txt-white')
    tolbar.classList.remove('bg-black')

    img.style.height = '64px'
}
})
