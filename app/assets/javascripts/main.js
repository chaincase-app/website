window.onload = function() {
  var cards = queryAll('.project-card');
  [].forEach.call(cards, function(card) {
    card.addEventListener('click', openProject);
  })
}

var closeProjectListener = function(e) {
  if(!e.target.closest('.project-card--expanded') || e.target.closest('.cancel')) {
    closeProject(e);
  }
}


var expanded = false;
var openProject = function(e) {
  e.stopPropagation();
	expanded = this.id;
	this.classList.add('project-card--expanded');

	// hide all non-expanded projects
	var closedCards = queryAll('.project-card:not(#'+ this.id + ')');
	[].forEach.call(closedCards, function (card) {
    card.style.display ='none';
  })

	// add closeProject listener to !.project-card--expanded elements
	document.addEventListener('click', closeProjectListener)

  // cancel x to close to DOM
  var div = document.createElement('div');
  div.className = 'cancel';
  div.addEventListener('click', closeProjectListener);
	this.appendChild(div);
}

var closeProject = function(e) {
  e.stopPropagation();

	// remove whole document listener
	document.removeEventListener('click', closeProjectListener);

	// remove cancel button from DOM
  var cancel = query('.cancel')
  if (cancel != null) {
    cancel.remove();
    }

	query('#'+expanded).classList.remove('project-card--expanded');
	// display hidden elements
	var closedCards = queryAll('.project-card:not(#'+ expanded + ')');
	[].forEach.call(closedCards, function(card) {
			card.style.display = 'block';
	})

	expanded = false;
}

