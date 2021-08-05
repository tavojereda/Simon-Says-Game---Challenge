import { startGame, playerSays } from "./javascript/main.js";
// import { btnAddAnimation, playAudio } from "./javascript/Buttons.js";
import { btnAddAnimation } from "./javascript/Buttons.js";

const sounds = [
	"../sounds/green.mp3",
	"../sounds/red.mp3",
	"../sounds/yellow.mp3",
	"../sounds/blue.mp3",
	"../sounds/wrong.mp3",
];

const playAudio = (button) => {
	let audio = new Audio(sounds[button]);
	audio.play();
};

$(".cta").click((e) => {
	let button = $(".cta").index(e.currentTarget);
	playAudio(button);
	btnAddAnimation(e.currentTarget);
	playerSays(button);
});

$("body").keyup((e) => {
	if (e.key === "a") {
		startGame();
	}
});
