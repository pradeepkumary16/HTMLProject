// function clickhandler(){
//     alert('welcome');
// }

// 

const button=document.getElementById('clickid');
const buttonss=document.getElementById('loremid');

const buttonhandler=function(){
    alert('welcome');
}

button.addEventListener('click',buttonhandler);
buttonss.addEventListener('click',buttonhandler);


let inputs=document.getElementById('input');

inputs.addEventListener('click',()=>{
    console.log(inputs.value)
})

function red(){
    document.getElementById('inputh3').setAttribute("style","color:red;")
}
function reds(){
    document.getElementById('inputh3').removeAttribute("style","color:red;")
}
function hover(){
    document.getElementById('inputh3').removeAttribute("style","color:red;")
}
