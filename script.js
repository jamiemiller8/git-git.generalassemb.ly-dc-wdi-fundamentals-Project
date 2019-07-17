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
	timer = setInterval(lightUp, 1000);
}

function lightUp() {
	if(index === squares.length) {
		clearInterval(timer);
		clickAllowed = true;
		return;
	}
	document.querySelector("#blue", "#red", "#yellow", "#green" + squares[index]).setAttribute('style', 'background-image: linear-gradient(rgb(205,220,250), #F3F2F2)');
	setTimeout (() => {
		document.querySelector("#blue", "#red", "#yellow", "#green" + squares[index]).removeAttribute('style');
		index++;
	}, 200); //the 200 determines the speed/length for how long it highlights for
}





