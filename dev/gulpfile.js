var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var autoprefixerOpts = {browsers: ['last 4 versions'],cascade: false};

var scssDir = "assets/scss/",
    cssDir  = "assets/css/";

gulp.task("scss",function(){
    return  gulp.src(scssDir + "app.scss")                  // get the main sass files
            .pipe( plugins.sass())
            .pipe( plugins.autoprefixer(autoprefixerOpts) ) // prefix the styles
            .pipe( plugins.cleanCss() )                     // minify css
            .pipe( gulp.dest(cssDir) )
            .pipe(browserSync.stream());
});

gulp.task("watch", ['scss'], function(){

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });


    gulp.watch(scssDir + "**/*.scss", ['scss']);
    gulp.watch("**/*.html").on('change', browserSync.reload);

    return gulp.watch(scssDir + '**/*.scss', ['scss']);     // Watch the main sass and execute the task 'scss'
})

gulp.task('default', ['watch']);