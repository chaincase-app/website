app.config(function ($stateProvider, $urlRouterProvider) {

	// Unmatched url redirects to work
	$urlRouterProvider.otherwise("/work");

	$stateProvider
		.state('work',
			{
				url: "/work",
				templateUrl: 'views/work.html'
			})
		.state('profile',
			{
				url: "/profile",
				templateUrl: 'views/profile.html'
			})
		.state('contact',
			{
				url: "/contact",
				templateUrl: 'views/contact.html'
			})
});


