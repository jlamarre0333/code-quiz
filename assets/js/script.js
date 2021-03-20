import quizItems from "./quizdata.js"
const questionSection = document.getElementById('question-section')
const timerLabel = document.getElementById('timer')
const startButton = document.getElementById("start")
const question = document.getElementById("question")
const startGameContainer = document.getElementById("start-game-container")
const userResult = document.getElementById("question-result")
const endGame = document.getElementById("end-game")
const initialsInput = document.getElementById("initials-input")
const submitHighScore = document.getElementById("submit-high-score")
const highScoreLabel = document.getElementById("high-score-label")

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')



let currentQuestionIndex = 0;
let totalTime = 75;
let quizEnd = false;
let finalScore = null;





function updateQuestion() {

    const currentQuestion = quizItems[currentQuestionIndex]

    option1.value = currentQuestion.options[0]
    option1.textContent = currentQuestion.options[0]

    option2.value = currentQuestion.options[1]
    option2.textContent = currentQuestion.options[1]

    option3.value = currentQuestion.options[2]
    option3.textContent = currentQuestion.options[2]

    option4.value = currentQuestion.options[3]
    option4.textContent = currentQuestion.options[3]

    question.textContent = currentQuestion.q
}


function handleSubmit(event) {


    const userChoice = event.target.value;

    const currentQuestion = quizItems[currentQuestionIndex]

    if (userChoice === currentQuestion.a) {
        userResult.textContent = "Correct"
    } else {
        userResult.textContent = "Wrong"
        totalTime = totalTime - 10;
    }
    if (currentQuestionIndex >= quizItems.length - 1) {
        //end the quiz
        quizEnd = true; 
        finalScore = totalTime;

        highScoreLabel.textContent = "Your high score is: " + finalScore;


        questionSection.classList.add("hidden")
        endGame.classList.remove("hidden")
        console.log("end of the quiz")

    } else {
        currentQuestionIndex++;
        updateQuestion();
    }

}

function startQuiz() {


    questionSection.classList.remove("hidden")
    startGameContainer.classList.add("hidden")

    const timer = setInterval(function () {
        timerLabel.textContent = "Time: " + totalTime;
        totalTime--;

        if (totalTime === -1 || quizEnd === true) {
            clearInterval(timer)
            //end quiz
        }

    }, 1000)
}

function handleHighScoreSubmit() {

    const storedHighScores = localStorage.getItem("highscores")
    const parsedHighScores = JSON.parse(storedHighScores)
    const initials = initialsInput.value;

    const score = {
        name: initials,
        score: finalScore
    }

    if (parsedHighScores) {
        const updatedHighScores = [...parsedHighScores, score]
        localStorage.setItem("highscores", JSON.stringify(updatedHighScores))

    } else {
        const newHighScores = [score]
        localStorage.setItem("highscores", JSON.stringify(newHighScores))
    }
}



startButton.addEventListener('click', startQuiz)

option1.addEventListener('click', handleSubmit)
option2.addEventListener('click', handleSubmit)
option3.addEventListener('click', handleSubmit)
option4.addEventListener('click', handleSubmit)
submitHighScore.addEventListener('click', handleHighScoreSubmit)


updateQuestion();

