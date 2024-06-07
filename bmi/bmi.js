const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();//for stopping the input details to go to server
    const height = parseInt(document.querySelector('#height').value);//converts string to integer
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);//taki jada badi value na aye 
      results.innerHTML=`<span>${bmi}</span>`;
    }

})