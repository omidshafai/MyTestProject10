// var number= 20

// var number2 = "30"
// var nall = prompt("سلام گلای تو خونه محصل های نمونه")
// var nall2 = +(nall)
// var lname = "omid"
// var fname = "Kiany"
// var age = 21
// var nage = "15"
// alert("name : \"lna\"me" +lname +"\n" +"lastname : "+ fname + "\n" + "age : " + age%nage)
// alert(isNaN("12"+32)) // fals
// alert( isNaN( 12/ "32d")) // true
// alert("12s"== 12)
// var age = prompt( "سن خود را وارد کنید :")
// if(age % 2 == 0){
//     alert("zooooog")
// }else alert("faaaaaard")


// var sum = 15



// alert(adad/10)
// switch(sum){
//  case 10 :
//      alert("this is ten")
//         break;
//  case 11 :
//          alert("this is eleven")
//          break;
//  case 12 :
//         alert("you are great")
//          break;
//  case 13 :
//          alert("yavashtar bro mashty")
//          break;
//  default :
//  alert("mamamd")
// }
// function tashkisAdad (age){
//     if(age % 2 == 1){
//             alert("zooooog")
//         }else alert("faaaaaard")
// }
 
 //
 //
//  tashkisAdad()
// var username =  prompt("pleas username : ")
// var pasword = prompt("pleas password : ")
//  if(username.length < 3 || pasword.length > 6){
//     alert("یوزد شما باید بیشتر از 3 کاراکتر باشد و بسورد شما کمتر از 8 کاراکتر ...!")
//  }else alert( "اطلاعات با موفقیت وارد شد .")
//  alert(Boolean("!DD"))
// var test = "        Aahelo  world     "

// console.log(test[2])
// console.log(test.charAt(8))
// console.log(test.charCodeAt(1))
// console.log(test.indexOf("world"))
// console.log(test.concat("undifine"))
// console.log(test.search("w"))
// console.log(test.trim())
// console.log(test.includes("a")) // true || fals
// console.log()
// var sring =  prompt("add number : ")
// var sum = 0
// for(var i = 0; i <sring.length;i++){
//     sum += Number(sring.charAt(i))
// }
// console.log(sum)
// var number = prompt("bede biad : ")
// for(var i = 0 ; i<number.length ; i++){

// }
// console.log(i)

// var temp1 = Number(prompt("enter some namber : "))

// var myArray = []
// var sum = 0
// for(var i = 0 ; i< temp1 ; i++){

//     myArray.push (Number(prompt("pleas Number : ")))
//     sum += myArray[i]
// }
// sum = sum/temp1
// console.log(sum)
// myArray.push(12,13,11)
// myArray.pop()
// myArray.pop()
// myArray.pop()
// myArray.pop()
// myArray.shift()
// myArray.shift()
// myArray.shift()
// myArray.unshift(10,12,25,84)
// var some = Number(prompt("teeedad : "))
// var users = []
// for( var i = 0 ; i<some ; i++ ){
//     var name = prompt("name enter : ")
//     var family = prompt("family enter : ")
//     var age = Number(prompt("age enter : "))
//     var id = i+1
//     users[i]={
//         nameuser: name , 
//         familyuser: family,
//         ageuser: age,
//         userId: id
//     }

// }

// console.log(users)
// var n = ["omid","rad"]
// var x = "kiany mamad name world"
// n.concat("x")
// alert("n")
// n.splice()
// var n1 = x.split(" ")
// alert(n1[1])
// var n2 = x.slice()
// var n2 = x.splice
// for(var i = 0 ; n1.length ; i++){
    // alert(n1[i])
    // if(i = 1){
        // return
    // }
// }
// var lesson = prompt("enter lesson : ")
/////////////////////tamrin 1 ///////////////////////
// var nOfstu = Number(prompt("number of student : "))
// var n = 1
// var ary = []
// for(var i = 0 ; i < nOfstu ; i++){
    // var student = {id : n , nam:"sd", moadel:0}
    // student.nam = prompt("what is student name ??")
    // var tedad = Number(prompt(" number of greats ?"))
    // var sum = 0 
    // var sw = 0
    // for(var j = 0 ; j<tedad ;j++){
        // var sum2 = Number(prompt("Score ??"))
        // sw = 0
        // if( sum2  >  20 ) {
            // alert(" error.!!! ")
            // sw = 1
            // break
        // }else{
        // sum+= sum2
    // }
    // }
    // if(sw == 0){
    // student.moadel = sum/tedad 
// }else if ( sw == 1){
    // student.moadel = "namotabar..."
// }
// ary[i] = student
// sw = 0
// }
// var tex = ""
// for(var i = 0 ; i <nOfstu ; i++){
// tex +=("name : " + ary[i].nam + "     " +"score : " + ary[i].moadel+"\n")
// }
// alert(tex)
/////////////////end////////////
// for(var i = 0 ; i < nOfstu ; i++){
// }
// const aryy = [25,9,18,25,12,30,65,72,20,12]
// aryy.splice( 0,2,33,333,3333)
// aryy.slice()
// console.log(aryy)
// var plus = aryy.map(function(x){
    // return x+2
// })
// console.log(plus)
//////////////////////
// var users = [
    // {id : 1 , name : "majid", age : 12 },
    // {id : 2 , name : "naser", age : 25 },
    // {id : 3 , name : "mamad", age : 13 },
    // {id : 4 , name : "sara" , age : 19 }
// ]
// var bol = Number(prompt("گزینه را وارد کنید :\n 1.add \n 2.remove "))
// if(bol == 1){
// var na = prompt("what is your name ?")
// 
// var num = Number(prompt("what is your age ?"))
// 
// var adduse = { id : users.length+1 , name : na , age : num}
// 
// users.push(adduse)
// 
// }else if(bol == 2){
    // let x = Number(prompt("pleas ID ??"))
    // 
// 
// }else{ alert("داداش داری اشتباه میزنی..!!") }
// 
// console.log(users)
// 
// var xx = users.filter(function(us){
    // return us.age > 15
// })
// console.log(xx)
///////////////////reverse//////////////////////
// var woed = prompt("im reverser : ")
// var splice2 = woed.split("")
// splice2 = splice2.reverse()
// splice2 = splice2.join("")
// console.log(splice2)
//////////////end///////////////

var temp = document.getElementById("tex").innerText = 2532

function f(){

    alert("omid")

}
// let inpot1 = document.querySelectorAll("input1")

function keybord(){
    alert("inpot one")
}



