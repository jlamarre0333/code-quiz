const questionForm = document.getElementById('question-form')
const timerLabel = document.getElementById('timer')
const startButton = document.getElementById("start")
const question = document.getElementById("question")

const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')

const quizItem = {
    q: "How much am I going to make as a dev next year" ,
    a: "1,000,000",
    options: [
        '500,000',
        '100,000',
        '1,000,000',
        '10,000,000',
    ]
}

option1.value = quizItem.options[0]
option1.textContent = quizItem.options[0]

option2.value = quizItem.options[1]
option2.textContent = quizItem.options[1]

option3.value = quizItem.options[2]
option3.textContent = quizItem.options[2]

option4.value = quizItem.options[3]
option4.textContent = quizItem.options[3]

question.textContent = quizItem.q

function handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit called', event.submitter.value)
}

function startTimer() {

    let totalTime = 75;

   const timer = setInterval(function() {
        timerLabel.textContent = totalTime + "seconds";
        totalTime--;

        if(totalTime === -1) {
            clearInterval(timer)
            //end quiz
        }

    }, 1000)
}

questionForm.addEventListener('submit', handleSubmit)

startButton.addEventListener('click', startTimer)

