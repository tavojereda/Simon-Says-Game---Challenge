import { startGame, playerSays } from "./javascript/main.js";
import { btnAddAnimation } from "./javascript/Buttons.js";
// import { simon, player, level } from "./javascript/main.js";
// import {  simon, player } from "./javascript/main.js"

$(".cta").click((e) => {
	btnAddAnimation(e.currentTarget);
	playerSays($(".cta").index(e.currentTarget));
	// console.log($(".cta").index(e.currentTarget));
});

$("body").keyup((e) => {
	if (e.key === "a") {
		startGame();
	}
});
