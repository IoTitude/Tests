describe("Controller", function() {

	describe("TasksController", function() {
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

		beforeEach(module('instapp.tasksController'));

		beforeEach(inject(function($rootScope, $controller, $q)
    {
			q = $q;
			$scope = $rootScope.$new();
      deferred = q.defer();

      			BaasBoxServiceMock = {

      				getTasks: jasmine.createSpy('getTasks spy')
      											.and.returnValue(deferred.promise),

              setToken: jasmine.createSpy('setToken spy')
                                .and.returnValue(deferred.promise)
				};

      stateMock = jasmine.createSpyObj('$state spy', ['go']);

			ErrorServiceMock = jasmine.createSpyObj('ErrorService spy', ['handleError']);

      ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

    //  TasksServiceMock = jasmine.createSpyObj('TasksService spy', ['set', 'get']);

      TasksServiceMock = {

        set: jasmine.createSpy('set spy'),

        get: jasmine.createSpy('get spy')

      }


			$controller('TasksController', {
				$scope: $scope,
				$ionicPopup: ionicPopupMock,
				$state: stateMock,
				BaasBoxService: BaasBoxServiceMock,
				ErrorService: ErrorServiceMock,
        TasksService: TasksServiceMock,

			});
		}));

    it('getTasks should be called', function() {

    $scope.update();


    expect(BaasBoxServiceMock.getTasks).toHaveBeenCalled();
});



		});

});
