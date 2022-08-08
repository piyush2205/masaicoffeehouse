// Add the coffee to local storage with key "coffee"




// .........................

const url=` https://masai-api.herokuapp.com/coffee/menu`
fetch(url)
.then(function(res){
    
     return res.json()
}).then(function(res){
    console.log(res)
    // localStorage.setItem()
    append(res.menu.data)
   
})

.catch(function(err){
    console.log(err)
})

let dataLS=JSON.parse(localStorage.getItem("coffee"))||[]
// .................
function append(data){
    //  console.log(data)
    let container =document.getElementById("menu")
    
    data.forEach(function(el,i){
        let div =document.createElement("div")
        div.setAttribute("class","coffee")

        let img=document.createElement("img")
        img.src=el.image
        let name=document.createElement("h2")
        name.innerText=el.title
        let price=document.createElement("h2")
        price.innerText=el.price

        let button=document.createElement("button")
        button.innerText="Add to Cart"
        button.addEventListener("click",function(){
            addtocart(i)
            if (addtocart(el.id===true))
            {
                dataLS.push(el)
                localStorage.setItem("coffee",JSON.stringify(dataLS));
            }else{
             return;
            }
           
            
        })
 
        div.append(img,name,price,button)
        container.append(div)
    });
}


function addtocart(id){
 
    for(let i=0;i<dataLS.length;i++){
      
        if(dataLS[i].id==id){
            document.getElementById("coffee_count").innerText=id
           
            return false
          
        }
    }
    return true
}

