document.addEventListener('DOMContentLoaded', function() {
	var ball = document.getElementById('ball');
	var ball2 = document.getElementById('ball2');
	var box = document.getElementById('box');
	var box2 = document.getElementById('box2');

	var boxHeight = box.clientHeight - ball.clientHeight;
	var boxWidth = box2.clientWidth - ball2.clientWidth;

function ballUp(){
	ball.style.bottom = boxHeight;
};

function ballRight(){
	ball2.style.left = boxWidth;
};

document.addEventListener('keypress', function(event) {
	console.dir(event);
	if(event.keyCode == 32 || event.which == 32) {
		ballUp();
	}
});

document.addEventListener('keypress', function(event) {
	console.dir(event);
	if(event.keyCode == 13 || event.which == 13) {
		ballRight();
	}
});

	ball.addEventListener('transitionend', function(event) {
	ball.classList.toggle('bottom');
});

	ball2.addEventListener('transitionend', function(event) {
	ball2.classList.toggle('left');
});
});


