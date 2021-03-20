const highScoreList = document.getElementById("highscores-list");
const clearScoresButton = document.getElementById("clear-high-scores")

const highScores = localStorage.getItem("highscores")
const parsedHighScores = JSON.parse(highScores)

if(parsedHighScores) {
    parsedHighScores.forEach(score => {
        const listItem = document.createElement("li")
       
        const nameText = document.createElement("p")
        nameText.classList.add("highscore-name")
        const scoreText = document.createElement("p")
        

        nameText.textContent = score.name;
        scoreText.textContent = score.score;

        

        
        listItem.appendChild(nameText)
        listItem.appendChild(scoreText)
        listItem.classList.add("highscore-item")

        highScoreList.appendChild(listItem)
        console.log(score)
    });
}

function clearHighScores() {
    localStorage.clear('highscores')
    location.reload(true)
}

clearScoresButton.addEventListener("click", clearHighScores)