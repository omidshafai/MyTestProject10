let butAdd = document.getElementById('addButton')
let input = document.getElementById('itemInput')
var ulDom = document.querySelector('#todoList')
var butDelet = document.querySelector('#clearButton')
var butsDel = document.querySelectorAll('.btn btn-danger')
var list = []
var tempp;

// butsDel.forEach(function(x){
    // console.log(x)
// })
// butsDel.addEventListener('click',deletitem)
butDelet.addEventListener('click',todoDelet)
function deletitem(){

}
function todoDelet(){
    ulDom.innerHTML = ''
    localStorage.clear()
    list = []
}


butAdd.addEventListener('click',function(){
    let val = String(input.value)
    // console.log(val)
    var listAdd = {
        id:list.length + 1 ,
        name: val,
        comp: false
    }
    input.value = ''
    list.push(listAdd)
    addlocalStorage(list)
    makeDom(list)

})
function addlocalStorage(x){
    localStorage.setItem('list',JSON.stringify(x))

}
window.addEventListener('load',palsjson())
function palsjson(){
    let listtemp = JSON.parse(localStorage.getItem('list'))
    if(listtemp){
    list = listtemp
}else{
    list = []
}
makeDom(list)

}
function makeDom(x){
    let butDelet,butComp,lablename,li
    ulDom.innerHTML = ''
    x.forEach(function(t){
        li = document.createElement('li')
        lablename = document.createElement('label')
        butDelet = document.createElement('button')
        butComp = document.createElement('button')
        lablename.innerHTML = t.name
        butComp.innerHTML = 'Complete'
        butDelet.innerHTML = 'Delete'
        li.className = 'completed well'
        butDelet.className = 'btn btn-danger'
        butComp.className = 'btn btn-success'
        butDelet.setAttribute('onclick','butDelett('+t.id +')') 
        li.append(lablename,butComp,butDelet)
        ulDom.append(li)
        // console.log(ulDom)
    
    })
}
var name ;
function butDelett(s){
    list = JSON.parse(localStorage.getItem('list'))
    var index = list.findIndex(function(x){
        return x.id === s
    })
    list.splice(index,1)
    localStorage.setItem('list',JSON.stringify(list))
    const temp = JSON.parse(localStorage.getItem('list'))
    makeDom(temp)
    console.log(temp);
}


