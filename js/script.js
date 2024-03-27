let $ = document
let cg = console.log
let divMenu = $.querySelector(".context-menu")
let ulMenu = $.querySelector(".menu")




$.body.addEventListener("contextmenu",function(event){
    event.preventDefault()

    if(divMenu.style.display === 'none'){
        divMenu.style.display = 'block'
        divMenu.style.left = event.pageX + "px"
        divMenu.style.top = event.pageY + "px"
        
    }else{
        divMenu.style.left = event.pageX + "px"
        divMenu.style.top = event.pageY + "px" 
    }
    
})


$.body.addEventListener("click",function(event){
    divMenu.style.display = 'none'
})


$.body.addEventListener("keydown",function(event){
    
    if(event.key === "Escape"){
        divMenu.style.display = 'none'
    }
})