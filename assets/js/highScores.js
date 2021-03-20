const highScoreList = document.getElementById("highscores-list");

const highScores = localStorage.getItem("highscores")
const parsedHighScores = JSON.parse(highScores)

if(parsedHighScores) {
    parsedHighScores.forEach(score => {
        const listItem = document.createElement("li")
        const nameLabel = document.createElement("p")
        const scoreLabel = document.createElement("p")

        nameLabel.textContent = score.name;
        scoreLabel.textContent = score.score;
        listItem.appendChild(nameLabel)
        listItem.appendChild(scoreLabel)

        highScoreList.appendChild(listItem)
        console.log(score)
    });
}