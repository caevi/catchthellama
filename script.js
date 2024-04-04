var interval = 2000;//sets interval to 2000
var score = 0; //starting score is 0
var timer; //initialize timer
var llamaImg; //initialize llamaImg

window.onload = function start() {
	llamaImg = document.getElementById("llama");
	llamaImg .addEventListener("click", checkTap, false);
	llamaImg .addEventListener("ontouchstart", checkTap, false);
  	update();
}

function update() {
  document.getElementById('scoreLabel').innerHTML = score;
  timer = window.setInterval(moveLlama, interval );
}

function moveLlama(){
	llamaImg.style.left = (Math.random() * 800) + "px";
	llamaImg.style.top = (Math.random() * 400)  + "px";
    llamaImg.addEventListener("click", checkTap, false);
	llamaImg.addEventListener("ontouchstart", checkTap, false);
}

function checkTap() {
	llamaImg.style.display = "none"; // Hide the llama image
	llamaImg.removeEventListener("click", checkTap, false);
	score = score + 10;
	document.getElementById('scoreLabel').innerHTML = score;
	interval = interval - 100;
	clearInterval(timer);
	timer = window.setInterval(moveLlama, interval);
	setTimeout(function() {
        llamaImg.style.display = "block"; // Make the llama image reappear
    }, 2000); // 1000 milliseconds = 1 second
}


function resetSpeed() {
  interval = 2000
  clearInterval(timer);
  timer = window.setInterval(moveLlama, interval);
  alert("Speed is now reset!");
}
  

function resetScore() {
  score = 0;
  document.getElementById('scoreLabel').innerHTML = score;
  alert("Score is now reset!");
}
