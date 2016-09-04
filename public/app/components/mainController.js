app.controller('MainCtrl', function ($scope, $state, $http) {

	var mc = this;	

	var contactVisible = false;
	var messageSent = false;
	
	mc.formData = {};

	mc.toggleContact = function() {
		contactVisible = !contactVisible;
	}

	mc.isActive = function(state) {
		return state === $state.current;
	}



	$scope.processForm = function() {


		$http({
		method 	: 'POST',
		url 	: 'mailer.php',
		data    : $.param($scope.formData),
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.then(function(data) {
			data = data.data; //Through parsing, the data we get back is more than we need. look at data object to debug.
			
			

			if (!data.success) {
				//if not successful, bind errors to error variables
				$scope.errorName = data.errors.userName; 
				$scope.errorEmail = data.errors.userMessage;
				$scope.errorMessage = data.errors.userEmail;
				$scope.messageError = true;


			} else {

			   $scope.message = data.message;
			   $scope.messageSent = true;
			}
		})
		
	}
});


