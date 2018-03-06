var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', defaultTask);

function defaultTask(done) {
  console.log('hello cruel world');
  
  done();
}
