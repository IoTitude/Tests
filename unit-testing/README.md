# Unit Testing
Unit testing of Instapp with Karma and Jasmine.

## Project setup

```shell
git clone https://github.com/IoTitude/Instapp.git  Instapp
cd Instapp
git fetch --tags
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
git checkout $latestTag
```

```shell
npm install karma karma-jasmine karma-phantomjs-launcher --save-dev
sudo npm install -g karma-cli
sudo npm install 
bower install angular-mocks --save-dev

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
  '../www/lib/angular-mocks/angular-mocks.js',
  '**/*tests.js'
],
```

And change the browser to PhantomJS
```javascript
// Use the PhantomJS browser instead of Chrome
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
Copy the Controllers directory to Instapp/tests.

Run the tests

```shell
gulp test
```
