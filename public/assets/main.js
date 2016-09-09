window.onload = function() {
	$('.project-card').click(openProject);
}
var expanded = false;
var openProject = function() {
	expanded = this.id;
	$(this).addClass('project-card--expanded');

	// hide all non-expanded projects
	$('.project-card:not(#'+ this.id + ')')
		.each(function () {
			$(this).css('display', 'none');
		})

	// add closeProject listener to outside
	$(document).click(function(event) {
		if(!$(event.target).closest($('.project-card--expanded')).length) {
			closeProject();
		}
	})
	// stops close if is expanded card
}

//TODO
var closeProject = function() {
	$('#'+expanded).removeClass('project-card--expanded');
	$('.project-card:not(#'+ expanded + ')')
		.each(function () {
			$(this).css('display', 'block');
		})

	expanded = false;

}

