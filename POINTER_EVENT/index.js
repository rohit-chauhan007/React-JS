window.addEventListener("pointerup",(e)=>{
    console.log("pointer up",e.clientX,e.clientY)
})
window.addEventListener("pointerdown",(e)=>{
    console.log("pointer down " ,"x =" ,e.clientX,e.clienty);
})
window.addEventListener("pointermove",(e)=>{
    console.log("pointer moves =","x =" ,e.clientX , "y =" ,e.clientY)
})