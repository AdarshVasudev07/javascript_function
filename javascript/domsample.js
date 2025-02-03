// let button = document.getElementById("colorbtn")

// button.addEventListener("click",function(){
//     document.body.style.backgroundColor="red"
// })

// let change = document.getElementById("backclr")

// change.addEventListener("click",function(){
//     document.body.style.background=""
// })
// let sample = document.getElementById("sample")

// sample.addEventListener("mouseover",function(){
//     sample.style.backgroundColor="red"
// })


// sample.addEventListener("mouseleave",function(){
//     sample.style.backgroundColor="aqua"
// })


let sample =document.getElementById("type")
let second = document.getElementById("para")

let para =document.getElementById("btn")
para.addEventListener("click",function(){
    second.textContent=sample.value
})

