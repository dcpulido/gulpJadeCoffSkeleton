/*
* Dependencias
*/
var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');
/*
* Configuración de las tareas 'demo'
*/
gulp.task('compilacion', function () {
gulp.src('source/**/*.js')
.pipe(concat('compilacion.js'))
.pipe(uglify())
.pipe(gulp.dest('js/'))
});