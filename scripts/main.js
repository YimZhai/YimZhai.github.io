// generate random number from 1 to 100
let target = Math.floor(Math.random() * 100 + 1);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let value = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '上次猜的数：';
    }
    guesses.textContent += value + ' ';

    if (value === target) {
        lastResult.textContent = '恭喜你猜对了！';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER';
        lastResult.style.backgroundColor = 'red';
        setGameOver();
    } else {
        lastResult.textContent = '你猜错了！';
        lastResult.style.backgroundColor = 'red';
        if (value > target) {
            lowOrHi.textContent = '你猜高了';
        } else {
            lowOrHi.textContent = '你猜低了';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    target = Math.floor(Math.random() * 100) + 1;
}
