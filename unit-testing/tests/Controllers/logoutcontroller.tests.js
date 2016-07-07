describe("Controller", function() {

	describe("LogoutController", function() {
		var $scope,
		controller,
		stateMock,
		rScope={},
		ErrorServiceMock,
		BaasBoxServiceMock,
		q,
    deferred,
		ionicPopupMock;

		beforeEach(module('instapp.logoutController'));

		beforeEach(inject(function($rootScope, $controller, $q)
    {
			q = $q;
			$scope = $rootScope.$new();
      deferred = q.defer();

      			BaasBoxServiceMock = {

      				logout: jasmine.createSpy('logout spy')
      											.and.returnValue(deferred.promise)
				};

      stateMock = jasmine.createSpyObj('$state spy', ['go']);

			ErrorServiceMock = jasmine.createSpyObj('ErrorService spy', ['handleError']);

      ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);


			$controller('LogoutController', {
				$scope: $scope,
				$ionicPopup: ionicPopupMock,
				$state: stateMock,
				BaasBoxService: BaasBoxServiceMock,
				ErrorService: ErrorServiceMock,
			});
		}));

		it('$scope should be defined', function() {

			expect($scope).toBeDefined();
		});

		it('logout should be called', function() {

			$scope.logout();

			//expect($scope.logout).toHaveBeenCalled();

			expect(BaasBoxServiceMock.logout).toHaveBeenCalled();

		});
    it('State should change to login', function() {


      $scope.logout();

      //BaasBoxServiceMock.login response is resolved here (continues to .then)
			deferred.resolve();

			//Promises are only resolved when Angular digest cycle is triggered
			$scope.$digest();


      expect(stateMock.go).toHaveBeenCalledWith('login');
  	});
	});
});
