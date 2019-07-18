console.log("testing")

//////
var squares = [];
var timer;
var index = 0;
var clickIndex = 0;
var clickAllowed = false;
var dynamicElementIds = ["#b0", "#b1", "#b2", "#b3", "body", "#score", "#start", "#reset", "h1", "#normal", "#alternate"]
var themes = ["normal", "alternate"]

//// below code = when start button is clicked, the score-count pops up
var score = 0;

document.querySelector("#start").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector("#score").innerText = "Score: " + score;
	lightSquare();
});

/////function for different themes/versions of the game 

themes.forEach(function(theme) {
	document.querySelector(`#${theme}`).addEventListener("click", function(evt) {
		evt.preventDefault();
		dynamicElementIds.forEach(function(elementId) {
			changeClass(elementId, theme);
		})
	});
})

function changeClass(elementId, newClass) {
	document.querySelector(elementId).className = newClass
}

////When start button is clicked, the first square will light up
function lightSquare() {
	clickedAllowed = false;
	if(timer) {
		clearInterval(timer);
	} 
	index = 0;
	squares.push(Math.floor(Math.random() * 4));
	timer = setInterval(lightUp, 900); //number indicates how long it takes for square to light up after clicking start
}

function lightUp() {
	if(index === squares.length) {
		clearInterval(timer);
		clickAllowed = true;
		return;
	}
	blueClick();
	document.querySelector("#b" + squares[index]).setAttribute('style', 'background-image: linear-gradient(rgb(244,234,236), #F3F2F2)');
	setTimeout (() => {
		document.querySelector("#b" + squares[index]).removeAttribute('style');
		index++;
	}, 200); //the 200 determines the speed/length for how long it highlights for
}

///Responding player click to match the square that lights up
var boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", function(evt) {
		blueClick();
		if (clickAllowed = false) {
			return;
		}
		if ("b" + squares[clickIndex] === evt.target.id) {
			evt.target.setAttribute('style', 'background-image: linear-gradient(rgb(244, 234, 236), #F3F2F2)');
			setTimeout(() => {
				evt.target.removeAttribute('style');
			}, 200);
			clickIndex++
			if (clickIndex === squares.length) {
				increaseScore(); 
				clickIndex = 0;
				lightSquare();
			}
		} else {
			evt.target.setAttribute('style', 'background-image: linear-gradient(rgb(244, 234, 236), rgb(244, 234, 236))');
			setTimeout(() => {
				evt.target.removeAttribute('style');
				alert("You lost. Click reset to play again!");
			}, 200);
		}
	})
}

///Make working score count 
function increaseScore() {
	score++
	document.querySelector('#score').innerText = "Score: " + score;
}


//////Play sound effect when square is clicked
let muteOn = false;

function blueClick() {
	var blueAudio = new Audio("https://www.soundjay.com/button/button-10.mp3");
	if(muteOn === false) {
		blueAudio.play();
	}	
}









