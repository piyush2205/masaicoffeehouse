// On clicking remove button the item should be removed from DOM as well as localstorage.

let total_price =0
function append(){
    // console.log(data)
    let dataLS=JSON.parse(localStorage.getItem("coffee"))||[]

    let container =document.getElementById("bucket")
    total_price=0
    dataLS.forEach(function(el,index){
      
;        let div =document.createElement("div")
        div.setAttribute("class","coffee")
      total_price+= +el.price
        let img=document.createElement("img")
        img.src=el.image
        let name=document.createElement("h2")
        name.innerText=el.title
        let price=document.createElement("h2")
        price.innerText=el.price

        let button=document.createElement("button")
        button.innerText="Remove "
        button.setAttribute("id","remove_coffee")
        button.addEventListener("click",function(){
            remove(dataLS,index)
        })

 
        div.append(img,name,price,button)
        container.append(div)
    });


   let  container2=document.getElementById("total_amount")
   container2.innerText=total_price

}

append()

document.getElementById("confirm_checkout").addEventListener("click",function(){
    checkout()
})

function checkout(){
    window.location.href="checkout.html"
}

function remove(dataLS,index){
    
    dataLS.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(dataLS))
    window.location.reload()
}