// import { greenMP3, redMP3, yellowMP3, blueMP3 } from "url:./sounds.js";
import greenMP3 from "url:../sounds/green.mp3";
import redMP3 from "url:../sounds/red.mp3";
import yellowMP3 from "url:../sounds/yellow.mp3";
import blueMP3 from "url:../sounds/blue.mp3";
import wrongMP3 from "url:../sounds/wrong.mp3";

const sounds = [greenMP3, redMP3, yellowMP3, blueMP3, wrongMP3];

/**
 * Animate Button.
 *
 * Animate the current pressed button.
 *
 * @param  {HTMLElement} buttonElement Current pressed button.
 */
export const btnAddAnimation = (buttonElement) => {
	$(buttonElement)
		.addClass("active")
		.delay(300)
		.queue((next) => {
			$(buttonElement).removeClass("active");
			next();
		});
};

/**
 * Play audio.
 *
 * Play audio of current pressed button.
 *
 * @param  {number} button Index of current button.
 */
export const playAudio = (button) => {
	console.log(sounds[button]);
	let audio = new Audio(sounds[button]);
	audio.play();
};

// $(".cta").click(function(){
//     $(this).addClass("active").delay(300).queue(function(next){
//         $(this).removeClass("active");
//         next();
//     });
// });
// export { buttonAnimation };
