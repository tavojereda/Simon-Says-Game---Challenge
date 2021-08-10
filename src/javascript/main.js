import { btnAddAnimation, playAudio } from "./Buttons.js";

const btnColors = [".btn-green", ".btn-red", ".btn-yellow", ".btn-blue"];

let simon = [];
let level = 1;
let count = 0;
let gameOver = false;

/**
 * Generate a random number.
 *
 * Generate a random number from 0 to 3.
 *
 * @return {number} Random number from 0 to 3.
 */
const randomGenerator = () => Math.floor(Math.random() * 4);

/**
 * Change header to current level.
 *
 * Indicate if is player or simon turn and change header to the current level.
 *
 * @param  {number} level Level that will be display.
 * @param  {boolean} simonSays Indicate if is player or simon turn.
 */
const lvlChanger = (level, simonSays) => {
	$("h1").text(`Level ${level}
	${simonSays === true ? "Simon Says" : "Player Says"}`);
};

/**
 * Start the Game
 *
 * Unbind the keyboard event, changes the level and and start the game.
 *
 * Change the header to level 1. {@link lvlChanger}
 *
 * Create the first pattern and display it. {@link simonSays}
 */
export const startGame = () => {
	$("body").unbind("keyup");
	lvlChanger(level, true);
	simonSays();
};

/**
 * Disable and Enable Buttons.
 *
 * Disable the buttons when the pattern is displaying and enable the buttons when the pattern ends.
 *
 * Indicates is player turn. {@link lvlChanger}
 */
const btnDisablerEnabler = () => {
	let buttons = $(".cta");
	buttons.prop("disabled", true);
	setTimeout(() => {
		buttons.prop("disabled", false);
		lvlChanger(level, false);
	}, `${simon.length + 3}000`);
};

/**
 * Main game mechanics.
 * @alias Main-game-mechanics.
 *
 * Create the patterns and shows it.
 *
 * Disable and Enable Buttons. {@link btnDisablerEnabler}
 *
 */
const simonSays = () => {
	btnDisablerEnabler();
	count = 0;
	gameOver = false;
	simon = [...simon, randomGenerator()];
	console.log(simon);
	simon.forEach((element, index) => {
		setTimeout(() => {
			// $(btnColors[element].toString()).trigger("click");
			playAudio(element);
			btnAddAnimation(btnColors[element].toString());
		}, `${index + 2}000`);
	});
};

/**
 * Verify Player Answer
 *
 * @param  {number} buttonIndex
 *
 * Play the audio of wrong answer. {@link playAudio}
 *
 * Change to the next level. {@link lvlChanger}
 *
 * Continius the game. {@link simonSays}
 */
export const playerSays = (buttonIndex) => {
	console.log(`button: ${buttonIndex}`);
	if (buttonIndex != simon[count]) {
		playAudio(4);
		gameOver = true;
		level = 1;
		$("h1").text(`Game Over Press F5 to restart`);
	} else {
		count++;
		if (count === simon.length && gameOver === false) {
			level++;
			lvlChanger(level, true);
			simonSays();
		}
	}
};
