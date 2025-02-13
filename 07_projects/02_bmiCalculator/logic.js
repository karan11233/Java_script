const form = document.querySelector('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const results1 = document.querySelector('#results1')
    const BMI = 0
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give valid weight"
    }
    else{
        const meterHeight = height / 100
        const BMI = (weight / (meterHeight*meterHeight)).toFixed(2)
        results.innerHTML = BMI
        if (BMI < 18.6){ 
            results1.innerHTML = `BMI:${BMI} -  You are under weight`  
        }
        else if (BMI > 18.6 && BMI < 24.9){ 
            results1.innerHTML = `BMI:${BMI} -  You are perfectly fine`  
        }
        else{
            results1.innerHTML = `BMI:${BMI} -  You are over weight`  
        }
    }


})