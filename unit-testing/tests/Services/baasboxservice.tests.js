describe("BaasBoxService", function() {
var BaasBoxService,
    SERVER_CONFIG,
    $httpMock,
    $http,

    httpBackend;


beforeEach(module("instapp.baasBoxService", function($provide){
  //mock server_config
  SERVER_CONFIG = {

    BASE_URL: "url",

    APPCODE: "123467890"

  }
  //replace config with mock config
  $provide.value('SERVER_CONFIG', SERVER_CONFIG);
}));


beforeEach(inject(function(_BaasBoxService_, $http, $httpBackend){
  BaasBoxService = _BaasBoxService_;
  httpBackend = $httpBackend;

}));

it("should post login", function() {

spyOn(BaasBoxService, 'login').and.callThrough();

//expect http.POST with url and data
httpBackend.expectPOST('url/login', {"username": "usr", "password": "pw", "appcode": "123467890"}).respond('success');

BaasBoxService.login("usr", "pw");

httpBackend.flush();
});
it("should get tasks", function() {

spyOn(BaasBoxService, 'getTasks').and.callThrough();

httpBackend.expectGET('url/document/Master').respond('success');

BaasBoxService.getTasks();

httpBackend.flush();
  });
  it("should post logout", function() {
    spyOn(BaasBoxService, 'logout').and.callThrough();

    httpBackend.expectPOST('url/logout',{}).respond('success');

    BaasBoxService.logout();

    httpBackend.flush();
});
it("should toggle task", function() {
  spyOn(BaasBoxService, 'toggleTask').and.callThrough();

  httpBackend.expectPUT('url/document/Master/undefined/.enabled').respond('success');

  BaasBoxService.toggleTask(1);

  httpBackend.flush();


});

it("should toggle taskSDN", function() {
  spyOn(BaasBoxService, 'toggleTask').and.callThrough();

  httpBackend.expectPUT('url/plugin/instapp.toggle').respond('success');

  BaasBoxService.toggleTaskSDN(1);

  httpBackend.flush();

});

it("should set token", function() {
  spyOn(BaasBoxService, 'setToken').and.callThrough();

  spyOn(BaasBoxService, 'getTasks').and.callThrough();

  BaasBoxService.setToken(1);

  //session token should be set to 1 when callin getTasks()
  httpBackend.expectGET('url/document/Master',
   {"X-BB-SESSION":"1","X-BAASBOX-APPCODE":"123467890","Accept":"application/json, text/plain, */*"})
        .respond('success');

  BaasBoxService.getTasks();

  httpBackend.flush();

});

});

