document.getElementById("confirm").addEventListener("click",function(){
    confirm()
})
let id;
function confirm(){
    id=setInterval(function(){
        clearInterval(id)
        alert(" Your order is accepted ")

    },0000)
    id2=setInterval(function(){
        clearInterval(id2)
        alert("  Your order is being Prepared  ")

    },3000)
    id3=setInterval(function(){
        clearInterval(id3)
        alert("Your order is being packed ")

    },8000)
    id4=setInterval(function(){
        clearInterval(id4)
        alert(" Your order is out for delivery ")

    },10000)
    id5=setInterval(function(){
        clearInterval(id5)
        alert("Order delivered ")

    },12000)
}