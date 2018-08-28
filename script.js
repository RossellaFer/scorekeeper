let listItems = document.querySelectorAll("li");
let scoreDisplay = document.getElementById('scoreDisplay');


let score = 0;
let gameOver = false;


for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener('click', function() {		
		if(this.classList.contains("completed")) {
			this.classList.remove("completed");
			score--;
		}
		else {
			this.classList.add("completed");
			score++;
		}
		scoreDisplay.innerHTML = score;
		if (score === 4) {
			document.getElementById("score").innerHTML = "Congratulations, you completed all tasks today!";
		}
	});
}

