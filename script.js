const player1 = (id) => {
    if(id.innerHTML === ''){
        id.setAttribute('class', 'p1')
        id.innerHTML = 'X'
    }
}

const player2 = (id) => {
    if(id.innerHTML === ''){
        id.setAttribute('class', 'p2')
        id.innerHTML = 'O'
    }
}

let turn = 'p1'
const play = (x) =>{
    if (turn === 'p1'){
        player1(x)
        turn = 'p2'
    } else {
        player2(x)
        turn = 'p1'
    }
}

const buttons = document.querySelectorAll('div')
const buttonArray = [...buttons]
buttonArray.forEach(button  => {
    button.addEventListener('click', (e)=>{
        play(e.target)
        win()
    })
})

const win = () => {
    const buttons = document.querySelectorAll('div')
    const b = [...buttons]
    if((b[0].innerHTML === 'X' && b[1].innerHTML === 'X' && b[2].innerHTML === 'X') ||
       (b[3].innerHTML === 'X' && b[4].innerHTML === 'X' && b[5].innerHTML === 'X') ||
       (b[6].innerHTML === 'X' && b[7].innerHTML === 'X' && b[8].innerHTML === 'X') ||
       (b[0].innerHTML === 'X' && b[3].innerHTML === 'X' && b[6].innerHTML === 'X') ||
       (b[1].innerHTML === 'X' && b[4].innerHTML === 'X' && b[7].innerHTML === 'X') ||
       (b[2].innerHTML === 'X' && b[5].innerHTML === 'X' && b[8].innerHTML === 'X') ||
       (b[0].innerHTML === 'X' && b[4].innerHTML === 'X' && b[8].innerHTML === 'X') ||
       (b[6].innerHTML === 'X' && b[4].innerHTML === 'X' && b[2].innerHTML === 'X')){
           return window.alert('Parabens Player 1 Venceu!!!!')
    }

    if((b[0].innerHTML === 'O' && b[1].innerHTML === 'O' && b[2].innerHTML === 'O') ||
       (b[3].innerHTML === 'O' && b[4].innerHTML === 'O' && b[5].innerHTML === 'O') ||
       (b[6].innerHTML === 'O' && b[7].innerHTML === 'O' && b[8].innerHTML === 'O') ||
       (b[0].innerHTML === 'O' && b[3].innerHTML === 'O' && b[6].innerHTML === 'O') ||
       (b[1].innerHTML === 'O' && b[4].innerHTML === 'O' && b[7].innerHTML === 'O') ||
       (b[2].innerHTML === 'O' && b[5].innerHTML === 'O' && b[8].innerHTML === 'O') ||
       (b[0].innerHTML === 'O' && b[4].innerHTML === 'O' && b[8].innerHTML === 'O') ||
       (b[6].innerHTML === 'O' && b[4].innerHTML === 'O' && b[2].innerHTML === 'O')){
           return window.alert('Parabens Player 2 Venceu!!!!')
    } 
}

const resetButton = document.querySelector('button')
resetButton.addEventListener('click', () => {
    const div = document.querySelectorAll('div')
    div.forEach(element =>{
        element.innerHTML = ''
        element.classList.remove('p1', 'p2')
    })
})