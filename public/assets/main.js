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

	// add closeProject listener to !.project-card elements
	$(document).click(function(event) {
		if(!$(event.target).closest($('.project-card--expanded')).length || $(event.target).closest($('.cancel')).length) {
			closeProject();
		}
	})
	//TODO add x to close to dom
	$(this).append('<div class="cancel"></div>');
}

//TODO delete FAB
var closeProject = function() {
	$('div').remove('.cancel');
	$('#'+expanded).removeClass('project-card--expanded');
	$('.project-card:not(#'+ expanded + ')')
		.each(function () {
			$(this).css('display', 'block');
		})

	expanded = false;

}

