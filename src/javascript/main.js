import { btnAddAnimation } from "./Buttons.js";

const btnColors = [".btn-green", ".btn-red", ".btn-yellow", ".btn-blue"];

let simon = [0, 0, 3];
let player = [];
let level = 4;
let count = 0;
let gameOver = false;

export const startGame = () => {
	$("body").unbind("keyup");
	lvlChanger(level);
	simonSays();
};

export const playerSays = (button) => {
	// while (gameOver == false) {
	console.log(simon[count]);
	if (button != simon[count]) {
		gameOver = true;
		level = 1;
		count = 0;
		$("h1").text(`Game Over Press F5 to restart`);
	}
	if (gameOver === false) {
		count++;
	}
	// }
};

const randomGenerator = () => Math.floor(Math.random() * 4);

const lvlChanger = (level) => {
	$("h1").text(`Level ${level}`);
};

const simonSays = () => {
	gameOver = false;
	let randomNumber = randomGenerator();
	simon = [...simon, randomNumber];
	console.log(simon);
	level++;
	simon.forEach((element, index) => {
		setTimeout(() => {
			// $(btnColors[element].toString()).triggerHandler("click");
			// $(btnColors[element].toString()).trigger("click");
			btnAddAnimation(btnColors[element].toString());
		}, `${index}000`);
	});
	count = 0;
};
