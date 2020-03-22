const DOC_KEY = "1Qbu3hsAlxNS6ybsjzhLVGFtv287diwiD2tL8ZkMXvOE";
const TYPES = ["Kreativ", "Bewegung", "Denken / Träumen"];

let timeLeft = 0;
let paused = true;
function startGame() {
  document.getElementById("buttons").style.display = "none";
  document.getElementById("instructions").style.display = "none";
	document.getElementById("timer").style.display = "block";
}

function skipGame() {
	location.reload();
}

function setTimer(length) {
  timeLeft = length;
  document.getElementById("timer").style.display = "none";
  document.getElementById("countdown").style.display = "block";
  document.getElementById("minutes").innerText = length;
}

function runTimer(length) {
  if (paused) return;
  document.getElementById("minutes").innerText = length;
	if (length > 0) {
		setTimeout(() => runTimer(length-1), 60000);
  } else {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("success").style.display = "block";
  }
}

function toggleTimer() {
  if (paused) {
    paused = false;
    document.getElementById("start-button").innerText = "pause";
  } else {
    paused = true;
    document.getElementById("start-button").innerText = "start";
  }
	runTimer(timeLeft);
}

window.addEventListener("load", e => {
	GetSheetDone.labeledCols(DOC_KEY, 1).then(sheet => {
		const games = sheet.data;
		const game = games[Math.floor(Math.random() * games.length)];

		document.getElementById("icon").src = game.icon;
		document.getElementById("explanation").innerText = game.explanation;
    document.getElementById("type").innerText = TYPES[game.type - 1];
    document.getElementById("name").innerText = game.name;
	});
});
