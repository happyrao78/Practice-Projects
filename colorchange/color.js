 const buttons= document.querySelectorAll('.button')
 const body = document.querySelector('body')
 buttons.forEach(function (button){
    button.addEventListener('click',function(e){
        console.log(e.target)
        console.log(e)
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = 'grey'
        // }
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor='grey'
                break;
                case "blue":
                    body.style.backgroundColor="blue"
                    break;
                    case "yellow":
                    body.style.backgroundColor="yellow"
                    break;
                    case "red":
                    body.style.backgroundColor="red"
                    break;
                    case "purple":
                    body.style.backgroundColor="purple"
                    break;
                    case "white":
                    body.style.backgroundColor="white"
                    break;
        }

    })
 })