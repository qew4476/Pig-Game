'use strict';


const btnRoll = document.querySelector('.btn-roll');
const diceEl = document.querySelector('.dice');
let current = 0;
let activePlayer = 0;
const score = [0, 0];
const btnHoldArr = document.querySelectorAll('.btn-hold')
let restPlayer = 1;
const currentLabelArr = document.querySelectorAll('.current-label');
const btnNew = document.getElementById('btn-new');
const winNum = [0, 0];


function currentPlus(current, diceNum) {



    //將數字加到current
    current += diceNum;

    //將current數字存到current--x展示出來
    document.getElementById(`current--${activePlayer}`).textContent = current;

    return current;

}

const switchPlayer = function () {

    document.getElementById(`current--${activePlayer}`).textContent = 0;

    current = 0;



    //換人
    activePlayer = activePlayer === 0 ? 1 : 0;
    return 0;


}

const UIselector = function () {

    restPlayer = activePlayer === 0 ? 1 : 0;
    btnHoldArr[restPlayer].disabled = true;
    btnHoldArr[activePlayer].disabled = false;
    currentLabelArr[restPlayer].style.opacity = '0.3';
    currentLabelArr[activePlayer].style.opacity = '1';



}



//Roll the dice
btnRoll.addEventListener('click', function () {


    UIselector();


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
        UIselector();


    }




})

//按下btnHold
for (let i = 0; i < btnHoldArr.length; i++)
    btnHoldArr[i].addEventListener('click', function () {


        score[i] += current;

        document.getElementById(`score--${i}`).textContent = score[i];

        console.log(activePlayer);
        switchPlayer();

        UIselector();



        //判斷勝利
        if (score[i] >= 100) {
            //顯示勝利訊息
            document.getElementById(`score--${i}`).textContent = "勝利！！";
            //Disabled所有按鍵
            btnHoldArr[0].disabled = true;
            btnHoldArr[1].disabled = true;
            btnRoll.disabled = true;
            winNum[i]++;
            document.getElementById(`win--${i}`).textContent = winNum[i];

        }









    })



//重新開始！
btnNew.addEventListener('click', function () {
    activePlayer = 0;
    score[0] = 0;
    score[1] = 0;
    current = 0;
    btnHoldArr[0].disabled = false;
    btnRoll.disabled = false;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    UIselector();


})
