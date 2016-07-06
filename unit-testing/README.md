# Unit Testing
Unit testing of Instapp with [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine.](http://jasmine.github.io/)

## Project setup

Get [Instapp.](https://github.com/IoTitude/Instapp)

Then install Karma and Jasmine in Instapp directory.
```shell
npm install karma karma-jasmine karma-phantomjs-launcher --save-dev
npm install -g karma-cli
npm install -g bower
npm install gulp -g
npm install 
bower install angular-mocks --save-dev
```
Generate Karma configuration file.
```shell
mkdir tests
cd tests
karma init my.conf.js
```

Add files to load in my.conf.js
```javascript
// list of files / patterns to load in the browser
files: [
  '../www/lib/angular/angular.js',
  '../www/js/*.js',
  '../www/js/*/*.js',
  '../www/lib/angular-mocks/angular-mocks.js',
  '**/*tests.js',
  '../tests/*tests.js'
],
```
And change the browser to PhantomJS
```javascript
browsers: ['PhantomJS'],
```

Add test task to gulpfile.js
```javascript
var karma = require('karma').server;

gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/tests/my.conf.js',
        singleRun: true
    }, function() {
        done();
    });
});
```
Clone test directories from unit-testing/tests to Instapp/tests.

Run the tests

```shell
gulp test
```
