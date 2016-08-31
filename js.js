document.addEventListener('DOMContentLoaded', function() {
	var ball = document.getElementById('ball');
	var ball2 = document.getElementById('ball2');
	var box = document.getElementById('box');
	var box2 = document.getElementById('box2');
	console.dir(ball.parentNode);

	var boxHeight = box.clientHeight - ball.clientHeight;
	var boxWidth = box2.clientWidth - ball2.clientWidth;

function ballUp(){
	ball.style.bottom = boxHeight;
};

// function ballDown() {
// 	ball.style.bottom = '0px';
// };

function ballRight(){
	ball2.style.left = boxWidth;
};

// function ballLeft() {
// 	ball2.style.left = '0px';
// };

// function ballJump() {
// 	if(parseInt(ball.style.bottom) == 0) { //принимает строку в качестве аргумента и возвращает целое число
// 		ballUp();
// 	} else {
// 		ballDown();
// 	};
// };


// function ballRun() {
// 	if(parseInt(ball2.style.left) == 0) {
// 		ballRight();
// 	} else {
// 		ballLeft();
// 	}
// };

function balls() {
	ballUp();
	ballRight();
	// ballJump();
	// ballRun();
};

document.addEventListener('keypress', balls);

ball.addEventListener('transitionend', function(event) {
	// balls();
	ball.classList.toggle('bottom');
	ball2.classList.toggle('left');
});
});


