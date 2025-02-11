const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const txtbutton = document.querySelectorAll('.txtbutton')
const text = document.querySelectorAll('.text')



buttons.forEach( (button)=> {
    button.addEventListener('click', (e)=> {
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})


txtbutton.forEach( (button)=> {
    button.addEventListener('click', (e)=> {
        if(e.target.id === 'grey'){
            text.forEach( (txt)=> {
                txt.style.color = e.target.id
            })
        }
        if(e.target.id === 'white'){
            text.forEach( (txt)=> {
                txt.style.color = e.target.id
            })
        }
        if(e.target.id === 'blue'){
            text.forEach( (txt)=> {
                txt.style.color = e.target.id
            })
        }
        if(e.target.id === 'yellow'){
            text.forEach( (txt)=> {
                txt.style.color = e.target.id
            })
        }
    })
})
