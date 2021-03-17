const questionSection = document.getElementById('question-section')
const timerLabel = document.getElementById('timer')
const startButton = document.getElementById("start")
const question = document.getElementById("question")
const startGameContainer = document.getElementById("start-game-container")
const userResult = document.getElementById("question-result")

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')



let currentQuestionIndex = 0;
let totalTime = 75;

const quizItems = [{
    q: "How much am I going to make as a dev next year",
    a: "1,000,000",
    options: [
        '500,000',
        '100,000',
        '1,000,000',
        '10,000,000',
    ]
},
{
    q: "Whats my favorite library?",
    a: "react",
    options: [
        'react',
        'node',
        'express',
        'mongodb',
    ]
},
{
    q: "What type of watch am I going to buy next year",
    a: "rolex",
    options: [
        'rolex',
        'apple watch',
        'swiss',
        'g-shock',
    ]
}]



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

    currentQuestionIndex++;
    updateQuestion();
}

function startQuiz() {

    
    questionSection.classList.remove("hidden")
    startGameContainer.classList.add("hidden")
    
    const timer = setInterval(function () {
        timerLabel.textContent = "Time: " + totalTime ;
        totalTime--;

        if (totalTime === -1) {
            clearInterval(timer)
            //end quiz
        }

    }, 1000)
}



startButton.addEventListener('click', startQuiz)

option1.addEventListener('click', handleSubmit)
option2.addEventListener('click', handleSubmit)
option3.addEventListener('click', handleSubmit)
option4.addEventListener('click', handleSubmit)


updateQuestion();

