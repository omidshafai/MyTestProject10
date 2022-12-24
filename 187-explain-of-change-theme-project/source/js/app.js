const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle('dark')
  if(document.body.className.includes('dark')){
    localStorage.setItem('x','dark')
    console.log('dark');
  }else{
    localStorage.setItem('x','light')
    console.log('lite');
  }
})
window.onload = function(){
  if(localStorage.getItem('x') === 'dark'){
    document.body.classList.toggle('dark')
  }else{
    document.body.classList.toggle('liggg')
  }
}
