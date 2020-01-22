// select all elements to update the inner HTML of our elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const questionImg = document.getElementById("questionImg");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions inside array
let questions = [
    {
        question : "Which one is the first fully supported 64-bit operating system?",
        // adding image to question
        imgSrc : "img/q1.png",
        optionA : "Linux",
        optionB : "Mac",
        optionC : "Windows",
        correct : "A"
    },
    {
        question : "In the process of communication the first step is?",
        imgSrc : "img/q2.png",
        optionA : "Message",
        optionB : "Encoding",
        optionC : "Decoding",
        correct : "B"
    },
    {
        question : "How many printing characters are there in ASCII?",
        imgSrc : "img/q3.png",
        optionA : "62",
        optionB : "79",
        optionC : "94",
        correct : "C"
    }
];

// create variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    questionImg.innerHTML = "<img src="+ q.imgSrc +">";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();
    }
}

// answer is correct, change colour to green
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong, change colour to red
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate percentage for questions answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // Based on scorePerCent, Display image using ternary operator
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}