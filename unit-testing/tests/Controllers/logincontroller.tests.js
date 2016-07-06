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
				login: function(username, password) {
					//return q.when();
					var deferred = q.defer();
					deferred.resolve();
					return deferred.promise;
				},
				setToken: function(newToken) {
					token = newToken
				},
				getTasks: function() {
					return 'tasks updated'
				}
			};
			stateMock = {
				go: function(dest) {
					return dest
				}
			}
			ErrorServiceMock = {
				handleError: function() {
					return 'ErrorHandled'
				}
			}
			TasksServiceMock = {
				set: function(t) {
					tasks = t
				},
				get: function() {
					return tasks
				}
			}

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
			var promise = q.when();

			spyOn(BaasBoxServiceMock, 'login').and.returnValue(promise);
			//BaasBoxServiceMock.logout();
			//spyOn($scope, 'logout');
			$scope.login();
			//spyOn(stateMock, 'go');
			//stateMock.go();

			//expect($scope.logout).toHaveBeenCalled();
			expect(BaasBoxServiceMock.login).toHaveBeenCalled();
			//expect(stateMock.go).toHaveBeenCalled();

		});
		it('login should have been called with credentials', function() {

			$scope.data.username = 'user'
			$scope.data.password = 'pw'

			var promise = q.when();

			spyOn(BaasBoxServiceMock, 'login').and.returnValue(promise);

			$scope.login();

			expect(BaasBoxServiceMock.login).toHaveBeenCalledWith('user', 'pw');

			//expect(BaasBoxServiceMock.login('user', 'pw')).toEqual('loginCalled');

		});
		
		it('async test', function() {

			$scope.data.username = 'user'
			$scope.data.password = 'pw'
			deferred.resolve(1);
			//var promise = q.when();

			spyOn(BaasBoxService, 'login').and.returnValue(deferred.promise);

			$scope.$apply();

			$scope.login();

			spyOn(BaasBoxService, 'setToken');

			expect(BaasBoxService.login).toHaveBeenCalled();



		});
	});
});
