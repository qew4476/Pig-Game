'use strict';


const btnRoll = document.querySelector('.btn-roll');
const diceEl = document.querySelector('.dice');
let current = 0;
let activePlayer = 0;

const score = [0, 0];

const switchPlayer = function () {




    //換人
    activePlayer = activePlayer === 0 ? 1 : 0;
    // if (activePlayer == 0) {
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;

    // }

}

//Roll the dice
btnRoll.addEventListener('click', function () {


    //show the diceImg
    diceEl.classList.remove('hidden');

    //骰骰子，不需要再轉換Math(diceNum);
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    //展示骰到的圖
    diceEl.src = `dice-${diceNum}.png`;


    //計分，可以繼續Roll
    if (diceNum != 1) {

        //將數字加到current
        current += diceNum;

        //將current數字存到current--x展示出來
        document.getElementById(`current--${activePlayer}`).textContent = current;
        console.log(`current--${activePlayer}`);


        //骰到1 diceNum=1：換人玩(並將current加到score)。
    } else {


        //換人玩



    }





})

