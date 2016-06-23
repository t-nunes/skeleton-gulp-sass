var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var autoprefixerOpts = {browsers: ['last 4 versions'],cascade: false};

var scssDir = "assets/scss/",
    cssDir  = "assets/css/";

gulp.task("scss",function(){
    return  gulp.src(scssDir + "app.scss")                  // get the main sass files
            .pipe( plugins.sass())
            .pipe( plugins.autoprefixer(autoprefixerOpts) ) // prefix the styles
            .pipe( plugins.cleanCss() )                     // minify css
            .pipe( gulp.dest(cssDir) );
});

gulp.task("watch", ['scss'], function(){
    return gulp.watch(scssDir + '**/*.scss', ['scss']);     // Watch the main sass and execute the task 'scss'
})