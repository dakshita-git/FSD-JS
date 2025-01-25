// var person={
//     firstName: "John",
//     lastName: "Doe",
//     id:"5566",
//     getinfo:function(){return this.firstName+""+this.lastName;}
// };
// document.getElementById("demo").innerHTML=person.getinfo();

// var person={
//     name: "Ramesh",
//     age: "30",
//     isMarried: "true",
//     address: {
//         street:"Vijay Nagar",
//         flatNO:201,
//     },
//     getInfo: function(){}
// }

// console.log(person)
// console.log(person.name)
// console.log(person["age"])

// var person2=new Object();
// person2.name="Krishnkant"
// person2.age="32"
// person2.isMarried="true"
// person2.address={}
// person2.address.street="Nagar Road"
// person2["address"]["flatNO"]=33
// console.log(person2)
// document.write(person2.name)
// document.write("<br>")
// document.write(person2["age"])

// function myFunction(){
//     var carName="Volvo"
//     document.getElementById("demo1").innerHTML=typeof carName+""+carName
// }

// myFunction()
//  document.getElementById("demo2").innerHTML=typeof carName

// var locales={
//     europe:function(){
//         var myFriend="Monique" 
//         var france=function(){
//             var paris=function(){
//             console.log(myFriend)
//     }
//         paris()
//     }
//     france()
// }
// }
// locales.europe()

// function show(){
//     var a="a is a local outer variable."
//     document.write(a+"<br>")
//     function disk(){
//         var b="b is a local inner variable."
//         document.write(b+"<br>")
//     }
//     disk()
// }
// show()

// var myVar="Global"
// function check(){
//     var myVar="Local"
//     document.write(myVar)
// }
// check()

// var name="John"
// function first(){
//     var a="Hello!"
//     second()
//     var x=a+name
//     console.log(x)
// }
// function second(){
//     var b="Hi!"
//     third()
//     var z=b+name
//     console.log(z)
// }
// function third(){
//     var c="Hey!"
//     var z=c+name
//     console.log(z)
// }
// first()

// var age=20
// if(age>18){
//     document.write("<b> You are eligible to vote.</b>")
// } else{
//     document.write("<b> You are not eligible to vote.</b>")
// }

// var grade="A"
// document.write("Entering switch block<br/>")
// switch(grade){
//     case "A": document.write("Good Job<br/>")
//     break
//     case "B": document.write("Pretty good<br/>")
//     break
//     case "C": document.write("Passed<br/>")
//     break
//     case "D": document.write("Not so good<br/>")
//     break
//     case "F": document.write("Failed <br/>")
//     break
//     default: document.write("Unknown grade<br/>")
// }
// document.write("Exitting switch block")

// var count
// for(count=0;count<10;count++){
//     document.write("Current Count: "+count)
//     document.write("<br/>")
// }
// document.write("Loop Executed")

// for(var i=0;i<=100;i++){
//     if(i%2==0)
//         console.log(i+" is an even number")
//     else
//         console.log(i+" is an odd number")
// }

// var MyArr=["A","B","C"]
// for(var i=0;i<MyArr.length;i++){
//     console.log("The member of MyArr at index "+i+" is "+MyArr[i])
// }

// var count=0
// document.write("Stating Loop<br/>")
// while(count<10){
//     document.write("Current Count: "+count+"<br/>")
//     count++
// }
// document.write("Loop Stopped!")

// function myFunction(){
//     alert("Hello World")
// }

// function sayHello(name,age){
//     document.write(name+" is "+age+" years old.")
// }

// function add(a,b){
//     console.log(a+b)
//     document.write(a+b)
// }
// add(10,20)

// var res=mul(20,30)
// function mul(x,y){
//     return x*y
// }
// document.write(res)

// const square=function(number){
//     return number*number
// }
// const x=square(4)
// console.log(x)

// function myFunction(g1,g2){
//     return g1/g2
// }
// const value=myFunction(8,2)
// console.log(value)

// var add2=(a,b)=>{
//     console.log(a+b)
// }
// add2(30,20)

// var add3=(a,b)=>console.log(a+b)
// add3(102,20)

// var a=10
// var b=20
// var c=30
// var linebreak="<br/>"

// document.write("a+b+c=")
// var result=a+b+c
// document.write(result)
// document.write(linebreak)

// document.write("a+b=")
// var result=a+b
// document.write(result)
// document.write(linebreak)

// document.write("a/b=")
// var result=a/b
// document.write(result)
// document.write(linebreak)

// function myFunc(){
//     var x=5+5
//     console.log(x)
//     var y="5"+5
//     console.log(y)
//     var z="Hello"+5
//     console.log(z)
//     var demoP=document.getElementById("demo1")
//     demoP.innerHTML=x+"<br/>"+y+"<br/>"+z
// }
// myFunc()

// if ("5"==5){
//     console.log("== done")
// } else{
//     console.log("== not done")
// }

// if ("5"===5){
//     console.log("=== done")
// } else{
//     console.log("=== not done")
// }

// var x=6
// var y=3
// console.log(x==10 && y>1) 
// console.log(x==6 || y==6) 
// console.log(x=10 && y>1) 

// var myCollection=[
//     "meera ma'am",
//     true,
//     {
//         name:"Sanjeev",
//         age:30
//     },
//     function(name){
//         console.log(name)
//     },
//     ["Abhishek","Bacchan","Amitabh","Bacchan"]
// ]
// console.log(myCollection)

// function information(Fname,Lname,Lang){
//     if (arguments.length===3){
//         console.log(Fname)
//         console.log(Lname)
//         console.log(Lang)
//     }
// }

// information()
// information("Divye","Kapoor","Hindi")

function over(){
    document.getElementById("myText").style.color="red"
}

function mout(){
    document.getElementById("myText").style.color="magenta"
}

// var retVal=confirm("Do you want to continue?")
// if (retVal===true){
//     alert("User wants to continue.")
// } else{
//     alert("User doesn't want to continue.")
// }

// var retVal=prompt("Enter your name: ","Your name here")
// document.write("Hello "+retVal)

// var question="What is 10+10?"
// var answer=20
// var correct="Correct Answer"
// var wrong="Wrong Answer"
// var response=prompt(question,"0")
// for(count=0;count<3,count++){
//     if(response!=answer){
//         confirm("Wrong. Press OK for another chance")
//         response=prompt(question,"0")
//         if(count===1){
//             alert("Better luck next time")
//         } else{
//             alert("Great you are right")
//             count=3
//         }
//     }
// }

// function Redirect(){
//     window.location="https://www.google.co.in"
// }
// document.write("You will be redirected to google in 10 seconds")
// setTimeout("Redirect",10000)

// function validateForm(){
//     var x=document.forms.myform.phno.value
//     if(x.length!=10){
//         alert("Enter 10 digit mobile number")
//         return false
//     }
//     if(!(x.match(/^[0-9]{10}$/))){
//         alert("Only digits please")
//         return false
//     }
// }