// let randomColor = ["red","blue","green","yellow", "gray","pink"]
// let city = {
//     usa :["victoria","landan","meczik","britania","norvxh"],
//     iran:["mashad","tehran ", "birgand","holand","grin land"],
//     canada: ["torento","berlin","kodact"]
// }

// let cont = document.querySelector('.cont')
// let cont2 = document.querySelector('.cont2')


// cont.addEventListener('change',function(){
//     let indexcity = cont.value
//     cont2.innerHTML = ''
//     index = city[indexcity]
//     index.forEach(function(citis){
//         cont2.innerHTML += '<option>'+citis+'</option>'
//     });

// })
// setInterval(function(){
//     let numberRandom = Math.floor(Math.random() * 255)
//     let numberRandom1 = Math.floor(Math.random() * 255)
//     let numberRandom2 = Math.floor(Math.random() * 255) 
//     document.body.style.backgroundColor = "rgb(" +numberRandom +"," +numberRandom1+","+numberRandom2+")"
// },10000)
///////////////////// select ////////////////////

// setInterval(function(){
//     document.body.style.backgroundColor = 
// },10000)
// let ditaCity = [
    // {city :"tehran",weather : "sunny", temp : "27", ss : "15"},
    // {city :"mashad",weather : "wenthy", temp : "12", ss : "19"},
    // {city :"tabriz",weather : "snouy", temp : "55", ss : "23"},
    // {city :"esfhan",weather : "barany", temp : "34", ss : "14"}
// ]
// let temp = document.getElementById("inpot3")
// let butonSearch = document.getElementById("search")
// butonSearch.addEventListener('click',function(){
    // let valuetemp = temp.value
    // let inpot3 = ditaCity.find(function(item){
        // return item.city === valuetemp
    // })
    //// let dita3 = ditaCity[value3] //
    // 
    // if(inpot3){
        // document.querySelector(".city").innerHTML = "city is :" + inpot3.city
        // document.querySelector(".temp").innerHTML = "temp is :" + inpot3.temp
        // document.querySelector(".wead").innerHTML = "weather is : " + inpot3.weather
        // document.querySelector(".ssss").innerHTML = "chertopert :" + inpot3.ss
// 
    // }else{
// 
        // alert("Eroor....!!!")
    // }
    // 
// })
/////////////// bala weaderCity ///////////////
// let input4 = document.querySelector('.inpot4')
// 
// let ul = document.querySelector('.ul')
// function addLi(){
    // let value4 = input4.value
    // let newLi = document.createElement("li")
    // newLi.innerHTML = value4
    // ul.appendChild(newLi)
    // console.log(newLi)
// }
/////////////// bala appendChild //////////////
// let firstValue = document.querySelector('.c')
// let cecondValue = document.querySelector('.f')
// let p = document.querySelector('.text')
// let inpot5 = document.querySelector('.inpot5')
// let reset = document.querySelector('.reset')
// let convert = document.querySelector('.convert')
// let change = document.querySelector('.change')

// reset.addEventListener('click',function reast(){
//     let value = Number(inpot5.value)
//     p.innerHTML = "pleaz enter..."
//     inpot5.value = ""
// })
// convert.addEventListener('click',function convert(){
//     let value = Number(inpot5.value)
//      if(isNaN(value) || value === ' '){
//         p.innerHTML = "dary eshtebah mizany dash :("
        
//      }else{
//     if(firstValue.innerHTML == 'c'){
//         value += 32
//         p.innerHTML = "convet is : " + value
//     }else{
//         value -= 32
//         p.innerHTML = "convet is : " + value
//     }}
// })
// change.addEventListener('click',function change(){
//     console.log("chande")
//     if(firstValue.innerHTML == 'c'){
//     firstValue.innerHTML = 'f'
//     cecondValue.innerHTML = 'c'
//     inpot5.setAttribute('placeholder','f')
//     document.title = "convert c to f"
//     }else{
//         firstValue.innerHTML = 'c'
//         cecondValue.innerHTML = 'f'
//         inpot5.setAttribute('placeholder','c')
//         document.title = "convert f to c"
//     }
    
 ///////////////// bala--convrt & change & reaset /////////////////
// let location = document.querySelector(".loc")
// let key = document.querySelector('.key')
// let codeasky = document.querySelector('.codeasky')
// let which = document.querySelector('.which')
// let header = document.querySelector('.head')
// let temp = document.querySelector('.loc')
// 
// document.body.addEventListener('keydown',function(info){
    // info.preventDefault()
    // which.innerHTML = "whichc : " + info.which
    // codeasky.innerHTML = "codeasky :" + info.which
    // temp.innerHTML = "location : " + info.location
    // key.innerHTML = "keyName : " + info.code
    // 
    //  
    // console.log(info)
// })
/////////////// info key kibord/////////////////
// const x = new XMLHttpRequest();
// x.open('GET','https://web.gap.im/#/im?p=@web')
// x.onload = function(){
// const req = JSON.parse(this.response)
// const users = res.data
// let temp = '<ul>'
// let lis = users.ma

// }
// console.log(x)

////bala pars kadan v ferestadan be server(GET)v gerftan v tabdil be JSON/////
// class Point {
    // 
    // constructor(x,y){
        // this.x = x;
        // this.y = y;
    // }
    // 3
    // static distans(a,b){
        // 
        // const f1 = (b.x-a.x)*2
        // const f2 = (b.y-a.y)*2
        // return (f1+f2)
    // }
    // 
// }
// 
// const p1 = new Point(10,30);
// const p2 = new Point(12,40);
// 
// console.log(Point.distans(p1,p2))
// 
// console.log(typeof p1)
/////////////shay grayy and class////////////////
let div1 = document.querySelector('.div12')
// let texe = div1.parentElement
// console.log(div1.nextElementSibling)
// console.log(div1.nextSibling)
// console.log(texe.previousElementSibling)
// console.log(texe.childNodes)
// console.log(div1.parentElement)
// console.log(div1.parentNode)
// console.log(div1.previousSibling)
/////////////////////////////////////
// let lis = document.querySelectorAll('.li')
// 
// console.log(lis)
// 
// lis.forEach(function (evet) {
    // evet.addEventListener('click',function(){
        // evet.parentElement.remove()
        // console.log(lis);
    // })
// })
///////////////// bala remove element ////////////////
// function httpClient('GET','y'){

// const stup = function(s){
// return new Promise (function (res , rej) {
// if(s < 0){
    // rej('erroorrrr') }
// setTimeout(function(){
// res('anjam shode'),(s * 1000)
// 
// })
// })
// }
// console.log(stup(2))
/////////////////promise///////////////
// }

// let ul = document.querySelector('.ul')
// let bot = document.createElement('button')
// let inpot6 = document.createElement('input')
// inpot6.setAttribute('type',"text")
// inpot6.setAttribute('placeholder',"Text")
// 
// bot.innerHTML = 'make'
// ul.prepend(bot)
// ul.appendChild(inpot6)
// 
// inpot6.addEventListener('keydown',function (event){
// if(event.keyCode === 13){
//    let value1 = inpot6.value
//    inpot6.value = ''
//    let li = document.createElement('li')
//    li.innerHTML = value1
//    let delet = document.createElement("button")
//    delet.innerHTML = '  22'
//    delet.style.margin = '8px'
//    li.append(delet)
//    ul.append(li)
//    console.log(delet)
//    delet.addEventListener('click',function(){
    // delet.parentElement.remove()
// })}
// })
// document.querySelector('.body')
// 
// console.log(inpot6)
function tex (){
    console.log('Rrith click')
}
document.body.setAttribute('oncontextmenu','clickHandler(event)')
function clickHandler(event){
    console.log(event);
}

