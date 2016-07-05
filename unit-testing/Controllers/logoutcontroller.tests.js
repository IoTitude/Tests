describe("Controller", function() {

	describe("LogoutController", function() {
		var $scope,
		controller,
		stateMock,
		rScope={},
		ErrorServiceMock,
		BaasBoxServiceMock,
		q,
		ionicPopupMock;

		beforeEach(module('instapp.logoutController'));

		beforeEach(inject(function($rootScope, $controller, $q)
    {
			q = $q;
			$scope = $rootScope.$new();

			BaasBoxServiceMock = {
				logout: function() {
					return 'logoutCalled';
				},
			};
			stateMock = {
				go: function() {
					return 'StateChanged';
				}
			}
			ErrorServiceMock = {
				handleError: function() {
					return 'ErrorHandled';
				}
			}

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
			var promise = q.when();

			spyOn(BaasBoxServiceMock, 'logout').and.returnValue(promise);
			//BaasBoxServiceMock.logout();
			//spyOn($scope, 'logout');
			$scope.logout();
			//spyOn(stateMock, 'go');
			//stateMock.go();

			//expect($scope.logout).toHaveBeenCalled();
			expect(BaasBoxServiceMock.logout).toHaveBeenCalled();
			//expect(stateMock.go).toHaveBeenCalled();

		});
	});
});

