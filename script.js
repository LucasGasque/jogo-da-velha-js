const player1 = (id) => {
    id.setAttribute('class', 'p1')
    id.innerHTML = 'X'
}

const player2 = (id) => {
    id.setAttribute('class', 'p2')
    id.innerHTML = 'O'
}

const play = (x) =>{
    let turn = 'p1'
    if (turn === 'p1'){
        player1(x)
        turn = 'p2'
    } 

    if(turn === 'p2'){
        player2(x)
        turn = 'p1'
    }
}


const buttons = document.querySelectorAll('div')
const buttonArray = [...buttons]
buttonArray.forEach(button  => {
    button.addEventListener('click', (e)=>{

        play(e.target)
    })
} )

const resetButton = document.querySelector('button')
resetButton.addEventListener('click', () => {
    const div = document.querySelectorAll('div')
    div.forEach(element =>{
        element.innerHTML = ''
        element.classList.remove('p1', 'p2')
    })
})