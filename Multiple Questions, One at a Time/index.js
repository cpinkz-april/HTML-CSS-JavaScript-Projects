let score = 0;

function updateScore() {
    let scoreDisplay = document.getElementById("score");
    if (scoreDisplay) {
        scoreDisplay.textContent = "Score: " + score;
    }
}

function getAnswerA() {
    let answer = document.getElementById("question");
    answer.textContent = "Correct";
    score++;
    updateScore();
}
function getAnswerB() {
    let answer = document.getElementById("question");
    answer.textContent = "Incorrect";
    updateScore();
}
function getAnswerC() {
    let answer = document.getElementById("question");
    answer.textContent = "Incorrect";
    updateScore();
}

function getAnswer2A() {
    let answer = document.getElementById("question2");
    answer.textContent = "Incorrect";
    updateScore();
}
function getAnswer2B() {
    let answer = document.getElementById("question2");
    answer.textContent = "Incorrect";
    updateScore();
}
function getAnswer2C() {
    let answer = document.getElementById("question2");
    answer.textContent = "Correct";
    score++;
    updateScore();
}

function getAnswer3A() {
    let answer = document.getElementById("question3");
    answer.textContent = "Incorrect";
    updateScore();
}
function getAnswer3B() {
    let answer = document.getElementById("question3");
    answer.textContent = "Incorrect";
    updateScore();
}
function getAnswer3C() {
    let answer = document.getElementById("question3");
    answer.textContent = "Correct";
    score++;
    updateScore();
}

