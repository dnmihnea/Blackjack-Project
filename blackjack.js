"use strict";

//Selectors
let dealerArea = document.querySelector("#dealerArea");
let playerArea = document.querySelector("#playerArea");
let cardArea = document.querySelector("#cardArea");
let totalArea = document.querySelector("#totalArea");

let startBtn = document.querySelector("#startBtn");
let hitBtn = document.querySelector("#hitBtn");
let stayBtn = document.querySelector("#stayBtn");
let resetBtn = document.querySelector("#resetBtn");

//Variables

let total = 0;

//Functions

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let start = () =>{
    startBtn.style.display = "none";
    hitBtn.style.display = "inline-block";
    stayBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";




}

let hit = () =>{
    playerArea.style.backgroundColor = 'rgba(116, 171, 253, 0.2)';
    let card = Math.floor(Math.random() * 10) + 1;
    if (card===1 && total<11){
        card = 11;
    }
    total = total + card;
    document.getElementById("playerArea").style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    let cardSubArea = document.createElement("div");
    cardSubArea.setAttribute("class", "cardSubArea");
    cardSubArea.textContent=`${card}`;
    cardArea.appendChild(cardSubArea);

    totalArea.innerHTML=`Total: <br>${total}`;

    if (total>21){
        document.getElementById("hitBtn").disabled = true; 
        document.getElementById("stayBtn").disabled = true; 

        resultArea.innerHTML="Busted!";
    }

}

let stay = () =>{
    dealerArea.style.backgroundColor = 'rgba(255, 123, 123, 0.2)';
    document.getElementById("dealerArea").style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    document.getElementById("playerArea").style.boxShadow = '';
    let dealerTotal = randomIntFromInterval(17, 21);
    dealerArea.innerHTML= `Dealer's Total: <br>${dealerTotal}`;

    document.getElementById("hitBtn").disabled = true; 
    document.getElementById("stayBtn").disabled = true; 

    if (dealerTotal>total){
        resultArea.innerHTML="You Lose!"
    } else if (dealerTotal === total){
        resultArea.innerHTML="Draw!"
    } else {
        resultArea.innerHTML="You Win!"
    }



}

let reset = () =>{
    startBtn.style.display = "inline-block";
    hitBtn.style.display = "none";
    stayBtn.style.display = "none";
    resetBtn.style.display = "none";
    cardArea.innerHTML="";
    totalArea.innerHTML="";
    dealerArea.innerHTML="";
    resultArea.innerHTML="";

    document.getElementById("hitBtn").disabled = false; 
    document.getElementById("stayBtn").disabled = false; 

    playerArea.style.backgroundColor = '';
    dealerArea.style.backgroundColor = '';

    document.getElementById("dealerArea").style.boxShadow = '';
    document.getElementById("playerArea").style.boxShadow = '';

    total = 0;
}

//Event Listeners
startBtn.addEventListener("click", start);
hitBtn.addEventListener("click", hit);
stayBtn.addEventListener("click", stay);
resetBtn.addEventListener("click", reset);