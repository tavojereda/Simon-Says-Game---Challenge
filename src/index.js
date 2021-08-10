import { startGame, playerSays } from "./javascript/main.js";
import { playAudio, btnAddAnimation } from "./javascript/Buttons.js";

const buttons = $(".cta");

/**
 * Button Behavior.
 *
 * Add click event to the buttons, plays tha audio button verify player answer.
 *
 * Plays audio. {@link playAudio}
 *
 * Plays button animation. {@link btnAddAnimation}
 *
 * Verify player answer. {@link playerSays}
 */
buttons.click((e) => {
	let buttonIndex = buttons.index(e.currentTarget);
	playAudio(buttonIndex);
	btnAddAnimation(e.currentTarget);
	playerSays(buttonIndex);
});

/**
 * Launch Game.
 *
 * Launch the game by pressing the A key.
 *
 * Start the game. {@link startGame}
 */
$("body").keyup((e) => {
	if (e.key === "a") {
		startGame();
	}
});
