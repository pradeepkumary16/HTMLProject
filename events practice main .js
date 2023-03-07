// function clickhandler(){
//     alert('clicked by me')
// }

// let button=document.querySelector('button');

// let clickhandler= function(){
//     console.log('button clicked')
// }

// button.addEventListener('click',clickhandler)


function reds(){

    document.getElementById('h2').style.color="green";

}

function greens(){

    document.getElementById('h2').setAttribute("style","background-color:white;padding:10px;color:yellow")

}

function red()  {
    document.getElementById("textevent").setAttribute("style","color:red")
}
function redd()  {
    document.getElementById("textevent").setAttribute("style","color:rebeccapurple")
}

function green()  {
    document.getElementById("textevent").setAttribute("style","color:green")
}

function yellow()  {
    document.getElementById("textevent").setAttribute("style","color:yellow")
}

function cyan()  {
    document.getElementById("textevent").setAttribute("style","color:cyan")
}


function on(){
    document.getElementById("bulbimg").setAttribute("style","background-color:green;padding:10px;")
}
function off(){
    document.getElementById("bulbimg").removeAttribute("style","background-color:green;padding:10px;")
}


// function imgevent(){
//         setInterval(() => {
//              document.getElementById("bulbimg").setAttribute("style","background-color:blue")
//          },2000)
//     setTimeout(() => {
//         document.getElementById("bulbimg").setAttribute("style","background-color:yellow")
//     },2000)
    
// }

function changecolor(){
    var x=document.getElementById('aaa');
    if (x.style.color=="yellow")
    x.style.color="red";
    else if (x.style.color=="red")
    x.style.color="green";
    else if (x.style.color=="green")
    x.style.color="orange";
    else if (x.style.color=="orange")
    x.style.color="pink";
    else
    x.style.color="yellow";
}

// function changecolors(){
//     const timer=setInterval(()=>{
//         var x=document.getElementById('aaa');
//     if (x.style.color=="yellow")
//     x.style.color="red";
//     else if (x.style.color=="red")
//     x.style.color="green";
//     else if (x.style.color=="green")
//     x.style.color="orange";
//     else if (x.style.color=="orange")
//     x.style.color="pink";
//     else
//     x.style.color="yellow";

//     if(x.style.color=="yellow"){
//         clearInterval(timer)
//     }
//     },1000)
// }


function img(){
    document.getElementById("img1").setAttribute("style","padding:10px;background-color:red")
}
function imgg(){
    document.getElementById("img1").setAttribute("style","padding:none;background-color:none")
}


function f1(){
    document.bgcolor="cyan";
    windows.setTimeout("f2()",1200)
}
function f2(){
    document.bgcolor="purple";
    windows.setTimeout("f3()",1200)
}
function f3(){
    document.bgcolor="green";
    windows.setTimeout("f4()",1200)
}
function f4(){
    document.bgcolor="gray";
    windows.setTimeout("f5()",1200)
}
function f5(){
    document.bgcolor="red";
    windows.setTimeout("f6()",1200)
}
function f6(){
    document.bgcolor="yellow";
    windows.setTimeout("f7()",1200)
}
function f7(){
    document.bgcolor="orange";
    windows.setTimeout("f1()",1200)
}
function f8(){
    window.status="you have clicked second button"
}