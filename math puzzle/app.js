const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');
const inputEl = document.getElementById('input');



questionEl.innerText = ` what is ${num1} multiply by ${num2} ?`

const correctAns = num1*num2;

// let score=0; below is every time data fetch from local storage 
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0; // is no score is there then initally score zero
}

scoreEl.innerText = `score: ${score}`;  // this score is 15line var score and 14 line

formEl.addEventListener("submit", ()=>{
    const userAns = inputEl.value;
    // console.log(userAns, typeof(userAns))

    if(userAns == correctAns){
        score++;
        updateLocalstorage()
        // console.log(score)
    }
    else{
        score--;
        updateLocalstorage()
        // console.log(score)

    }
})

function updateLocalstorage (){
    localStorage.setItem("score", JSON.stringify(score))
}