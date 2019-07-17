console.log("testing")

//////
var score = 0;

document.querySelector("#start").addEventListener("click", function(evt) {
	evt.preventDefault();
	document.querySelector("#score").innerText = "Score: " + score;
});

