
let timer=setTimeout(function()
{
    console.log("hi-1")
}, 2000)


let timer2=setTimeout(function()
{
    console.log("hi-1")
}, 3000)
clearTimeout(timer2)


let timer3=setInterval(function()
{
    console.log("hi-2")
},1000)
clearInterval(timer2)



let timer4=setInterval(function()
{
    console.log("hi-2")
},1000)


setTimeout(function() {
    clearInterval(timer4)
},90000)