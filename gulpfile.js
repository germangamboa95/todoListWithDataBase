var gulp = require('gulp');
var uglify = require('gulp-uglify');

//gulp.task('default', defaultTask);

gulp.task('default', function(){
  gulp.src('*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});



function defaultTask(done) {
  console.log('hello cruel world');

  done();
}
