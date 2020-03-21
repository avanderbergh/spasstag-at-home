const DOC_KEY = "1Qbu3hsAlxNS6ybsjzhLVGFtv287diwiD2tL8ZkMXvOE";
const TYPES = ["Kreativ", "Bewegung", "Denken / Träumen"];

let timeLeft = 0;
function startGame() {
	document.getElementById("instructions").style.display = "none";
	document.getElementById("timer").style.display = "block";
}

function skipGame() {
	location.reload();
}

function setTimer(length) {
	timeLeft = length;
}

function runTimer(length) {
	length = length - 1;
	document.getElementById("minutes").innerText = length;
	if (length > 0) {
		setTimeout(() => runTimer(length), 60000);
	}
}

function startTimer() {
	runTimer(timeLeft);
}

window.addEventListener("load", e => {
	GetSheetDone.labeledCols(DOC_KEY, 1).then(sheet => {
		const games = sheet.data;
		const game = games[Math.floor(Math.random() * games.length)];

		document.getElementById("icon").src = game.icon;
		document.getElementById("explanation").innerText = game.explanation;
		document.getElementById("type").innerText = TYPES[game.type - 1];
	});
});
