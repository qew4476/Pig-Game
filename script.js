'use strict';


const btnRoll = document.querySelector('.btn-roll');
const diceEl = document.querySelector('.dice');
let current = 0;
let activePlayer = 0;
const score = [0, 0];
const btnHoldArr = document.querySelectorAll('.btn-hold')
let restPlayer = 1;


function currentPlus(current, diceNum) {



    //將數字加到current
    current += diceNum;

    //將current數字存到current--x展示出來
    document.getElementById(`current--${activePlayer}`).textContent = current;
    console.log(`current--${activePlayer}`);
    return current;

}

const switchPlayer = function () {

    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //把currentScore歸零
    currentPlus(0, 0);



    //換人
    activePlayer = activePlayer === 0 ? 1 : 0;
    return 0;


}

//Roll the dice
btnRoll.addEventListener('click', function () {

    restPlayer = activePlayer === 0 ? 1 : 0;

    // if (!btnHoldArr[restPlayer].contains('disabled'))
    btnHoldArr[restPlayer].classList.add('disabled');
    btnHoldArr[activePlayer].classList.remove('disabled');





    //show the diceImg
    diceEl.classList.remove('hidden');

    //骰骰子，不需要再轉換Math(diceNum);
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    //展示骰到的圖
    diceEl.src = `dice-${diceNum}.png`;


    //計分，可以繼續Roll
    if (diceNum != 1) {

        current = currentPlus(current, diceNum);

        //骰到1 diceNum=1：換人玩(並將current加到score)。
    } else {




        current = switchPlayer();
        //換人玩



    }





})

