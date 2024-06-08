const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.round(Math.random() * 16)];
    }
    return color;
}
let id;
const startChanging=()=>{
    if(!id){//better practice 
    id =setInterval(change,500)
    }
   function change(){
     document.body.style.backgroundColor= randomColor();
   }
    
}
const stopChanging=()=>{
    clearInterval(id)
    id =null;//flushes out the value after stop and hence no  over riding
}

document.querySelector('#start').addEventListener('click',startChanging);

document.querySelector('#stop').addEventListener('click',stopChanging);
