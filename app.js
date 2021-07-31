const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');

let score = document.querySelector('#score');

let result = 0
let currentTime = timeLeft.textContent


function randomSquare()
{
    square.forEach(className =>
    {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]

    console.log(`random position ${randomPosition}`)
    randomPosition.classList.add('mole')

    //assin the id of the randomPosition to hitposition for us to use later
    hitPosition = randomPosition.id;



}


square.forEach(id =>
{
    id.addEventListener('mouseup', () =>
    {
        if (id.id == hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})



function moveMole()
{
    let timerId = null

    timerId = setInterval(randomSquare, 1000)
}


moveMole();


function countDown()
{
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('game over')
    }
}

let timerId  = setInterval(countDown, 1000)

