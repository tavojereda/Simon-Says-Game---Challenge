

export const btnAddAnimation = (button) => {
	$(button)
		.addClass("active")
		.delay(300)
		.queue((next) => {
			$(button).removeClass("active");
			next();
		});
};

// $(".cta").click(function(){
//     $(this).addClass("active").delay(300).queue(function(next){
//         $(this).removeClass("active");
//         next();
//     });
// });
// export { buttonAnimation };
