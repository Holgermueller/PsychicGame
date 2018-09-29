const gulp = require('gulp');
const less = require('gulp-less');
const bs = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglifyes');

// set up browser-sync
gulp.task('browser-sync', () => {
    bs.init({
        server: {
            baseDir: './',
        },
    });
});

// compile less files
gulp.task('less', () => {
    gulp.src('./assets/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./assets'));
});

// clean up css
gulp.task('minify-css', () => {
    gulp.src('./assets/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./assets'));
});

// uglify js
gulp.task('uglify', () => {
    gulp.src('./assets/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./assets'));
})

// watch files for changes
gulp.task('watch', () => {
    gulp.watch('./assets/**/*.less', ['less']).on('change', bs.reload);
    gulp.watch('./assets/**/*.css', ['minify-css']).on('change');
    gulp.watch('./assets/**/*.js', ['uglify']).on('change');
});

// set default tasks
gulp.task('default', ['browser-sync', 'watch']);
