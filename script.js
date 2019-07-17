console.log("testing")

//////
var squares = [];
var timer;
var index = 0;
var clickIndex = 0;
var clickAllowed = false;


//// below code = when start button is clicked, the score-count pops up
var score = 0;

document.querySelector("#start").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector("#score").innerText = "Score: " + score;
	lightSquare();
});

////When start button is clicked, the first square will light up
function lightSquare() {
	clickedAllowed = false;
	if(timer) {
		clearInterval(timer);
	} 
	index = 0;
	squares.push(Math.floor(Math.random() * 4));
	timer = setInterval(lightUp, 1000); //number indicates how long it takes for square to light up after clicking start
}

function lightUp() {
	if(index === squares.length) {
		clearInterval(timer);
		clickAllowed = true;
		return;
	}
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
				// increaseScore(); //make increase score function after this section
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




