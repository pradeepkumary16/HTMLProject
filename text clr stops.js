 
// //  function changecolor(){
// //     var x=document.getElementById('txt');
// //     if (x.style.color=="yellow")
// //     x.style.color="red";
// //     else if (x.style.color=="red")
// //     x.style.color="green";
// //     else if (x.style.color=="green")
// //     x.style.color="orange";
// //     else if (x.style.color=="orange")
// //     x.style.color="pink";
// //     else
// //     x.style.color="yellow";
// // }

// // let timer= setInterval(()=>{

// //     var x=document.getElementById('txt');
// //     if (x.style.color=="yellow")
// //     x.style.color="red";
// //     else if (x.style.color=="red")
// //     x.style.color="green";
// //     else if (x.style.color=="green")
// //     x.style.color="orange";
// //     else if (x.style.color=="orange")
// //     x.style.color="pink";
// //     else
// //     x.style.color="yellow";
    
// // },1000)

// const button=document.querySelector('button');

// const buttonClickHandler= function changecolor(){
//         var x=document.getElementById('txt');
//         if (x.style.color=="yellow")
//         x.style.color="red";
//         else if (x.style.color=="red")
//         x.style.color="green";
//         else if (x.style.color=="green")
//         x.style.color="orange";
//         else if (x.style.color=="orange")
//         x.style.color="pink";
//         else
//         x.style.color="yellow";
//     }

// button.addEventListener('click',buttonClickHandler);

// setTimeout(()=>{
//     button.removeEventListener('click',buttonClickHandler)
// },100000); 


// const listItems=document.querySelectorAll('li');

// const ul=document.querySelectorAll('ul');

// ul.addeventlistner('click',(e)=>{
//     e.target.closest('li').classlist.toggle('highlight')
// })