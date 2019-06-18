const path = require('./paths.json');
const gulp = require('gulp');



module.exports = function() {
	return gulp.src(path.web.src)
		.pipe(gulp.dest(path.dist));
}