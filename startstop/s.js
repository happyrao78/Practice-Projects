

let manage;
const start =()=>{
    const print = document.querySelector('#heading')
    print.innerHTML= Math.round(Math.random()*100+1);
    // print.innerHTML=["happy","sad",""].map((e)=>e)[Math.round(Math.random())]
}



document.querySelector('#start').addEventListener('click',()=>{
    if(!manage){
    manage=setInterval(start,100)
    }
})
document.querySelector("#stop").addEventListener('click',()=>{
    clearInterval(manage)
    manage = null;

})

