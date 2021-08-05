import { btnAddAnimation } from "./Buttons.js";

const btnColors = [".btn-green", ".btn-red", ".btn-yellow", ".btn-blue"];

let simon = [];
// let player = [];
let level = 1;
let count = 0;
let gameOver = false;

const randomGenerator = () => Math.floor(Math.random() * 4);

const lvlChanger = (level) => {
	console.log(level);
	$("h1").text(`Level ${level}`);
};

export const startGame = () => {
	$("body").unbind("keyup");
	lvlChanger(level);
	simonSays();
};

const simonSays = () => {
	count = 0;
	gameOver = false;
	// let randomNumber = randomGenerator();
	simon = [...simon, randomGenerator()];
	level++;
	simon.forEach((element, index) => {
		setTimeout(() => {
			// $(btnColors[element].toString()).trigger("click");
			btnAddAnimation(btnColors[element].toString());
		}, `${index + 2}000`);
	});
};

export const playerSays = (button) => {
	// while (gameOver == false) {
	// console.log(`count: ${count}`);
	// console.log(`butoon: ${button}`);
	// console.log(`simon: ${simon[count]}`);
	if (button != simon[count]) {
		gameOver = true;
		level = 1;
		count = 0;
		$("h1").text(`Game Over Press F5 to restart`);
	}
	if (gameOver === false) {
		count++;
	}
	if (count === simon.length && gameOver === false) {
		lvlChanger(level);
		simonSays();
	}
	// }
};

// export { startGame, playerSays };
