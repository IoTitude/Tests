describe("Controller", function() {

	describe("LoginController", function() {
		var $scope,
		controller,
		stateMock,
		rScope={},
		ErrorServiceMock,
		TasksServiceMock,
		BaasBoxServiceMock,
		q,
		deferred,
		ionicPopupMock;

		beforeEach(module('instapp.loginController'));

		beforeEach(inject(function($rootScope, $controller, $q)
    {
			q = $q
			$scope = $rootScope.$new();
			deferred = q.defer();


        	BaasBoxServiceMock = {

          		login: jasmine.createSpy('login spy')
            									.and.returnValue(deferred.promise)
      		};

        stateMock = jasmine.createSpyObj('$state spy', ['go']);

      	ErrorServiceMock = jasmine.createSpyObj('ErrorService spy', ['handleError']);

        ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

			  TasksServiceMock = jasmine.createSpy('TasksService spy');


			$controller('LoginController', {
				$scope: $scope,
				$ionicPopup: ionicPopupMock,
				$state: stateMock,
				BaasBoxService: BaasBoxServiceMock,
				ErrorService: ErrorServiceMock,
				TasksService: TasksServiceMock,
			});
		}));

		it('$scope should be defined', function() {

			expect($scope).toBeDefined();
		});

		it('login should be called', function() {

			$scope.login();


			expect(BaasBoxServiceMock.login).toHaveBeenCalled();

		});
		it('login should have been called with credentials', function() {

			$scope.data.username = 'user'
			$scope.data.password = 'pw'


			$scope.login();

			expect(BaasBoxServiceMock.login).toHaveBeenCalledWith('user', 'pw');

		});

    it('should continue', function() {

      $scope.data.username = 'user'
			$scope.data.password = 'pw'

      $scope.login();

      //BaasBoxServiceMock.login response is resolved here (continues to .then)
			deferred.resolve();

			//Promises are only resolved when Angular digest cycle is triggered
			//$scope.$digest();

      expect(BaasBoxServiceMock.login).toHaveBeenCalledWith('user', 'pw');

  	});


	});
});
