 document.getElementById('link').addEventListener('click', (e) =>{
    e.preventDefault();//disabled the link to work
 });

 //event propagation
 const cn =document.querySelector('#cn').addEventListener('click',(e)=>{
    console.log('clicked on coding ninjas picture')
    e.stopPropagation();//disabled the event propagation
    
 },false)//event bubbling isme inside to outside display hoga messege


 document.querySelector('#images').addEventListener('click',(e)=>{
       
           const isConfirm = confirm('Are you sure you want to delete this image?')
            if(isConfirm == true){
              if(e.target.tagName ==='IMG'){
                const remove = e.target.parentNode;
                remove.remove();
                console.log('image deleted')
            }
            // else{
            //     console.log('image not deleted')
            // }
           
        }
        console.log("image clicked")
 }, true)//event capturing isme outside to inside display hoga messege


//  document.querySelector('#images').addEventListener('click',(e)=>{
//     if(e.target.tagName ==='IMG'){
//         const remove = e.target.parentNode;
//         remove.remove();
//     }
//     console.log("image clicked")
// }, false)//event bubbling isme inside to outside display hoga messege