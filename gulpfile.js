var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var copy = require('gulp-copy');



gulp.task('scripts', function () {
    console.log('Building scripts .......\n');
    gulp.src([
        './public/src/routes/*.js',
        './public/src/service/*.js',
        './public/src/directives/*.js',
        './public/src/controller/*.js'
    ])

        .pipe(concat('app.dist.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./public/app'));
});

gulp.task('template', function () {
    console.log('Copying templates .......\n');
    gulp.src([
        './public/src/templates/**/*.html'

    ]).pipe(copy('./public/app/templates',{ prefix: 4 }));
});

gulp.task('build', ['scripts','template'],function () {
    console.log('Building app .......\n');

});